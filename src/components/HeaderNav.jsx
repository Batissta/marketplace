import React from "react";
import UserSvg from "../../public/UserSvg.jsx";
import useMedia from "../hooks/useMedia";
import { NavLink } from "react-router-dom";
import styles from "./HeaderNav.module.css";

const HeaderNav = () => {
  const mobile = useMedia("(width <= 600px)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  React.useEffect(() => {
    setMobileMenu(false);
  }, [mobile]);
  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileBotao} ${
            mobileMenu && styles.mobileBotaoAtivo
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${!mobile && styles.nav} ${mobile && styles.navMobile} ${
          mobileMenu && styles.navMobileAtivo
        }`}
      >
        <NavLink to="/usuarios">Administradores</NavLink>
        <NavLink to="/clientes">Clientes</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
        <NavLink to="/login">
          Login <UserSvg />
        </NavLink>
      </nav>
    </>
  );
};

export default HeaderNav;
