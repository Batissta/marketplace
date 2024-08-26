import { Link, NavLink } from "react-router-dom";
import React from "react";
import styles from "./Header.module.css";
import useMedia from "../hooks/useMedia.jsx";
import UserSvg from "../../public/UserSvg.jsx";

function Header() {
  const mobile = useMedia(('(width<=600px)'));
  const [menuAtivo, setMenuAtivo] = React.useState(false)
  return (
    <header className={styles.headerBg}>
      <div className={styles.header}>
        <Link to="/">
          <h1 className={styles.headerh1}>Rest</h1>
        </Link>
        <ul className={`${mobile && styles.headerUlMobile} ${!mobile && styles.headerUlDesktop}`}>
          <NavLink to="/produtos">Produtos</NavLink>
          <NavLink to="/ajuda">Ajuda</NavLink>
          <NavLink to="/login" className={styles.linkUser}>
            Login <UserSvg />
          </NavLink>
        </ul>
      </div>
    </header>
  );
}

export default Header;
