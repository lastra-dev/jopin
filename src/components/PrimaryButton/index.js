import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = (props) => {
  return (
    <button
      className={`hover-animation primary-btn fs-500 pointer ${props.className}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default PrimaryButton;
