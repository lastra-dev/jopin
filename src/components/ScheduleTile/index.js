import React, { useState } from "react";

import ToggleSwitch from "../ToggleSwitch";
import Database from "../../models/Database";
import Alarms from "../../controllers/Alarms";
import Formatters from "../../helpers/Formatters";
import ScheduleStorage from "../../controllers/ScheduleStorage";

import "./ScheduleTile.css";
import WeekDay from "../../helpers/WeekDay";

const ScheduleTile = (props) => {
  const weekDay = props.weekDay;
  const schedule = props.schedule;
  const [checked, setChecked] = useState(
    schedule.daysEnabled[WeekDay.weekDayToNumber(weekDay)]
  );

  const handleCheck = (toggle) => {
    setChecked(toggle);
    ScheduleStorage.toggle(schedule.id, weekDay);
    Database.updateSchedule(ScheduleStorage.get(schedule.id));
    if (!toggle) {
      // Alarms.deleteSingle(weekDay, schedule);
    } else {
      // Alarms.createSingle(weekDay, schedule);
    }
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
