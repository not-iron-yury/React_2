import { useState } from "react";
import TodoList from "./TodoList";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          name='inputTodo'
        />
        <button type='submit'>+</button>
      </form>
      <TodoList todos={todos} />
    </div>
  );
}
