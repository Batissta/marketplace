import React from "react";
import styles from "./ProdutoModal.module.css";

const ProdutoModal = ({ modal, setModal }) => {
  const handleOutsideClick = (e) => {

  };
  return <div className={styles.modal} onClick={handleOutsideClick}>
    {modal && (
        <div>
            
        </div>
    )}
  </div>;
};

export default ProdutoModal;
