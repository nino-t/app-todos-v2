import React, { useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

const AddTodo = () => {
  const [modaOpened, setModalOpened] = useState(false);
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
              <button className="btn-cancel">Cancel</button>
              <button className="btn-save">Save</button>
            </div>
          }
          isOpen={true}
          onClose={() => {
            setModalOpened(false);
            return true;
          }}
        >
          <p>Your content</p>
        </PureModal>
      )}
    </>
  );
};

export default AddTodo;
