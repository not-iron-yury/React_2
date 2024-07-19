import { useState } from "react";
import TodoList from "./Todolist/TodoList";
import Form from "./Form/Form";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div className='todo'>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}
