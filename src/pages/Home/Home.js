import React from "react";
import { Link } from "react-router-dom";
import { useMyHook } from "../../hooks/useMyHook";
import Loading from "../../Components/Loading/Loading";
import styles from "./Home.module.css";

const Home = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const { data, loading, error } = useMyHook(url);

  return (
    <div>
      {loading && <Loading />}

      {error && <h3 className={styles.error_Message}>{error}</h3>}
      {!error && (
        <ul className={styles.container_Users}>
          {data.map((user) => (
            <li key={user.id}>
              <h2>Nome: {user.name}</h2>
              <p>Nome de Usuário: {user.username}</p>
              <p>Endereço de email: {user.email}</p>
              <button>
                <Link to={`/userDetails/${user.id}`}>
                  + Detalhes do Usuário
                </Link>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
