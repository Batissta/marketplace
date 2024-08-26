import styles from "./Catcher.module.css";

function Catcher() {
  return (
    <div className={styles.catcherWrapper}>
      <div className={styles.catcherTexto}>
        <div className={styles.sell}>
          <h4>
            Venha aproveitar! <br />
            Tempo limitado para essa super oferta!
          </h4>
        </div>

        <div className={styles.textoPai}>
          <h1>Venda na Rest com anuidade GRÁTIS</h1>
        </div>

        <div className={styles.textoSecundario}>
          <p>
            Inicie suas vendas na Rest e desfrute de todos os recursos do
            marketplace com isenção de mensalidade por um ano
          </p>
        </div>

        <div className={styles.venderButton}>
          <button className={styles.button}>Comece a vender!</button>
        </div>
      </div>
      <div className={styles.catcherImagem}>
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-393e44107ac5230e798c07e74a454823-lq"
          alt="imagem ilustrando um marketplace na visão do desenvolvedor."
        />
      </div>
    </div>
  );
}

export default Catcher;
