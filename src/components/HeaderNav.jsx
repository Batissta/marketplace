import React from "react";
import UserSvg from "../../public/UserSvg.jsx";
import useMedia from "../hooks/useMedia.jsx";
import { NavLink } from "react-router-dom";
import styles from "./HeaderNav.module.css";
import { UserContext } from "../userContext.jsx";
import LogOut from "../../public/LogOut.jsx";

const HeaderNav = () => {
  const mobile = useMedia("(width <= 600px)");
  const { logado, usuario, logOut } = React.useContext(UserContext);
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
        {logado && (
          <>
            <NavLink to="/usuarios">Administradores</NavLink>
            <NavLink to="/clientes">Clientes</NavLink>
            <NavLink to="/produtos">Produtos</NavLink>
            <NavLink to="/usuarios">{usuario && usuario.nome}</NavLink>
            <button className={styles.buttonLogOut} onClick={() => logOut()}>
              {" "}
              <LogOut />
            </button>
          </>
        )}
        {!logado && (
          <NavLink to="/login">
            Login <UserSvg />
          </NavLink>
        )}
      </nav>
    </>
  );
};

export default HeaderNav;
