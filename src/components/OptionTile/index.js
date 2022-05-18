import React, { useState } from "react";
import { SettingArrow } from "../Arrows";
import Alarms from "../../controllers/Alarms";
import ToggleSwitch from "../../components/ToggleSwitch";
import ScheduleStorage from "../../controllers/ScheduleStorage";

import "./Option.css";

const OptionTile = (props) => {
  const [checked, setChecked] = useState(
    localStorage.getItem("notify") === "true"
  );

  const handleChecked = (toggle) => {
    setChecked(toggle);
    if (toggle) {
      localStorage.setItem("notify", true);
      Alarms.deleteAll();
      Alarms.createAll(ScheduleStorage.getAll());
    } else {
      localStorage.setItem("notify", false);
      Alarms.deleteAll();
      Alarms.createAll(ScheduleStorage.getAll());
    }
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
