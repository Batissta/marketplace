// import React from "react";
// import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
// import Produtos from "../produtos/Produtos.jsx";
// import Usuario from "../usuarios/Usuario.jsx";
// import Cliente from "../clientes/Cliente.jsx";
// import HomePage from "../home/HomePage.jsx";
// import Footer from "../components/Footer.jsx";
// import { UserContext } from "../userContext.jsx";

// const UnauthorizedRoutes = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { logado } = React.useContext(UserContext);

//   React.useEffect(() => {
//     if (!logado && location.pathname !== "/login") navigate("/login");
//   }, [location, navigate, logado]);

//   if (logado)
//     return (
//       <>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/produtos" element={<Produtos />} />
//           <Route path="/usuarios" element={<Usuario />} />
//           <Route path="/clientes" element={<Cliente />} />
//         </Routes>
//         <Footer />
//       </>
//     );
// };

// export default UnauthorizedRoutes;
