import React from "react";
import Login from "./login/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage.jsx";
import Header from "./components/Header.jsx";
import Produtos from "./produtos/Produtos.jsx";
import Usuario from "./usuarios/Usuario.jsx";
import Cliente from "./clientes/Cliente.jsx";
import { UserStorage } from "./userContext.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  fetch("https://backrestend.vercel.app/usuarios/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: "Pablo Selares",
      endereco: "R",
      telefone: "1111",
      email: "selaGol@gmail.com",
      senha: "pablo123",
      dataNascimento: "2004",
      cpf: "123232323",
    }),
  }).then((res) => console.log(res));
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/usuarios" element={<Usuario />} />
          <Route path="/clientes" element={<Cliente />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
