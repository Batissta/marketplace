import React from 'react';
import styles from './ProdutoModal.module.css';
import Botao from '../components/Botao';
import Error from '../helper/Error';
import { UserContext } from '../userContext';

const ModalAdicionar = (props) => {
  const { produtos, setProdutos, error, setError } =
    React.useContext(UserContext);
  const [url, setUrl] = React.useState('');
  const [h2, setH2] = React.useState('');
  const [h3, setH3] = React.useState('');
  const [span, setSpan] = React.useState('');
  const [p, setP] = React.useState('');

  const validaForm = () => {
    if (url && h2 && h3 && span && p) {
      return true;
    } else {
      setError('Preencha todos os campos');
      return false;
    }
  };
  const handleAdicionaProduto = () => {
    if (validaForm()) {
      const novoProduto = {
        imgSrc: url,
        h2,
        h3,
        span: `REF: ${span}`,
        p: Number(p.replace(',', '.')),
        desconto: 0,
      };
      setProdutos([...produtos, novoProduto]);
      setUrl('');
      setH2('');
      setH3('');
      setSpan('');
      setP('');
      props.setAdicionarProduto(false);
    }
  };
  return (
    <div className={`box ${styles.box}`}>
      <h1>Crie um novo produto </h1>
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          handleAdicionaProduto();
        }}
        className={`${styles.formModal} ${styles.formModalAdicionar}`}
      >
        <div>
          <label htmlFor="forURL">URL da imagem: </label>
          <input
            id="forURL"
            type="text"
            value={url}
            onChange={({ target }) => {
              setUrl(target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="forURL">Nome do produto: </label>
          <input
            id="forURL"
            type="text"
            value={h2}
            onChange={({ target }) => {
              setH2(target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="forURL">Marca do produto: </label>
          <input
            id="forURL"
            type="text"
            value={h3}
            onChange={({ target }) => {
              setH3(target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="forURL">Identificação: </label>
          <input
            id="forURL"
            type="text"
            value={span}
            onChange={({ target }) => {
              setSpan(target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="forURL">Preço: </label>
          <input
            id="forURL"
            type="text"
            value={p}
            onChange={({ target }) => {
              setP(target.value);
            }}
          />
        </div>
        <Botao>Adicionar</Botao>
      </form>
      <Error error={error} />
    </div>
  );
};

export default ModalAdicionar;
