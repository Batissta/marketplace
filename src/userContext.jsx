import React from "react";
import { useLocation } from "react-router-dom";

export const UserContext = React.createContext();
export const UserStorage = ({ children }) => {
  const location = useLocation();
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [produtos, setProdutos] = React.useState(null);
  const [usuarios, setUsuarios] = React.useState(null);
  const [clientes, setClientes] = React.useState(null);

  const fetchDataProdutos = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://backrestend.vercel.app/produtos");
      const json = await response.json();
      if (!json) throw new Error("something went wrong");
      setProdutos(json);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const fetchDataClientes = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://backrestend.vercel.app/clientes");
      const json = await response.json();
      if (!json) throw new Error("something went wrong");
      setClientes(json);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const fetchDataUsuarios = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://backrestend.vercel.app/usuarios");
      const json = await response.json();
      if (!json) throw new Error("something went wrong");
      setUsuarios(json);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const insertOne = async (data, url) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data }),
      });
      fetchDataProdutos();
    } catch (error) {
      setError(error.message);
    }
  };
  const deleteOne = async (url) => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      fetchDataProdutos();
    } catch (error) {
      setError(error.message);
    }
  };
  const updateOne = async (url, update) => {
    try {
      setError("");
      setLoading(true);
      const result = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ promocao: Number(update) }),
      });
      fetchDataProdutos();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (location.pathname === "/produtos") fetchDataProdutos();
    if (location.pathname === "/clientes") fetchDataClientes();
    if (location.pathname === "/usuarios") fetchDataUsuarios();
  }, [location]);
  return (
    <UserContext.Provider
      value={{
        error,
        loading,
        setLoading,
        produtos,
        usuarios,
        clientes,
        deleteOne,
        updateOne,
        insertOne,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
