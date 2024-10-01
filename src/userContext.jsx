import React from "react";
import { Navigate, useLocation } from "react-router-dom";

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
  const [token, setToken] = React.useState("");
  const [usuario, setUsuario] = React.useState(null);

  const checkLocation = React.useCallback(() => {
    if (location.pathname === "/produtos") fetchDataProdutos();
    if (location.pathname === "/clientes") fetchDataClientes();
    if (location.pathname === "/usuarios") fetchDataUsuarios();
  }, [location]);
  const fetchDataProdutos = React.useCallback(async () => {
    try {
      if (!token) return;
      setLoading(true);
      const response = await fetch(`${URL_API}/produtos`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const json = await response.json();
      if (!json) throw new Error("something went wrong");
      setProdutos(json);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);
  const fetchDataClientes = React.useCallback(async () => {
    try {
      if (!token) return;
      setLoading(true);
      const response = await fetch(`${URL_API}/clientes`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const json = await response.json();
      if (!json) throw new Error("something went wrong");
      setClientes(json);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);
  const fetchDataUsuarios = React.useCallback(async () => {
    try {
      if (!token) return;
      setLoading(true);
      const response = await fetch(`${URL_API}/usuarios`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const json = await response.json();
      if (!json) throw new Error("something went wrong");
      setUsuarios(json);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);
  const insertOne = async (data, url) => {
    try {
      if (!token) return;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ ...data }),
      });
      checkLocation();
    } catch (error) {
      setError(error.message);
    }
  };
  const deleteOne = async (url) => {
    try {
      if (!token) return;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      checkLocation();
    } catch (error) {
      setError(error.message);
    }
  };
  const updateOne = async (url, update) => {
    try {
      if (!token) return;
      setError("");
      setLoading(true);
      const result = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ promocao: Number(update) }),
      });
      checkLocation();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const checkToken = async () => {
    const token = window.localStorage.getItem("token");
    const user = window.localStorage.getItem("user");
    if (token && user) {
      setLogado(true);
      setToken(token);
      setUsuario(JSON.parse(user));
    }
  };
  const login = async (body) => {
    try {
      setLoading(true);
      const response = await fetch(`${URL_API}/usuarios/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = await response.json();
      if (!json.token) throw new Error("Deu errado");
      window.localStorage.setItem("token", json.token);
      const { senha, _id, _v, ...user } = json.content;
      window.localStorage.setItem("user", JSON.stringify(user));
      setToken(json.token);
      setLogado(true);
      setUsuario(user);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const logOut = async () => {
    setLoading(true);
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    setLogado(false);
    setToken("");
    setUsuario(null);
    setLoading(false);
  };
  const singUp = async (body) => {
    try {
      setLoading(true);
      const response = await fetch(`${URL_API}/usuarios`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(body),
      });
      const json = await response.json();
      if (!json.token) throw new Error("Deu errado");
      window.localStorage.setItem("token", json.token);
      const { senha, _id, _v, ...user } = json.content;
      console.log(user);
      window.localStorage.setItem("user", JSON.stringify(user));
      setLogado(true);
      setUsuario(json.content);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    checkToken();
  }, [location]);
  React.useEffect(() => {
    checkLocation();
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
        usuario,
        singUp,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
