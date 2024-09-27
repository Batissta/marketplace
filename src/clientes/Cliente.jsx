import React from 'react';
import ClienteIndividual from './ClienteIndividual';
import styles from '../usuarios/UsuarioIndividual.module.css';
import { UserContext } from '../userContext';

const Cliente = () => {
  const { clientes } = React.useContext(UserContext);

  
  if (!Array.isArray(clientes)) {
    return <h2 className={styles.nenhumProduto}>Nenhum cliente cadastrado...</h2>;
  }

  return (
    <div>
      <section className="box">
        <h1>Clientes Cadastrados</h1>
        <div
          className={`containers ${styles.containerUsers} ${
            clientes.length === 0 && styles.containerVazio
          }`}
        >
          {clientes.length > 0 ? (
            clientes.map((user) => (
              <ClienteIndividual user={user} key={user.nome} /> 
            ))
          ) : (
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


