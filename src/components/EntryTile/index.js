import React, { useState } from "react";
import './EntryTile.css'
import ToggleSwitch from "../ToggleSwitch";

const EntryTile = (props) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = toggle => {
    setChecked(toggle);
  };

  return (
    <div className='flex tile'>
      <p>{props.hour}</p>
      <div id="subject" onClick={props.onClick} className='border-dark rounded-border flex subject'>
        <div id="subject-name" className='subject-name' >
          {props.name}
        </div>
        < ToggleSwitch checked={checked} onChange={handleCheck} />
      </div>
    </div>
  );
};

export default EntryTile;
