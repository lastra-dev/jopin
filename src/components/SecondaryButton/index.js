import React from "react";
import "./SecondaryButton.css";

const SecondaryButton = (props) => {
  return (
    <button
      className={`hover-animation secondary-btn fs-500 ${props.className}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default SecondaryButton;
