import React, { useState } from "react";
import ToggleSwitch from "../ToggleSwitch";
import Formatters from "../../helpers/Formatters";
import ScheduleStorage from "../../controllers/ScheduleStorage";
import "./EntryTile.css";

const EntryTile = (props) => {
  const entry = props.entry;
  const [checked, setChecked] = useState(entry.enabled);

  const handleCheck = (toggle) => {
    setChecked(toggle);
    ScheduleStorage.toggle(entry.id);
  };

  return (
    <div className="flex tile">
      <p>{Formatters.formatTime(entry.time)}</p>
      <div
        id="subject"
        onClick={props.onClick}
        className="border-dark rounded-border flex subject hover-animation"
      >
        <div id="subject-name" className="subject-name">
          {entry.name}
        </div>
        <ToggleSwitch checked={checked} onChange={handleCheck} />
      </div>
    </div>
  );
};

export default EntryTile;
