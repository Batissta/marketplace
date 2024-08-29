import styles from './Produtos.module.css';
import Lapis from '../../public/Lapis.jsx';
import Mais from '../../public/Mais.jsx';
import Lixeira from '../../public/Lixeira.jsx';
import React from 'react';

function Produtos() {
  const produtos = [
    {
      imgSrc:
        'https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(fff):quality(80)/jefcouro/catalog/product/629df0ebaf378.jpg',
      h2: 'Bolsa Baú Feminina Stephanie Transversal Em Couro',
      h3: `
    Marca: JFE`,
      span: 'Ref.: 1060 - Croco caramelo',
      p: 451.4,
    },
    {
      imgSrc:
        'https://damyller.vtexassets.com/arquivos/ids/848547-600-900/Camisa-Feminina-Botoes-Xadrez-Classico-Frente--.jpg?v=638525150718800000',
      h2: 'Camisa Feminina Botões Xadrez Clássico',
      h3: `
    Marca: DAMYLLER`,
      span: 'REF: 1A04633 - Preta & Branca',
      p: 449.0,
    },
    {
      imgSrc:
        'https://www.hering.com.br/_next/image?url=https%3A%2F%2Fhering.vtexassets.com%2Farquivos%2Fids%2F319449%2F05M3-M2H07S-C2.jpg%3Fv%3D638514734167570000&w=1280&q=75',
      h2: 'Calça básica masculina jogger em moletom peluciado',
      h3: `
    Marca: HERING`,
      span: 'REF: 05M3M2H07S - Cinza',

      p: 451.4,
    },
  ];

  return (
    <section className={styles.box}>
      <h1>
        Adicione um produto
        <button>
          <Mais />
        </button>
      </h1>
      <div className={styles.containers}>
        {produtos &&
          produtos.map((produto) => (
            <div className={styles.container} key={produto.h2}>
              <img className={styles.imgContainer} src={produto.imgSrc} />
              <div className={styles.descText}>
                <h2>{produto.h2}</h2>
                <h3>{produto.h3}</h3>
                <span>{produto.span}</span>
                <p>R$ {produto.p}</p>
              </div>
              <div className={styles.buttonsList}>
                <button className={styles.buttoEdit}>
                  <Lapis />
                </button>
                <button className={styles.buttoEdit}>
                  <Lixeira />
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Produtos;
