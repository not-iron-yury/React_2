import { useState } from "react";
import TodoList from "./Todolist/TodoList";
import Form from "./Form/Form";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const removeTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <div className='todo'>
      <Form todos={todos} addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}
