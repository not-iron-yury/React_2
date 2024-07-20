import { useState } from "react";
import styles from "./form.module.css";

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
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.formInput}
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Какие планы?'
      />
      <button className={styles.formBtn} type='submit'>
        Add
      </button>
    </form>
  );
}
