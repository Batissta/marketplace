import React from 'react';
import UsuarioIndividual from './UsuarioIndividual';
import styles from './UsuarioIndividual.module.css';
import { UserContext } from '../userContext';

const Usuario = () => {
  const { usuarios } = React.useContext(UserContext);
  return (
    <section className={`box`}>
      <h1>Gerencimento de Usuários</h1>
      <div
        className={`containers ${styles.containerUsers} ${
          !(usuarios.length > 0) && styles.containerVazio
        }`}
      >
        {usuarios &&
          usuarios.map((user) => (
            <UsuarioIndividual user={user} key={user.nome} />
          ))}
        {!(usuarios.length > 0) && (
          <h2 className={styles.nenhumProduto}>Nenhum usuário cadastrado...</h2>
        )}
      </div>
    </section>
  );
};

export default Usuario;
