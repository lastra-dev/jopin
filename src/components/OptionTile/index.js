import React, { useState } from "react";
import { SettingArrow } from "../Arrows";
import ToggleSwitch from "../../components/ToggleSwitch";
import "./Option.css";

const OptionTile = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = (toggle) => {
    setChecked(toggle);
  };

  return (
    <div className={`pointer ${props.className}`} onClick={props.onClick}>
      {props.first && <hr />}
      <div className="flex fs-400 option-align">
        {props.text}
        {props.showToggle ? (
          <ToggleSwitch
            small="true"
            checked={checked}
            onChange={handleChecked}
          />
        ) : (
          <SettingArrow />
        )}
      </div>
      <hr />
    </div>
  );
};

export default OptionTile;
