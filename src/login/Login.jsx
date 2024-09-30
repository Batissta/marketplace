import styles from "./LoginForm.module.css";
import LoginCadastro from "./LoginCadastro.jsx";
import LoginForm from "./LoginForm.jsx";
import { Route, Routes } from "react-router-dom";

const Login = () => {
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
