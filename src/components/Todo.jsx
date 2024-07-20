import { useState } from "react";
import TodoList from "./Todolist/TodoList";
import Form from "./Form/Form";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const removeTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <div className='todo'>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
