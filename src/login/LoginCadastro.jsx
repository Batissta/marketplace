import React from "react";
import styles from "./LoginForm.module.css";
import Botao from "../components/Botao";
import { Link } from "react-router-dom";

const LoginCadastro = () => {
  const [nome, setNome] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [dataNascimento, setDataNascimento] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  return (
    <div className={styles.loginConteudo}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="username">Nome Completo</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={({ target }) => {
              setNome(target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={({ target }) => {
              setCpf(target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="dataNascimento">Data de Nascimento</label>
          <input
            type="date"
            id="dataNascimento"
            value={dataNascimento}
            onChange={({ target }) => {
              setDataNascimento(target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={senha}
            onChange={({ target }) => {
              setSenha(target.value);
            }}
          />
        </div>
        <Botao>Criar Conta</Botao>
      </form>
      <div className={styles.navegue}>
        <Link to="/login" className={styles.navLink}>
          Ir para login
        </Link>
      </div>
    </div>
  );
};

export default LoginCadastro;
