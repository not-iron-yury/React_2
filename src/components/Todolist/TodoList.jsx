import styles from "./todolist.module.css";
import TodoItem from "../Todoitem/TodoItem";

export default function TodoList({ todos, setTodos }) {
  return (
    <ul className={styles.list}>
      {todos.map((itm) => (
        <TodoItem key={itm} text={itm} todos={todos} setTodos={setTodos} />
      ))}
    </ul>
  );
}
