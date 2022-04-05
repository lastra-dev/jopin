import React from "react";
import "./AlertDialog.css";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

const AlertDialog = (props) => {
  window.onkeydown = (event) => {
    // Close on Escape key
    if (event.key === "Escape") {
      props.onClose();
    }
    // Submit on Enter key
    else if (event.key === "Enter") {
      document.getElementById("alert-confirm").click();
    }
  };

  return (
    <>
      <div className="backdrop" onClick={props.onClose} />
      <form className="alert" onSubmit={(e) => props.onSubmit(e)}>
        <p className="title">{props.title}</p>
        <label className="fs-500 text-center">{props.text}</label>
        <div className="center mt-16 flex">
          <SecondaryButton
            className="dialog-buttons"
            text="CANCELAR"
            onClick={props.onClose}
          />
          <PrimaryButton className="dialog-buttons" text={props.submitBtnMsg} />
        </div>
      </form>
    </>
  );
};

export default AlertDialog;
