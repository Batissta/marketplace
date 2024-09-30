import styles from "./Produtos.module.css";
import Mais from "../../public/Mais.jsx";
import React from "react";
import ProdutoItem from "./ProdutoItem.jsx";
import ProdutoModal from "./ProdutoModal.jsx";
import { UserContext } from "../userContext.jsx";

function Produtos() {
  const [modal, setModal] = React.useState(null);
  const [adicionarProduto, setAdicionarProduto] = React.useState(false);
  const { produtos, loading } = React.useContext(UserContext);

  return (
    <section className={`${styles.box} box`}>
      <h1>
        <p>Adicione um produto</p>
        <button
          onClick={() => {
            setAdicionarProduto(true);
          }}
        >
          <Mais />
        </button>
      </h1>
      <div
        className={`containers ${styles.containerProdutos} ${
          (loading || !produtos) && styles.containerVazio
        }`}
      >
        {loading && <div className="loading gg"></div>}
        {!loading &&
          produtos &&
          produtos.map((produto) => (
            <ProdutoItem
              modal={modal}
              setModal={setModal}
              dados={produto}
              key={produto.nome}
            />
          ))}
        {!loading && produtos && produtos.lenght === 0 && (
          <h2 className={styles.nenhumProduto}>Nenhum produto cadastrado...</h2>
        )}
      </div>
      {adicionarProduto && (
        <ProdutoModal
          adicionarProduto={adicionarProduto}
          setAdicionarProduto={setAdicionarProduto}
        />
      )}
      {modal && <ProdutoModal modal={modal} setModal={setModal} />}
    </section>
  );
}

export default Produtos;
