import styles from "./Produtos.module.css";
import Mais from "../../public/Mais.jsx";
import React from "react";
import ProdutoItem from "./ProdutoItem.jsx";
import ProdutoModal from "./ProdutoModal.jsx";
import { UserContext } from "../userContext.jsx";

function Produtos() {
  const [modal, setModal] = React.useState(null);
  const [adicionarProduto, setAdicionarProduto] = React.useState(false);
  const { produtos } = React.useContext(UserContext);

  return (
    <section
      className={`${styles.box} ${!(produtos.length > 0) && styles.mH80vh}`}
    >
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
      <div className={`${produtos.length > 0 && "containers"}`}>
        {produtos.length > 0 &&
          produtos.map((produto) => (
            <ProdutoItem
              modal={modal}
              setModal={setModal}
              dados={produto}
              key={produto.h2}
            />
          ))}
        {produtos.length === 0 && (
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
