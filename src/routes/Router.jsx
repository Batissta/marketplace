// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { UserContext } from "../userContext.jsx";
// import Login from "../login/Login.jsx";
// import UnauthorizedRoutes from "./UnauthorizedRoutes.jsx";

// const Router = () => {
//   const { logado } = React.useContext(UserContext);

//   return (
//     <Routes>
//       {logado && <Route path="*" element={<UnauthorizedRoutes />} />}
//       {!logado && <Route path="/login/*" element={<Login />} />}
//     </Routes>
//   );
// };

// export default Router;
