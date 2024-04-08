import { useState } from "react";
import TodoItem from "./components/TodoItem";
import todoJSON from "./data/todos.json";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState(() => todoJSON.data);
  return (
    <div className="app-container">
      {todos.map(({ id, todo }) => (
        <TodoItem key={id} id={id} todo={todo} />
      ))}
      <AddTodo />
    </div>
  );
}

export default App;
