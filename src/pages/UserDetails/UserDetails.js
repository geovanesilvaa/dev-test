import React from "react";
import { useParams } from "react-router-dom";
import { useMyHook } from "../../hooks/useMyHook";
import Loading from "../../Components/Loading/Loading";

import styles from "./UserDetails.module.css";

const UserDetails = () => {
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const { data: detailsUser, loading, error } = useMyHook(url);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p className={styles.error_Message}>{error}</p>;
  }

  return (
    <div>
      {detailsUser && (
        <div className={styles.container}>
          <h1> Detalhes do Usuário</h1>

          <div className={styles.boxOne}>
            <h3>Descrição:</h3>
            <p>ID: {detailsUser.id}</p>
            <p>Nome: {detailsUser.name}</p>
            <p>Nome de Usuário: {detailsUser.username}</p>
            <p>Email: {detailsUser.email}</p>
          </div>

          <div className={styles.boxTwo}>
            <h3>Endereço:</h3>
            <p>Street: {detailsUser.address?.street}</p>
            <p>Suite: {detailsUser.address?.suite}</p>
            <p>City: {detailsUser.address?.city}</p>
            <p>Zipcode: {detailsUser.address?.zipcode}</p>
          </div>

          <box className={styles.boxOne}>
            <h3>Geo-Localização:</h3>
            <p>Lat: {detailsUser.address?.geo?.lat}</p>
            <p>Lng: {detailsUser.address?.geo?.lng}</p>
          </box>

          <box className={styles.boxTwo}>
            <h3>Contatos:</h3>
            <p>Phone: {detailsUser.phone}</p>
            <p>Website: {detailsUser.website}</p>
          </box>

          <div className={styles.boxOne}>
            <h3>Local de Trabalho:</h3>
            <p>Name Company: {detailsUser.company?.name}</p>
            <p>CatchPhrase: {detailsUser.company?.catchPhrase}</p>
            <p>Bs: {detailsUser.company?.bs}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
