import React from "react";
import styles from "./ProdutoModal.module.css";
import ModalDesconto from "./ModalDesconto";
import ModalAdicionar from "./ModalAdicionar";

const ProdutoModal = (props) => {
  const handleOutsideClick = (e) => {
    if (e.currentTarget === e.target) {
      props.setModal(null);
      props.setAdicionarProduto(false);
    }
  };
  if (props.modal)
    return (
      <div
        className={styles.modal}
        onClick={(e) => {
          if (e.currentTarget === e.target) props.setModal(null);
        }}
      >
        <ModalDesconto modal={props.modal} setModal={props.setModal} />
      </div>
    );
  else if (props.adicionarProduto)
    return (
      <div
        className={styles.modal}
        onClick={(e) => {
          if (e.currentTarget === e.target) props.setAdicionarProduto(false);
        }}
      >
        <ModalAdicionar
          adicionarProduto={props.adicionarProduto}
          setAdicionarProduto={props.setAdicionarProduto}
        />
      </div>
    );
};

export default ProdutoModal;
