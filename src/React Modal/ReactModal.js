import React from "react";
import Modal from "react-modal"; // installed react-modal package
import { useState } from "react";

Modal.setAppElement("#root"); // This is used for console warning so must be use
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    cursor: "pointer",
    color: "green",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
      backgroundColor: "grey"
  },
  h1: {
      color: "red",
      fontSize: "10px"
  }
};

const crossButton = {
    position: 'absolute',
    top: '20px',
    right: "20px",
    fontSize: "10px",
    cursor: "pointer",
    color: "red"
}

function ReactModal() {
  const [isOpenModal, setisOpenModal] = useState(false); // this state for open and close modal
  return (
    <div>
      <button onClick={() => setisOpenModal(true)}>Open Modal</button>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={() => setisOpenModal(false)}   // close modal by clicking out of modal and esc button
        shouldCloseOnOverlayClick={false} // prevent closing moadal clicking out of modal
        style = {customStyles} // modal style
      
      >
        <h1>Modal Title</h1>
        <p>Modal Body</p>
        <button onClick={() => setisOpenModal(false)}>Close</button>
        <button style={crossButton} onClick={() => setisOpenModal(false)}>X</button>
      </Modal>
    </div>
  );
}

export default ReactModal;
