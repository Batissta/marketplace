import React from "react";
import styles from "./LoginForm.module.css";
import Botao from "../components/Botao";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const readUser = () => {};
  return (
    <div className={styles.loginConteudo}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            value={usuario}
            onChange={({ target }) => {
              setUsuario(target.value);
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
        <Botao>login</Botao>
      </form>
      <div className={styles.navegue}>
        <Link to={"/recuperar"} className={styles.navLink}>
          Esqueceu a senha?
        </Link>
        <Link to="/login/cadastro" className={styles.navLink}>
          Cadastrar
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
