import React, { useState } from "react";
import './EntryTile.css'
import ToggleSwitch from "../ToggleSwitch";
import Formatters from "../../helpers/Formatters";

const EntryTile = (props) => {
  const entry = props.entry;
  const [checked, setChecked] = useState(entry.enabled);

  const handleCheck = toggle => {
    setChecked(toggle);
  };

  return (
    <div className='flex tile'>
      <p>{Formatters.formatTime(entry.hour)}</p>
      <div id="subject" onClick={props.onClick} className='border-dark rounded-border flex subject'>
        <div id="subject-name" className='subject-name' >
          {entry.name}
        </div>
        < ToggleSwitch checked={checked} onChange={handleCheck} />
      </div>
    </div>
  );
};

export default EntryTile;
