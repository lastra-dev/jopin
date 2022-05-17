import React, { useState } from "react";

import ToggleSwitch from "../ToggleSwitch";
import Formatters from "../../helpers/Formatters";
import ScheduleStorage from "../../controllers/ScheduleStorage";

import "./ScheduleTile.css";

const ScheduleTile = (props) => {
  const schedule = props.schedule;
  const [checked, setChecked] = useState(schedule.enabled);

  const handleCheck = (toggle) => {
    setChecked(toggle);
    ScheduleStorage.toggle(schedule.id);
  };

  return (
    <div className="flex tile">
      <p>{Formatters.formatTime(schedule.time)}</p>
      <div
        id="subject"
        onClick={props.onClick}
        className="border-dark rounded-border flex subject hover-animation"
      >
        <div id="subject-name" className="subject-name">
          {schedule.name}
        </div>
        <ToggleSwitch checked={checked} onChange={handleCheck} />
      </div>
    </div>
  );
};

export default ScheduleTile;
