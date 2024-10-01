import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import { UserStorage } from "./userContext.jsx";
import Footer from "./components/Footer.jsx";
import Router from "./routes/Router.jsx";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="*" element={<Router />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
