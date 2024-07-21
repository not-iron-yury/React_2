import { useState } from "react";
import TodoList from "./Todolist/TodoList";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";

export default function Todo() {
  const [todos, setTodos] = useState([
    { text: "Подъем", done: false, id: 1 },
    { text: "Покормить кошек", done: false, id: 2 },
    { text: "Посрать", done: false, id: 3 },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const removeTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };
  const doneTodo = (todo) => {
    const newTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, done: !t.done } : t
    );
    setTodos(
      newTodos.sort((a, b) => Number(a.done) - Number(b.done) || a.id - b.id)
    );
  };
  const donedTodos = todos.filter((t) => t.done).length || 0;

  return (
    <div className='todo'>
      <Form todos={todos} addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} doneTodo={doneTodo} />
      <Footer donedTodos={donedTodos} />
    </div>
  );
}
