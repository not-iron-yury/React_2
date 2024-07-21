import styles from "./footer.module.css";

export default function Footer({ donedTodos }) {
  return (
    <footer className={styles.footer}>
      <p>Выполненно задач: {donedTodos}</p>
    </footer>
  );
}
