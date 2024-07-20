import styles from "./todoitem.module.css";

export default function TodoItem({ text, removeTodo }) {
  return (
    <li className={styles.item}>
      <p className={styles.text}>{text}</p>
      <button onClick={() => removeTodo(text)} className={styles.deleteBtn}>
        &times;
      </button>
    </li>
  );
}
