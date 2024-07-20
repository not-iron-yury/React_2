import styles from "./todoitem.module.css";

export default function TodoItem({ text, todos, setTodos }) {
  const handleDelete = (text) => {
    setTodos(todos.filter((todo) => todo !== text));
  };

  return (
    <li className={styles.item}>
      <p className={styles.text}>{text}</p>
      <button onClick={() => handleDelete(text)} className={styles.deleteBtn}>
        &times;
      </button>
    </li>
  );
}
