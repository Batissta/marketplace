import React from "react";
import styles from "./LoginForm.module.css";
import Botao from "../components/Botao";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../userContext";

const LoginCadastro = () => {
  const { singUp, loading } = React.useContext(UserContext);
  const navigate = useNavigate();
  const [nome, setNome] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [dataNascimento, setDataNascimento] = React.useState("");
  const [cpf, setCpf] = React.useState("");

  const createUser = () => {
    if (
      nome &&
      endereco &&
      telefone &&
      email &&
      senha &&
      dataNascimento &&
      cpf
    ) {
      singUp({
        nome,
        endereco,
        telefone,
        email,
        senha,
        dataNascimento,
        cpf,
      });
      navigate("/login");
    }
  };
  return (
    <div className={styles.loginConteudo}>
      <h1>Cadastre-se</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          createUser();
        }}
      >
        <div>
          <label htmlFor="nome">Nome</label>
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
          <label htmlFor="endereco">Endereco </label>
          <input
            type="text"
            id="endereco"
            value={endereco}
            onChange={({ target }) => {
              setEndereco(target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="telefone">Telefone </label>
          <input
            type="text"
            id="telefone"
            value={telefone}
            onChange={({ target }) => {
              setTelefone(target.value);
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
        <Botao>
          {!loading && "Criar Conta"}
          {loading && <div className="loading"></div>}
        </Botao>
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
