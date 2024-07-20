import styles from "./todolist.module.css";
import TodoItem from "../Todoitem/TodoItem";

export default function TodoList({ todos, removeTodo }) {
  return (
    <ul className={styles.list}>
      {todos.map((itm) => (
        <TodoItem key={itm} text={itm} removeTodo={removeTodo} />
      ))}
    </ul>
  );
}
