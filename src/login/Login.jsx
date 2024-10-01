import styles from "./LoginForm.module.css";
import LoginCadastro from "./LoginCadastro.jsx";
import LoginForm from "./LoginForm.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import { UserContext } from "../userContext.jsx";

const Login = () => {
  const { logado } = React.useContext(UserContext);
  if (logado) return <Navigate to={"/"} />;
  else
    return (
      <section className={styles.loginForm}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/cadastro" element={<LoginCadastro />} />
        </Routes>
      </section>
    );
};

export default Login;
