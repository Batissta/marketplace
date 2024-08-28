import React from "react";
import styles from "./Header.module.css";
import HeaderNav from "./HeaderNav.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <h1>Rest</h1>
      </Link>
      <HeaderNav />
    </header>
  );
};

 export default Header;
