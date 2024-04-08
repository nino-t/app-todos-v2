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
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-edit">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                  stroke="#d9d9d9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                  stroke="#d9d9d9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
          <button className="btn-delete" onClick={() => handleRemoveTodo(id)}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-delete">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M10 12V17" stroke="#d9d9d9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#d9d9d9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                <path d="M4 7H20" stroke="#d9d9d9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#d9d9d9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#d9d9d9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>
      {modaOpened && (
        <PureModal
          header="Edit Todos"
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
