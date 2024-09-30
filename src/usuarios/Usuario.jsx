import React from "react";
import UsuarioIndividual from "./UsuarioIndividual";
import styles from "./UsuarioIndividual.module.css";
import { UserContext } from "../userContext";

const Usuario = () => {
  const { usuarios, loading } = React.useContext(UserContext);
  return (
    <section className={`box`}>
      <h1>Gerencimento de Administradores</h1>
      <div
        className={`containers ${styles.containerUsers} ${
          (loading || !usuarios) && styles.containerVazio
        }`}
      >
        {loading && <div className="loading gg"></div>}
        {!loading &&
          usuarios &&
          usuarios.map((user) => (
            <UsuarioIndividual user={user} key={user.nome} />
          ))}
        {usuarios && usuarios.length === 0 && (
          <h2 className={styles.nenhumProduto}>
            Nenhum administrador cadastrado? Tem algo de errado.
          </h2>
        )}
      </div>
    </section>
  );
};

export default Usuario;
