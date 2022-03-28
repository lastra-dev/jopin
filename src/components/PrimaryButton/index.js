import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = (props) => {
  return (
    <button
      className={`primary-btn btn-shadow fs-500 ${props.className}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default PrimaryButton;