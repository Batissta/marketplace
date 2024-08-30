import React from "react";
import Botao from "../components/Botao";

const Usuario = () => {
  return (
    <section className={"box"}>
      <h1>Gerencimento de Usuários</h1>
      <div className={"containers"}>
        <div className={"container"}>
          <img
            src="https://i.pinimg.com/originals/4e/45/88/4e458893b1fdc033508016e09fa5553c.jpg"
            alt="Foto de usuario"
          />
          <h2>Pedro Lopes</h2>
          <Botao>Remover usuário </Botao>
        </div>
        <div className={"container"}>
          <img
            src="https://evorastudio.com.br/wp-content/uploads/2019/09/LE1A2419b.jpg"
            alt=" Foto da segunda usauria"
          />
          <h2>Lorena Maria</h2>
          <Botao>Remover usuário</Botao>
        </div>
        <div className={"container"}>
          <img
            src="https://i.pinimg.com/originals/a5/7a/4b/a57a4bb2e7ddd2b4ee30271b2d989cc1.jpg"
            alt="Foto da terceira usuaria"
          />
          <h2>Ana Maria</h2>
          <Botao>Remover usuário </Botao>
        </div>
      </div>
    </section>
  );
};

export default Usuario;
