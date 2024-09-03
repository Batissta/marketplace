import React from "react";
import styles from "./HomePage.module.css";
import Botao from "../components/Botao";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className={"box"}>
      <h1>Painel de Controle</h1>
      <div className={"containers"}>
        <div className={"container"}>
          <img
            src="https://techpearl.com/wp-content/uploads/2021/11/Product-management.jpg"
            alt="Gerenciamento de produtos"
          />
          <h2>Gerenciamento de Produtos</h2>
          <Link to={"/produtos"}>
            {" "}
            <Botao>Gerenciar produtos</Botao>
          </Link>
        </div>
        <div className={"container"}>
          <img
            src="https://blog.protarefa.com.br/wp-content/uploads/2019/02/users.jpg"
            alt="Gerenciamento de estoque"
          />
          <h2>Gerenciamento de Usuários</h2>
          <Link to={"/usuarios"}>
            {" "}
            <Botao>Gerenciar usuários</Botao>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
