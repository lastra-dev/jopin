import React from "react";

const Title = (props) => {
  return (
    <div>
      <center>
        <p className="fs-600" style={{ fontWeight: 500 }}>{props.text}</p>
      </center>
    </div>
  );
};

export default Title;
