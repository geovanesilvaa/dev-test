import React from "react";
import { useParams } from "react-router-dom";
import { useMyHook } from "../../hooks/useMyHook";
import Loading from "../../Components/Loading/Loading";

import styles from "./PostsDetails.module.css";

const PostsDetails = () => {
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const { data: postDetails, loading, error } = useMyHook(url);

  return (
    <div>
      {loading && <Loading />}

      {error && <p>Ocorreu um erro: {error}</p>}

      <h1 className={styles.title}>Detalhes da Postagem</h1>
      {postDetails && (
        <div key={postDetails.id} className={styles.container}>
          <h3>ID da postagem: {postDetails.id}</h3>
          <h3>Título: {postDetails.title}</h3>
          <p>Conteúdo: {postDetails.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostsDetails;
