import React from "react";
import UsuarioIndividual from "./UsuarioIndividual";
import styles from "./UsuarioIndividual.module.css";

const Usuario = () => {
  const usuarios = [
    {
      imgSrc:
        "https://i.pinimg.com/originals/4e/45/88/4e458893b1fdc033508016e09fa5553c.jpg",
      nome: "Pedro Lopes",
      cpf: "12345678900",
      username: "PedroLops",
      dataNascimento: "12/01/1996",
      dataCadastro: "12/02/2024",
    },
    {
      imgSrc:
        "https://evorastudio.com.br/wp-content/uploads/2019/09/LE1A2419b.jpg",
      nome: "Lorena Maria",
      cpf: "98765432100",
      username: "Lorena Maria",
      dataNascimento: "17/06/1989",
      dataCadastro: "29/08/2023",
    },
    {
      imgSrc:
        "https://i.pinimg.com/originals/a5/7a/4b/a57a4bb2e7ddd2b4ee30271b2d989cc1.jpg",
      nome: "Ana Maria",
      cpf: "13246578900",
      username: "Ana Maria",
      dataNascimento: "28/10/1992",
      dataCadastro: "26/04/2024",
    },
  ];
  return (
    <section className={"box"}>
      <h1>Gerencimento de Usuários</h1>
      <div className={`containers ${styles.containerUsers}`}>
        {usuarios &&
          usuarios.map((user) => (
            <UsuarioIndividual user={user} key={user.nome} />
          ))}
      </div>
    </section>
  );
};

export default Usuario;
