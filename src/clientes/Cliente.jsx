import React from "react";
import ClienteIndividual from "./ClienteIndividual.jsx";
import styles from "../usuarios/UsuarioIndividual.module.css";
import { UserContext } from "../userContext";

const Cliente = () => {
  const { clientes, loading } = React.useContext(UserContext);
  return (
    <div>
      <section className="box">
        <h1>Clientes Cadastrados</h1>
        <div
          className={`containers ${styles.containerUsers} ${
            (loading || !clientes) && styles.containerVazio
          }`}
        >
          {loading && <div className="loading gg"></div>}
          {!loading &&
            clientes &&
            clientes.map((user) => (
              <ClienteIndividual client={user} key={user.nome} />
            ))}
          {!loading && !clientes && (
            <h2 className={styles.nenhumProduto}>
              Nenhum cliente cadastrado...
            </h2>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cliente;
