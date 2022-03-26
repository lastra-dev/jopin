import React from "react";

const SubjectTile = (props) => {
  return (
    <div
      className='flex'
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <p>{props.hour}</p>

      <div
        className='border-dark rounded-border flex'
        style={{
          padding: "16px",
          border: "1.5px solid",
          alignItems: "center",
          justifyContent: "center",
          width: "200px",
          textOverflow: "ellipsis",
        }}
      >
        <div
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            fontWeight: 500,
          }}
        >
          {props.name}
        </div>
        <input type='checkbox'></input>
      </div>
    </div>
  );
};

export default SubjectTile;
