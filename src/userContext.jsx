import React from "react";

export const UserContext = React.createContext();
export const UserStorage = ({ children }) => {
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [produtos, setProdutos] = React.useState(null);
  const [usuarios, setUsuarios] = React.useState([
    {
      imgSrc:
        "https://i.pinimg.com/originals/4e/45/88/4e458893b1fdc033508016e09fa5553c.jpg",
      nome: "Pedro Lopes",
      cpf: "12345678900",
      username: "PedroLops",
      dataNascimento: "12/01/1996",
      dataCadastro: "12/02/2024",
    },
    {
      imgSrc:
        "https://evorastudio.com.br/wp-content/uploads/2019/09/LE1A2419b.jpg",
      nome: "Lorena Maria",
      cpf: "98765432100",
      username: "Lorena Maria",
      dataNascimento: "17/06/1989",
      dataCadastro: "29/08/2023",
    },
    {
      imgSrc:
        "https://i.pinimg.com/originals/a5/7a/4b/a57a4bb2e7ddd2b4ee30271b2d989cc1.jpg",
      nome: "Ana Maria",
      cpf: "13246578900",
      username: "Ana Maria",
      dataNascimento: "28/10/1992",
      dataCadastro: "26/04/2024",
    },
  ]);

  const fetchDataProdutos = async () => {
    try {
      const response = await fetch("https://backrestend.vercel.app/produtos");
      const json = await response.json();
      if (!json) throw new Error("something went wrong");
      setProdutos(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  const insertOne = async (data) => {
    try {
      const response = await fetch(`https://backrestend.vercel.app/produtos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data }),
      });
      const jhonson = await response.json();
      console.log(jhonson);

      fetchDataProdutos();
    } catch (error) {
      setError(error.message);
    }
  };
  const deleteOne = async (data) => {
    const { _id } = data;
    try {
      const response = await fetch(
        `https://backrestend.vercel.app/produtos/${_id}`,
        {
          method: "DELETE",
        }
      );
      fetchDataProdutos();
    } catch (error) {
      setError(error.message);
    }
  };
  const updateOne = async (id, update) => {
    try {
      setError("");
      setLoading(true);
      const result = await fetch(
        `https://backrestend.vercel.app/produtos/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ promocao: Number(update) }),
        }
      );
      fetchDataProdutos();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchDataProdutos();
  }, []);
  return (
    <UserContext.Provider
      value={{
        produtos,
        error,
        usuarios,
        setUsuarios,
        deleteOne,
        updateOne,
        insertOne,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
