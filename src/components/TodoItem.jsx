import React, { useState, useEffect } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

const TodoItem = ({ id, todo, handleRemoveTodo, handleUpdateTodo }) => {
  const [modaOpened, setModalOpened] = useState(false);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    if (modaOpened) {
      setInputMessage(todo);
    }
  }, [modaOpened]);

  const handleCancel = () => {
    setModalOpened(false);
    setInputMessage("");
  };

  const handleSave = () => {
    handleUpdateTodo(id, inputMessage);
    handleCancel();
  };

  return (
    <>
      <div className="todo-item">
        <div className="message">{todo}</div>
        <div className="action">
          <button className="btn-edit" onClick={() => setModalOpened(true)}>
            Edit
          </button>
          <button className="btn-delete" onClick={() => handleRemoveTodo(id)}>
            Delete
          </button>
        </div>
      </div>
      {modaOpened && (
        <PureModal
          header="Edit Message"
          width="40%"
          footer={
            <div className="action-modal">
              <button className="btn-cancel" onClick={handleCancel}>
                Cancel
              </button>
              <button className="btn-save" onClick={handleSave}>
                Save
              </button>
            </div>
          }
          isOpen={true}
          onClose={() => {
            handleCancel();
            return true;
          }}
        >
          <label className="label-message">Message</label>
          <br />
          <input
            type="text"
            placeholder="what your message"
            className="input-message"
            value={inputMessage}
            onChange={(e) => {
              setInputMessage(e.target.value);
            }}
          />
        </PureModal>
      )}
    </>
  );
};

export default TodoItem;
