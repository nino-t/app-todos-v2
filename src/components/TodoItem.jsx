import React from "react";

const TodoItem = ({ id, todo }) => {
  return (
    <div className="todo-item">
      <div className="message">{todo}</div>
      <div className="action">
        <button className="btn-edit">Edit</button>
        <button className="btn-delete">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
