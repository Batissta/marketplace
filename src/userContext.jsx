import React from "react";
import { useLocation } from "react-router-dom";

const URL_API = "http://localhost:3000";

export const UserContext = React.createContext();
export const UserStorage = ({ children }) => {
  const location = useLocation();
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [produtos, setProdutos] = React.useState(null);
  const [usuarios, setUsuarios] = React.useState(null);
  const [clientes, setClientes] = React.useState(null);
  const [logado, setLogado] = React.useState(false);

  const fetchDataProdutos = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${URL_API}/produtos`);
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
      const response = await fetch(`${URL_API}/clientes`);
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
      const response = await fetch(`${URL_API}/usuarios`);
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
  const login = async (body) => {
    try {
      setLoading(true);
      const response = await fetch(`${URL_API}/produtos/login`);
      const json = await response.json();
      if (!json.token) throw new Error("Deu errado");
      window.localStorage.setItem("token", json.token);
      setLogado(true);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const logOut = async () => {
    setLoading(true);
    window.localStorage.removeItem("token");
    setLogado(false);
    setLoading(false);
  };
  React.useEffect(() => {
    if (location.pathname === "/produtos") fetchDataProdutos();
    if (location.pathname === "/clientes") fetchDataClientes();
    if (location.pathname === "/usuarios") fetchDataUsuarios();
  }, [location]);
  return (
    <UserContext.Provider
      value={{
        URL_API,
        error,
        loading,
        setLoading,
        produtos,
        usuarios,
        clientes,
        deleteOne,
        updateOne,
        insertOne,
        logado,
        login,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
