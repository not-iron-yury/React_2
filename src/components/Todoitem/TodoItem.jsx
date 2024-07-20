import styles from "./todoitem.module.css";

export default function TodoItem({ todo, removeTodo }) {
  return (
    <li className={styles.item}>
      <p className={styles.text}>{todo.text}</p>
      <button onClick={() => removeTodo(todo)} className={styles.deleteBtn}>
        &times;
      </button>
    </li>
  );
}
