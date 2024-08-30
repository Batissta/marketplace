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
        {dados.desconto > 0 && (
          <div>
            <p className={styles.precoRiscado}>
              R$ {dados.p.toFixed(2).replace(".", ",")}
            </p>
            <p>
              R${" "}
              {(dados.p - (dados.p * dados.desconto) / 100)
                .toFixed(2)
                .replace(".", ",")}
            </p>
          </div>
        )}
        {!dados.desconto > 0 && (
          <p>R$ {dados.p.toFixed(2).replace(".", ",")}</p>
        )}
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
