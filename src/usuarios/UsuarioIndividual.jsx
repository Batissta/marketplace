import React from "react";
import Botao from "../components/Botao";
import styles from "./UsuarioIndividual.module.css";
import Arrow from "../../public/Arrow";
import { UserContext } from "../userContext";

const UsuarioIndividual = ({ user }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { deleteOne } = React.useContext(UserContext);

  return (
    <div className={`container ${styles.containerUserIndividual}`}>
      <img src={user.imagem} alt={`foto de ${user.nome}`} />
      <h2 className={styles.tituloNome}>
        <p>{user.nome}</p>
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
            <p className={styles.username}>username: {user.nome}</p>
            <p className={styles.cpf}>cpf: {user.cpf}</p>
            <p className={styles.cpf}>
              Cadastro: {user.dataRegistro.split("T")[0]}
            </p>
          </div>
        )}
      </div>
      <Botao
        onClick={() =>
          deleteOne(`https://backrestend.vercel.app/usuarios/${user._id}`)
        }
      >
        Remover usuário
      </Botao>
    </div>
  );
};

export default UsuarioIndividual;
