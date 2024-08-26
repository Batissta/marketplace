import styles from "./Estatisticas.module.css";

function Estatisticas() {
  return (
    <div className="estatisticas">
      <div className={styles.mensagemPrimaria}>
        
      </div>
      <section className={styles.dataStatus}>
        <div className={styles.vendedores}>

        </div>
        <div className={styles.compradores}>

        </div>
        <div className={styles.porcetagem}>

        </div>
      </section>
    </div>
  );
}

export default Estatisticas;
