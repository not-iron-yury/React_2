import styles from "./todolist.module.css";
import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <ul className={styles.list}>
      {todos.map((itm) => (
        <TodoItem key={itm} text={itm} className={styles.item} />
      ))}
    </ul>
  );
}
