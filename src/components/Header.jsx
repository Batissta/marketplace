import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <a href="/">Rest MarketPlace</a>
      </div>
      <ul className={styles.links}>
        <li className={styles.headerButton}>
          <a href="/sobre">Como Funciona?</a>
        </li>
        <li className={styles.headerButton}>
          <a href="/precos">Quanto Custa?</a>
        </li>
        <li className={styles.headerButton}>
          <a href="/crie">Crie seu negócio </a>
        </li>
        <li className={styles.headerButton}>
          <a href="/ajuda"> Ajuda </a>
        </li>
      </ul>
      <div className={styles.venderButton}>
        <button className={styles.button}>Comece a vender!</button>
      </div>
    </div>
  );
}

export default Header;
