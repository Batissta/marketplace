import React from "react";
import Botao from "../components/Botao";
 import styles  from "../usuarios/UsuarioIndividual.module.css" 
import Arrow from "../../public/Arrow";
import { UserContext } from "../userContext";

const ClienteIndividual = ({ client }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { clientes, setClientes } = React.useContext(UserContext);
  const anoNascimento = client.dataNascimento.split("/")[2];
  const date = new Date().getFullYear();

  const handleRemoveCliente = () => {
    const novaListaDeClientes = clientes.filter((cliente) => cliente !== client);
    setClientes(novaListaDeClientes); 
  };

  return (
    <div className={`container ${styles.containerClienteIndividual}`}>
      <img src={client.imgSrc} alt={`foto de ${client.nome}`} />
      <h2 className={styles.tituloNome}>
        <p>{client.nome}</p>
        <p>
          {date - +anoNascimento} anos
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
            <p className={styles.username}>username: {client.username}</p>
            <p className={styles.cpf}>cpf: {client.cpf}</p>
            <p className={styles.cpf}>Cadastro: {client.dataCadastro}</p> 
          </div>
        )}
      </div>
      <Botao onClick={handleRemoveCliente}>Remove Cliente </Botao>
    </div>
  );
};

export default ClienteIndividual;
