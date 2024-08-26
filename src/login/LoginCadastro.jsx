import React from "react";
import fs from "fs";
import cheerio from 'cheerio';

const LoginCadastro = () => {

  const userCreator = () => {
    fs.writeFileSync("usuarios.csv", JSON.stringify(newUser, null));
  }

  return (
  <div>LoginCadastro</div>
)};

export default LoginCadastro;
