import React from "react";
import "./Modal.css";
import OptionTile from "../OptionTile";

const Modal = (props) => {
  window.onkeydown = (event) => {
    if (event.key === "Escape") {
      props.onClose();
    }
  };

  return (
    <>
      <div className="backdrop" onClick={props.onClose} />
      <div className="modal">
        <p className="fs-500 modal-title">Test</p>
        <OptionTile first="true" text="Open" />
        <OptionTile text="Edit" />
        <OptionTile className="text-red" text="Delete" />
      </div>
    </>
  );
};

export default Modal;
