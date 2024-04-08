import React from "react";

const Todoitems = () => {
  return (
    <div className="todo-item">
      <div className="message">Hello word</div>
      <div className="action">
        <button className="btn-edit">Edit</button>
        <button className="btn-delete">Delete</button>
      </div>
    </div>
  );
};

export default Todoitems;
