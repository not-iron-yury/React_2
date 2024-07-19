import { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        name='inputTodo'
      />
      <button type='submit'>+</button>
    </form>
  );
}
