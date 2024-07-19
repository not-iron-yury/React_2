import { useState } from "react";

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
      <form onSubmit={handleSubmit} id='formElem'>
        <input
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          name='inputitem'
        />
        <button type='submit'>+</button>
      </form>
      <p>{String(todos)}</p>
    </div>
  );
}
