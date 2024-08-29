import React from 'react';
import styles from './Usuario.module.css';
import Botao from '../components/Botao';

const Usuario = () => {
  return (
    <section className={styles.box}>
      <h1> Gerencimento </h1>
      <div className={styles.containers}>
        <div className={styles.container}>
          <img
            src="https://i.pinimg.com/originals/4e/45/88/4e458893b1fdc033508016e09fa5553c.jpg"
            width={'200px'}
            height={'auto'}
            alt="Foto de usuario"
          />
          <span>Pedro Lopes</span>
          <Botao>Remover usuário </Botao>
        </div>
        <div className={styles.container}>
          <img
            src="https://evorastudio.com.br/wp-content/uploads/2019/09/LE1A2419b.jpg"
            alt=" Foto da segunda usauria"
          />
          <span>Lorena Maria</span>
          <Botao>Remover usuário </Botao>
        </div>
        <div className={styles.container}>
          <img
            src="https://i.pinimg.com/originals/a5/7a/4b/a57a4bb2e7ddd2b4ee30271b2d989cc1.jpg"
            alt="Foto da terceira usuaria"
          />
          <span>Ana Maria</span>
          <Botao>Remover usuário </Botao>
        </div>
      </div>
    </section>
  );
};

export default Usuario;
