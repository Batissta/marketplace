import React from "react";
import { UserContext } from "../src/userContext.jsx";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { logado, loading } = React.useContext(UserContext);

  if (loading) return <div className="loading gg"></div>;
  if (logado) return children;
  else if (!loading && !logado) return <Navigate to="/login" />;
};

export default ProtectedRoute;
