import React from "react";
import "./PrimaryButton.css"

const PrimaryButton = (props) => {
  return (
    <button className={`primary-btn btn-shadow fs-500 ${props.className}`}>
      {props.text}
    </button>
  );
};

export default PrimaryButton;
