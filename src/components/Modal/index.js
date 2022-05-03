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
        <p className="fs-500 modal-title">{props.entry.name}</p>
        <OptionTile first="true" text="Open" onClick={props.onOpen} />
        <OptionTile text="Edit" />
        <OptionTile className="text-red" text="Delete" onClick={props.onDelete} />
      </div>
    </>
  );
};

export default Modal;
