import React from "react";
import Login from "./login/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login/*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
