import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      addTodo(todo);
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
