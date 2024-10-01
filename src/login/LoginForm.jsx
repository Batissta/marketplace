import React from "react";
import styles from "./LoginForm.module.css";
import Botao from "../components/Botao";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../userContext.jsx";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const { login } = React.useContext(UserContext);
  return (
    <div className={styles.loginConteudo}>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (email && senha) {
            login({ email, senha });
            <Navigate to={"/"} />;
          }
        }}
      >
        <div>
          <label htmlFor="username">Email</label>
          <input
            type="email"
            id="username"
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
