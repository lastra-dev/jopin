import React from "react";
import "./TextInput.css";

const TextInput = (props) => {
  return (
    <div>
      <p className={`label fs-300 ${props.className}`}>{props.label}</p>
      <input
        name={props.name}
        className="rounded-border input"
        spellCheck={props.spellCheck}
        autoComplete={props.autoComplete}
        autoFocus={props.autoFocus}
        type={props.type}
      ></input>
    </div>
  );
};

export default TextInput;
