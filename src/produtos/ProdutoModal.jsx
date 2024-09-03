import React from 'react';
import styles from './ProdutoModal.module.css';
import ModalDesconto from './ModalDesconto';
import ModalAdicionar from './ModalAdicionar';
import { UserContext } from '../userContext';

const ProdutoModal = ({
  adicionarProduto,
  setAdicionarProduto,
  modal,
  setModal,
  ...props
}) => {
  const { error, setError } = React.useContext(UserContext);
  if (modal)
    return (
      <div
        className={styles.modal}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            setModal(null);
            setError('');
          }
        }}
      >
        <ModalDesconto modal={modal} setModal={setModal} />
      </div>
    );
  else if (adicionarProduto)
    return (
      <div
        className={styles.modal}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            setAdicionarProduto(false);
            setError('');
          }
        }}
      >
        <ModalAdicionar
          adicionarProduto={adicionarProduto}
          setAdicionarProduto={setAdicionarProduto}
        />
      </div>
    );
};

export default ProdutoModal;
