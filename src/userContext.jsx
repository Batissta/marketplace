import React from 'react';
import fs from 'fs';
export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [valor, setValor] = React.useState('');

  const lerProdutos = () => {
    const conteudo = fs.readFileSync('Produtos.json', 'utf8');
    const dadosExistentes = JSON.parse(conteudo);
    return dadosExistentes;
  };
  const addProduto = () => {
    const conteudo = fs.readFileSync('Produtos.json', 'utf8');
    const dadosExistentes = JSON.parse(conteudo);
    newProdutos.map((produto) => {
      dadosExistentes.produtos.push(produto);
    });
    const JsonStringfado = JSON.stringify(dadosExistentes, null, 2);
    fs.writeFileSync('Produtos.json', JsonStringfado);
  };
  const getIndex = (produto) => {
    const conteudo = fs.readFileSync('Produtos.json', 'utf8');
    const dadosExistentes = JSON.parse(conteudo);
    let index = dadosExistentes.Produtos.findIndex((i) => i.h2 == produto);
    return index;
  };

  const ExcluirEstudante = () => {
    const conteudo = fs.readFileSync('Produtos.json', 'utf8');
    const dadosExistentes = JSON.parse(conteudo);
    dadosExistentes.estudantes.splice(getIndex(), 1);

    const JsonStringfado = JSON.stringify(dadosExistentes, null, 2);

    fs.writeFileSync('dados.json', JsonStringfado);
  };

  return (
    <UserContext.Provider
      value={{ valor, lerProdutos, addProduto, getIndex, ExcluirEstudante }}
    >
      {children}
    </UserContext.Provider>
  );
};
