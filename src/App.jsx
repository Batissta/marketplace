import React from "react";
import Login from "./login/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginCadastro from "./login/LoginCadastro.jsx";
import HomePage from "./home/HomePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login/*" element={<Login />} />
        <Route path="/login/cadastro" element={<LoginCadastro />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
