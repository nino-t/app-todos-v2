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
      <div className="header">
        <div className="text-title">
          <h1 className="title">ToDoList</h1>
          <p className="slogan">Your Pathway to Productivity. Streamline Your Day, Achieve Your Goals.</p>
        </div>
        <AddTodo handleNewTodo={handleNewTodo} />
      </div>
      <div className="todo-container">
        {todos.map(({ id, todo }) => (
          <TodoItem key={id} id={id} todo={todo} handleRemoveTodo={handleRemoveTodo} handleUpdateTodo={handleUpdateTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
