import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ addTodo }) {
  const [todo, setTodo] = useState({ text: "", done: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.text !== "") {
      addTodo({ ...todo, done: false, id: Date.now() });
      setTodo({ text: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.formInput}
        type='text'
        value={todo.text}
        onChange={(e) => setTodo({ ...todo, text: e.target.value })}
        placeholder='Какие планы?'
      />
      <button className={styles.formBtn} type='submit'>
        Add
      </button>
    </form>
  );
}
