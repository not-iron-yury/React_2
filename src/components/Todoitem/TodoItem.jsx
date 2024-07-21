import styles from "./todoitem.module.css";

export default function TodoItem({ todo, removeTodo, doneTodo }) {
  function handleClick(e) {
    e.target.classList.toggle(styles.completed);
    doneTodo(todo);
  }

  return (
    <li className={styles.item}>
      <p className={styles.text} onClick={handleClick}>
        {todo.text}
      </p>
      <button onClick={() => removeTodo(todo)} className={styles.deleteBtn}>
        &times;
      </button>
    </li>
  );
}
