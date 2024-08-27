import styles from "./Produtos.module.css";
import Botao from "../components/Botao.jsx";
import Lapis from "../../public/Lapis.jsx";
import Mais from "../../public/Mais.jsx";
function Produtos() {
  const titulo = "";
  const imagem = "";
  const cor = "";
  const ref = "";
  const preco = 0.0;

  const produto = {
    titulo: titulo,
    imagem: imagem,
    cor: cor,
    ref: ref,
    preco: preco,
  };
  return (
    <section>
      <div className={styles.produtosContainer}>
        <div className={styles.produtos}>
          <div className={styles.produto}>
            <img
              className={styles.imgContainer}
              src="https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(fff):quality(80)/jefcouro/catalog/product/629df0ebaf378.jpg"
            />
            <div className={styles.descText}>
              <h2>Bolsa Baú Feminina Stephanie Transversal Em Couro</h2>
              <h3>
                Marca: JFE
                <br /> Ref.: 1060 - Croco caramelo
              </h3>
              <p>R$ 451,40</p>
            </div>
            <div className={styles.buttonList}>
              <button className={styles.buttoEdit}>
                <Lapis />
              </button>
              <button className={styles.buttoEdit}>
                <Mais />
              </button>
            </div>
          </div>
          <div className={styles.produto}>
            <img
              className={styles.imgContainer}
              src="https://damyller.vtexassets.com/arquivos/ids/848547-600-900/Camisa-Feminina-Botoes-Xadrez-Classico-Frente--.jpg?v=638525150718800000"
            />
            <div className={styles.descText}>
              <h2>Camisa Feminina Botões Xadrez Clássico</h2>
              <h3>
                Marca: DAMYLLER
                <br /> REF: 1A04633 - Preta & Branca
              </h3>
              <p>R$ 449,00</p>
            </div>
            <div className={styles.buttonList}>
              <button className={styles.buttoEdit}>
                <Lapis />
              </button>
              <button className={styles.buttoEdit}>
                <Mais />
              </button>
            </div>
          </div>
          <div className={styles.produto}>
            <img
              className={styles.imgContainer}
              src="https://www.hering.com.br/_next/image?url=https%3A%2F%2Fhering.vtexassets.com%2Farquivos%2Fids%2F319449%2F05M3-M2H07S-C2.jpg%3Fv%3D638514734167570000&w=1280&q=75"
            />
            <div className={styles.descText}>
              <h2>Calça básica masculina jogger em moletom peluciado</h2>
              <h3>
                Marca: HERING
                <br /> REF: 05M3M2H07S - Cinza
              </h3>
              <p>R$ 199,99</p>
            </div>
            <div className={styles.buttonList}>
              <button className={styles.buttoEdit}>
                <Lapis />
              </button>
              <button className={styles.buttoEdit}>
                <Mais />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Produtos;
