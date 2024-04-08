import React, { useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

const AddTodo = ({ handleNewTodo }) => {
  const [modaOpened, setModalOpened] = useState(false);
  const [inputMessage, setInputMessage] = useState("");

  const handleCancel = () => {
    setModalOpened(false);
    setInputMessage("");
  };

  const handleSave = () => {
    const date = new Date();
    const payload = {
      id: date.valueOf(),
      todo: inputMessage,
    };

    handleNewTodo(payload);
    handleCancel();
  };

  return (
    <>
      <button className="btn-add" onClick={() => setModalOpened(true)}>
        New
      </button>
      {modaOpened && (
        <PureModal
          header="Add Message"
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

export default AddTodo;
