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
          header="Your header"
          width="40%"
          footer={
            <div>
              <button>Cancel</button>
              <button>Save</button>
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
