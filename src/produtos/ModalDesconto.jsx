import React from "react";
import styles from "./ProdutoModal.module.css";
import Botao from "../components/Botao";
import { UserContext } from "../userContext";
import Error from "../helper/Error";

const ModalDesconto = ({ modal, setModal }) => {
  const [produto, setProduto] = React.useState(null);
  const [desconto, setDesconto] = React.useState(0);
  const { produtos, setProdutos, error, setError } =
    React.useContext(UserContext);

  const handleRemoveDesconto = () => {
    const descontoRemovido = {
      imgSrc: modal.imgSrc,
      h2: modal.h2,
      h3: modal.h3,
      span: modal.span,
      p: modal.p,
      desconto: 0,
    };
    setProduto(descontoRemovido);
    const novosProdutos = produtos.map((produto) => {
      if (produto.h2 === modal.h2) return descontoRemovido;
      else return produto;
    });
    setProdutos(novosProdutos);
  };

  const handleNovoDesconto = () => {
    if (desconto > 0 && desconto <= 90) {
      const produtoComDesconto = {
        imgSrc: modal.imgSrc,
        h2: modal.h2,
        h3: modal.h3,
        span: modal.span,
        p: modal.p,
        desconto: desconto,
      };
      setProduto(produtoComDesconto);
      const novosProdutos = produtos.map((produto) => {
        if (produto.h2 === modal.h2) return produtoComDesconto;
        else return produto;
      });
      setProdutos(novosProdutos);
      setModal(null);
    } else {
      setError("O desconto deve ser entre 1 e 90%.");
    }
  };
  React.useEffect(() => {
    setProduto(modal);
  }, []);
  React.useEffect(() => {
    if (modal.desconto > 0) setDesconto(modal.desconto);
  }, [produto]);
  if (produto)
    return (
      <div className={`box ${styles.box}`}>
        <h1>Gerencie cupons de desconto </h1>
        {produto.desconto > 0 && (
          <p className={styles.descontoExistente}>
            Este produto possui um desconto de {produto.desconto}%
          </p>
        )}
        <form
          onSubmit={(e) => e.preventDefault()}
          className={`${styles.formModal}`}
        >
          <label htmlFor="forDesconto">
            Digite a porcentagem do desconto:{" "}
          </label>
          <input
            id="forDesconto"
            type="number"
            value={desconto}
            onChange={({ target }) => {
              setDesconto(target.value);
            }}
          />
          <div className={styles.decisoes}>
            <Botao
              className={"botaoInverso"}
              onClick={handleRemoveDesconto}
              disabled={!produto.desconto > 0 ? true : false}
            >
              Remover Desconto
            </Botao>
            {produto.desconto > 0 && (
              <Botao onClick={handleNovoDesconto}>Atualizar Desconto</Botao>
            )}
            {produto.desconto === 0 && (
              <Botao onClick={handleNovoDesconto}>Aplicar Desconto</Botao>
            )}
            {error && <Error error={error} />}
          </div>
        </form>
      </div>
    );
};

export default ModalDesconto;
