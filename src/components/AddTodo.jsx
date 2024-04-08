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
        <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000" className="svg-add">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>plus</title> <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
              {" "}
              <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-362.000000, -1037.000000)" fill="#ffffff">
                {" "}
                <path
                  d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049"
                  id="plus"
                  sketch:type="MSShapeGroup"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
          New
      </button>
      {modaOpened && (
        <PureModal
          header="Add Todos"
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
          <label className="label-message">Activity</label>
          <br />
          <input
            type="text"
            placeholder="what your activity"
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
