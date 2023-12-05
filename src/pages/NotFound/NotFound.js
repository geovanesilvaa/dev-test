import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>404!</h1>
      <p>Não há nada aqui =)</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Voltar
      </button>
    </div>
  );
};

export default NotFound;
