import React from "react";
import Botao from "../components/Botao";
import styles from "./UsuarioIndividual.module.css";
import Arrow from "../../public/Arrow";
import { UserContext } from "../userContext";

const UsuarioIndividual = ({ user }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { usuarios, setUsuarios } = React.useContext(UserContext);
  const anoNascimento = user.dataNascimento.split("/")[2];
  const date = new Date().getFullYear();

  const handleRemoveUsuario = () => {
    const novaListaDeUsuarios = usuarios.filter((usuario) => usuario !== user);
    setUsuarios(novaListaDeUsuarios);
  };
  return (
    <div className={`container ${styles.containerUserIndividual}`}>
      <img src={user.imgSrc} alt={`foto de ${user.nome}`} />
      <h2 className={styles.tituloNome}>
        <p>{user.nome}</p>
        <p>
          {date - +anoNascimento} {` `} anos
        </p>
      </h2>
      <div className={styles.gaveta}>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen && (
            <>
              Ver menos{" "}
              <Arrow
                style={{ rotate: "-90deg", width: "14px", height: "14px" }}
              />
            </>
          )}
          {!isOpen && (
            <>
              Ver mais{" "}
              <Arrow
                style={{ rotate: "90deg", width: "14px", height: "14px" }}
              />
            </>
          )}
        </button>
        {isOpen && (
          <div className={styles.gavetaInfo}>
            <p className={styles.username}>username: {user.username}</p>
            <p className={styles.cpf}>cpf: {user.cpf}</p>
            <p className={styles.cpf}>Cadastro: {user.dataCadastro}</p>
          </div>
        )}
      </div>
      <Botao onClick={handleRemoveUsuario}>Remover usuário</Botao>
    </div>
  );
};

export default UsuarioIndividual;
