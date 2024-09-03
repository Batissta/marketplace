import React from 'react';
import styles from './ProdutoModal.module.css';
import ModalDesconto from './ModalDesconto';
import ModalAdicionar from './ModalAdicionar';
import { UserContext } from '../userContext';

const ProdutoModal = (props) => {
  const { error, setError } = React.useContext(UserContext);
  if (props.modal)
    return (
      <div
        className={styles.modal}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            props.setModal(null);
            setError('');
          }
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
          if (e.currentTarget === e.target) {
            props.setAdicionarProduto(false);
            setError('');
          }
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
