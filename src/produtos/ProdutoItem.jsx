import React from "react";
import Lixeira from "../../public/Lixeira.jsx";
import Lapis from "../../public/Lapis.jsx";
import styles from "./ProdutoItem.module.css";
import { UserContext } from "../userContext.jsx";

const ProdutoItem = ({ dados, setModal }) => {
  const { deleteOne } = React.useContext(UserContext);

  if (dados)
    return (
      <div className={styles.container}>
        <img className={styles.imgContainer} src={dados.imagem} />
        <div className={styles.descText}>
          <h2>{dados.nome}</h2>
          <h3>{dados.marca}</h3>
          <span>{dados.descricao}</span>
          {dados.promocao > 0 && (
            <div>
              <p className={styles.precoRiscado}>
                R$ {dados.preco.toFixed(2).replace(".", ",")}
              </p>
              <p>
                R${" "}
                {(dados.preco - (dados.preco * dados.promocao) / 100)
                  .toFixed(2)
                  .replace(".", ",")}
              </p>
            </div>
          )}
          {!dados.promocao > 0 && (
            <p>R$ {dados.preco.toFixed(2).replace(".", ",")}</p>
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
          <button
            className={styles.buttoEdit}
            onClick={() => {
              deleteOne(`https://backrestend.vervel.app/${dados._id}`);
            }}
          >
            <Lixeira />
          </button>
        </div>
      </div>
    );
};

export default ProdutoItem;
