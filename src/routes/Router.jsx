import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { UserContext } from "../userContext.jsx";
import Login from "../login/Login.jsx";
import AnauthourizedRoutes from "./AnauthourizedRoutes.jsx";

const Router = () => {
  const { logado } = React.useContext(UserContext);

  return (
    <Routes>
      {logado && <Route path="*" element={<AnauthourizedRoutes />} />}
      {!logado && <Route path="/login/*" element={<Login />} />}
    </Routes>
  );
};

export default Router;
