import React from "react";

const Botao = ({ children, ...props }) => {
  return <button {...props} className="botao">{children}</button>;
};

export default Botao;
