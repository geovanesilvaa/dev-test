import React from "react";
import { useMyHook } from "../../hooks/useMyHook";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

import styles from "./About.module.css";

const About = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { data, loading, error } = useMyHook(url);

  return (
    <div>
      {loading && <Loading />}
      {error && <h3 className={styles.error_Message}>{error}</h3>}
      {!error && (
        <div className={styles.container}>
          <h1>Posts dos usuários</h1>
          {data.map((item) => (
            <div key={item.id} className={styles.divContainer}>
              <h3>Título: {item.title}</h3>
              <p>Conteúdo: {item.body}</p>
              <button>
                <Link to={`/postsDetails/${item.id}`}>Acessar +</Link>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default About;
