import React from "react";
import styles from "./ProdutoModal.module.css";
import Botao from "../components/Botao";
import Error from "../helper/Error";
import { UserContext } from "../userContext";

const ModalAdicionar = (props) => {
  const { insertOne, error, setError } = React.useContext(UserContext);
  const [imagem, setImagem] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [tipo, setTipo] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [marca, setMarca] = React.useState("");
  const [preco, setPreco] = React.useState("");

  const validaForm = () => {
    if (imagem && nome && descricao && tipo && marca) {
      return true;
    } else {
      setError("Preencha todos os campos");
      return false;
    }
  };
  const handleAdicionaProduto = () => {
    if (validaForm()) {
      insertOne(
        {
          nome,
          tipo,
          descricao,
          imagem,
          preco: Number(preco.replace(".", "").replace(',', '.')),
        },
        `https://backrestend.vercel.app/produtos/`
      );
      setImagem("");
      setNome("");
      setTipo("");
      setDescricao("");
      setPreco(0);
      setDescricao("");
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
          <label htmlFor="forImagem">URL da imagem: </label>
          <input
            id="forImagem"
            type="text"
            placeholder="https://link-da-imagem-de-sua-peça.png"
            value={imagem}
            onChange={({ target }) => {
              setImagem(target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="forNome">Nome do produto: </label>
          <input
            id="forNome"
            type="text"
            placeholder="MacBook 12 pro"
            value={nome}
            onChange={({ target }) => {
              setNome(target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="forTipo">Tipo do produto: </label>
          <input
            id="forTipo"
            type="text"
            placeholder="Eletrônico"
            value={tipo}
            onChange={({ target }) => {
              setTipo(target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="forDescricao">Descrição: </label>
          <input
            id="forDescricao"
            type="text"
            placeholder="Laptop de 13 polegadas; Processador..."
            value={descricao}
            onChange={({ target }) => {
              setDescricao(target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="forMarca">Marca: </label>
          <input
            id="forMarca"
            type="text"
            placeholder="APPLE"
            value={marca}
            onChange={({ target }) => {
              setMarca(target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="forPreco">Preço: </label>
          <input
            id="forPreco"
            type="text"
            placeholder="999.9"
            value={preco}
            onChange={({ target }) => {
              setPreco(target.value);
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
