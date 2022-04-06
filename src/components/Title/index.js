import React from "react";

const Title = (props) => {
  return (
    <div>
      <center>
        <p className={`fs-600 ${props.className}`}>{props.text}</p>
      </center>
    </div>
  );
};

export default Title;
