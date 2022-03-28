import React, { useState } from "react";
import './SubjectTile.css'
import Switch from "react-switch";

const SubjectTile = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = toggle => {
    setChecked(toggle);
  };

  return (
    <div className='flex tile'>
      <p>{props.hour}</p>
      <div className='border-dark rounded-border flex subject'>
        <div className='subject-name'>
          {props.name}
        </div>
        < Switch
          checked={checked}
          onChange={handleChecked}
          checkedIcon={false}
          uncheckedIcon={false}
          height={18}
          width={40}
          handleDiameter={22}
          boxShadow="0px 1px 3px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
          onColor="#FF5900"
        />
      </div>
    </div>
  );
};

export default SubjectTile;
