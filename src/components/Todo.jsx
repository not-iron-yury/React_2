import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type='submit' onClick={handleClick}>
          +
        </button>
      </form>
    </div>
  );
}
