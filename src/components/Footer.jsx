import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import Arrow from "../../public/Arrow";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mensagemFooter}>
        <p>Esta é a seção administrativa do marketplace REST.</p>
        <p>Todos os seus passos estão sendo registrados.</p>
      </div>
      <nav className={styles.footerNav}>
        <NavLink to="/">
          Painel de Controle <Arrow />
        </NavLink>
        <NavLink to="/produtos">
          Produtos
          <Arrow />
        </NavLink>
        <NavLink to="/usuarios">
          Usuarios
          <Arrow />
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
