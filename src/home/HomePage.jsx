import React from "react";
import styles from "./HomePage.module.css";
import Botao from "../components/Botao";
import UserSvg from "../../public/UserSvg";

function HomePage() {
  return (
    <section className={styles.box}>
      <h1>Painel de Controle</h1>
      <div className={styles.containers}>
        <div className={styles.container}>
          <img
            src="https://techpearl.com/wp-content/uploads/2021/11/Product-management.jpg"
            alt="Gerenciamento de produtos"
          />
          <h2>Gerenciamento de Produtos</h2>
          <Botao>Gerenciar produtos</Botao>
        </div>
        <div className={styles.container}>
          <img
            src="https://blog.protarefa.com.br/wp-content/uploads/2019/02/users.jpg"
            alt="Gerenciamento de estoque"
          />
          <h2>Gerenciamento de Usuários</h2>
          <Botao>Gerenciar usuários</Botao>
        </div>
        <div className={styles.container}>
          <img
            src="https://irp-cdn.multiscreensite.com/324539d5/dms3rep/multi/gest%C3%A3o+de+estoque.jpg"
            alt="Gerenciamento de estoque"
          />
          <h2>Gerenciamento de Estoque</h2>
          <Botao>Gerenciar estoque</Botao>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
