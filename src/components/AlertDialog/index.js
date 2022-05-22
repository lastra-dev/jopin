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
      <div className="alert" onSubmit={props.onSubmit}>
        <p className="title">{props.title}</p>
        <label className="fs-500 text-center">{props.text}</label>
        <div className="center mt-16 flex">
          <SecondaryButton
            className="dialog-buttons pointer"
            text="CANCEL"
            onClick={props.onClose}
          />
          <PrimaryButton
            className="dialog-buttons pointer"
            text={props.submitBtnMsg}
            onClick={() => {
              props.onSubmit();
              props.onClose();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AlertDialog;
