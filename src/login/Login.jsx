import React from "react";
import styles from "./LoginForm.module.css";
import LoginCadastro from "./LoginCadastro.jsx";
import LoginForm from "./LoginForm.jsx";
import { Route, Routes } from "react-router-dom";

const Login = () => {
  return (
    <section className={styles.loginForm}>
      <img
        src="https://www.vendaecia.com.br/wp-content/uploads/2021/07/produtos-para-dropshipping.jpg"
        alt="imagem ilustrando um marketplace na visão do desenvolvedor."
      />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="cadastro" element={<LoginCadastro />} />
        <Route path="recuparar" element={<LoginCadastro />} />
      </Routes>
    </section>
  );
};

export default Login;
