import React from "react";

const Botao = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`${className && className} ${!className && "botao"}`}
    >
      {children}
    </button>
  );
};

export default Botao;
