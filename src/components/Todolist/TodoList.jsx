import styles from "./todolist.module.css";
import TodoItem from "../Todoitem/TodoItem";

export default function TodoList({ todos, removeTodo }) {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
}
