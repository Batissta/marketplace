import React from "react";
import Botao from "../components/Botao";
import styles from "../usuarios/UsuarioIndividual.module.css";
import Arrow from "../../public/Arrow";
import { UserContext } from "../userContext";

const ClienteIndividual = ({ client }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`container ${styles.containerClienteIndividual}`}>
      <img src={client.imagem} alt={`foto de ${client.nome}`} />
      <h2 className={styles.tituloNome}>
        <p>{client.nome}</p>
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
            <p className={styles.cpf}>Email: {client.email}</p>
            <p className={styles.cpf}>Telefone: {client.telefone}</p>
            <p className={styles.cpf}>
              Data de nascimento: {client.dataNascimento.split("T")[0]}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClienteIndividual;
