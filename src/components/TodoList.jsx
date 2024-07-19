import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((itm) => (
        <TodoItem key={itm} text={itm} />
      ))}
    </ul>
  );
}
