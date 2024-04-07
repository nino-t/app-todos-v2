import { useState } from "react";
import TodoItem from "./components/TodoItem";
import todoJSON from "./data/todos.json";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState(() => todoJSON.data);

  const handleNewTodo = (payload) => {
    setTodos([...todos, payload]);
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = (id, inputMessage) => {
    const newTodos = todos;
    const findIndex = todos.findIndex((item) => item.id === id);
    newTodos[findIndex] = {
      ...newTodos[findIndex],
      todo: inputMessage,
    };
    console.info("newTodos =>", newTodos);
    setTodos(newTodos);
  };

  return (
    <div className="app-container">
      {todos.map(({ id, todo }) => (
        <TodoItem key={id} id={id} todo={todo} handleRemoveTodo={handleRemoveTodo} handleUpdateTodo={handleUpdateTodo} />
      ))}
      <AddTodo handleNewTodo={handleNewTodo} />
    </div>
  );
}

export default App;
