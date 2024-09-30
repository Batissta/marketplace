import React from "react";
import styles from "./ProdutoModal.module.css";
import Botao from "../components/Botao";
import { UserContext } from "../userContext";
import Error from "../helper/Error";

const ModalDesconto = ({ modal, setModal }) => {
  const [desconto, setDesconto] = React.useState(0);
  const { updateOne, error, setError, loading } = React.useContext(UserContext);

  const handleNovoDesconto = () => {
    if (desconto > 0 && desconto <= 90) {
      updateOne(
        `https://backrestend.vercel.app/produtos/${modal._id}`,
        Number(desconto)
      );
      setModal(null);
    } else {
      setError("O desconto deve ser entre 1 e 90%.");
    }
  };

  React.useEffect(() => {
    setDesconto(modal.promocao);
  }, [modal]);
  if (modal)
    return (
      <div className={`box ${styles.box}`}>
        <h1>Gerencie cupons de desconto </h1>
        {modal.promocao > 0 && (
          <p className={styles.descontoExistente}>
            Este modal possui um desconto de {modal.promocao}%
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
              onClick={() => {
                updateOne(
                  `https://backrestend.vercel.app/produtos/${modal._id}`,
                  0
                );
                setModal(null);
              }}
              disabled={modal.promocao > 0 ? false : true}
            >
              {loading && <div className="loading"></div>}
              {!loading && "Remover Desconto"}
            </Botao>
            {modal.promocao > 0 && (
              <Botao onClick={handleNovoDesconto}>Atualizar Desconto</Botao>
            )}
            {modal.promocao === 0 && (
              <Botao onClick={handleNovoDesconto}>Aplicar Desconto</Botao>
            )}
            {error && <Error error={error} />}
          </div>
        </form>
      </div>
    );
};

export default ModalDesconto;
