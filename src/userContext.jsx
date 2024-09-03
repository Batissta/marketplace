import React from 'react';
// import fs from "fs";

export const UserContext = React.createContext();
export const UserStorage = ({ children }) => {
  const [error, setError] = React.useState('');
  const [data, setData] = React.useState(null);
  const [produtos, setProdutos] = React.useState([
    {
      imgSrc:
        'https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(fff):quality(80)/jefcouro/catalog/product/629df0ebaf378.jpg',
      h2: 'Bolsa Baú Feminina Stephanie Transversal Em Couro',
      h3: `
  Marca: JFE`,
      span: 'REF: 1060 - Croco caramelo',
      p: 451.4,
      desconto: 50,
    },
    {
      imgSrc:
        'https://damyller.vtexassets.com/arquivos/ids/848547-600-900/Camisa-Feminina-Botoes-Xadrez-Classico-Frente--.jpg?v=638525150718800000',
      h2: 'Camisa Feminina Botões Xadrez Clássico',
      h3: `
  Marca: DAMYLLER`,
      span: 'REF: 1A04633 - Preta & Branca',
      p: 449.0,
      desconto: 0,
    },
    {
      imgSrc:
        'https://www.hering.com.br/_next/image?url=https%3A%2F%2Fhering.vtexassets.com%2Farquivos%2Fids%2F319449%2F05M3-M2H07S-C2.jpg%3Fv%3D638514734167570000&w=1280&q=75',
      h2: 'Calça básica masculina jogger em moletom peluciado',
      h3: `
  Marca: HERING`,
      span: 'REF: 05M3M2H07S - Cinza',

      p: 451.4,
      desconto: 0,
    },
  ]);
  const [usuarios, setUsuarios] = React.useState([
    {
      imgSrc:
        'https://i.pinimg.com/originals/4e/45/88/4e458893b1fdc033508016e09fa5553c.jpg',
      nome: 'Pedro Lopes',
      cpf: '12345678900',
      username: 'PedroLops',
      dataNascimento: '12/01/1996',
      dataCadastro: '12/02/2024',
    },
    {
      imgSrc:
        'https://evorastudio.com.br/wp-content/uploads/2019/09/LE1A2419b.jpg',
      nome: 'Lorena Maria',
      cpf: '98765432100',
      username: 'Lorena Maria',
      dataNascimento: '17/06/1989',
      dataCadastro: '29/08/2023',
    },
    {
      imgSrc:
        'https://i.pinimg.com/originals/a5/7a/4b/a57a4bb2e7ddd2b4ee30271b2d989cc1.jpg',
      nome: 'Ana Maria',
      cpf: '13246578900',
      username: 'Ana Maria',
      dataNascimento: '28/10/1992',
      dataCadastro: '26/04/2024',
    },
  ]);
  // const lerProdutos = () => {
  //   const conteudo = fs.readFileSync("Produtos.json", "utf8");
  //   const dadosExistentes = JSON.parse(conteudo);
  //   return dadosExistentes;
  // };
  // const addProduto = () => {
  //   const conteudo = fs.readFileSync('Produtos.json', 'utf8');
  //   const dadosExistentes = JSON.parse(conteudo);
  //   newProdutos.map((produto) => {
  //     dadosExistentes.produtos.push(produto);
  //   });
  //   const JsonStringfado = JSON.stringify(dadosExistentes, null, 2);
  //   fs.writeFileSync('Produtos.json', JsonStringfado);
  // };
  // const getIndex = (produto) => {
  //   const conteudo = fs.readFileSync('Produtos.json', 'utf8');
  //   const dadosExistentes = JSON.parse(conteudo);
  //   let index = dadosExistentes.Produtos.findIndex((i) => i.h2 == produto);
  //   return index;
  // };

  // const ExcluirEstudante = () => {
  //   const conteudo = fs.readFileSync('Produtos.json', 'utf8');
  //   const dadosExistentes = JSON.parse(conteudo);
  //   dadosExistentes.estudantes.splice(getIndex(), 1);

  //   const JsonStringfado = JSON.stringify(dadosExistentes, null, 2);

  //   fs.writeFileSync('dados.json', JsonStringfado);
  // };
  React.useEffect(() => {
    const fetchDataProdutos = async () => {
      const response = await fetch('http://localhost:5173/src/Produtos.json');
      const json = await response.json();
      setData(json);
    };
    fetchDataProdutos();
  }, []);
  React.useEffect(() => {
    if (data) {
      console.log(data.produtos);
    }
  }, [data]);
  return (
    <UserContext.Provider
      value={{
        produtos,
        setProdutos,
        error,
        setError,
        usuarios,
        setUsuarios,
        data,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
