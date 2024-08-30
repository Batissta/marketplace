import styles from "./Produtos.module.css";
import Mais from "../../public/Mais.jsx";
import React from "react";
import ProdutoItem from "./ProdutoItem.jsx";
import { Link } from "react-router-dom";
import ProdutoModal from "./ProdutoModal.jsx";
import { UserContext } from "../userContext.jsx";

function Produtos() {
  const [modal, setModal] = React.useState(null);
  const { produtos } = React.useContext(UserContext);

  return (
    <section className={styles.box}>
      <h1>
        Adicione um produto
        <Link to="/produtos/adicionar">
          <Mais />
        </Link>
      </h1>
      <div className={`${produtos.length > 0 && "containers"}`}>
        {produtos.length > 0 &&
          produtos.map((produto, index) => (
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
      {modal && <ProdutoModal modal={modal} setModal={setModal} />}
    </section>
  );
}

export default Produtos;
