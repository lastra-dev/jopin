import React from "react";
import './SubjectTile.css'

const SubjectTile = (props) => {
  return (
    <div className='flex tile'>
      <p>{props.hour}</p>
      <div className='border-dark rounded-border flex subject'>
        <div className='subject-name'>
          {props.name}
        </div>
        <input type='checkbox'></input>
      </div>
    </div>
  );
};

export default SubjectTile;
