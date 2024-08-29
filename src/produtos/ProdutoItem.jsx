import React from "react";
import Lixeira from "../../public/Lixeira.jsx";
import Lapis from "../../public/Lapis.jsx";

import styles from "./ProdutoItem.module.css";

const ProdutoItem = ({ dados, setModal }) => {
  return (
    <div className={styles.container}>
      <img className={styles.imgContainer} src={dados.imgSrc} />
      <div className={styles.descText}>
        <h2>{dados.h2}</h2>
        <h3>{dados.h3}</h3>
        <span>{dados.span}</span>
        <p>R$ {dados.p}</p>
      </div>
      <div className={styles.buttonsList}>
        <button
          className={styles.buttoEdit}
          onClick={() => {
            setModal(dados);
          }}
        >
          <Lapis />
        </button>
        <button className={styles.buttoEdit}>
          <Lixeira />
        </button>
      </div>
    </div>
  );
};

export default ProdutoItem;
