import React from "react";
import Login from "./login/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginCadastro from "./login/LoginCadastro.jsx";
import HomePage from "./home/HomePage.jsx";
import Header from "./components/Header.jsx";
import Produtos from "./produtos/Produtos.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
