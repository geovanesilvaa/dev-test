import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>

      <strong className={styles.title}>Carregando dados....</strong>
    </div>
  );
}

export default Loading;
