import React, { useState } from "react";
import './SubjectTile.css'
import ToggleSwitch from "../ToggleSwitch";

const SubjectTile = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = toggle => {
    setChecked(toggle);
  };

  return (
    <div className='flex tile'>
      <p>{props.hour}</p>
      <div id="subject" onClick={props.onClick} className='border-dark rounded-border flex subject'>
        <div id="subject-name" className='subject-name' >
          {props.name}
        </div>
        < ToggleSwitch checked={checked} onChange={handleChecked} />
      </div>
    </div>
  );
};

export default SubjectTile;
