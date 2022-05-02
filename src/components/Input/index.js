import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div className={props.className}>
      <p className={`label fs-300`}>{props.label}</p>
      <input
        name={props.name}
        onChange={props.onChange}
        className="rounded-border input"
        spellCheck={props.spellCheck}
        autoComplete={props.autoComplete}
        autoFocus={props.autoFocus}
        type={props.type}
      ></input>
    </div>
  );
};

export default Input;
