import React from "react";

const TitleSettings = (props) => {
  return (
    <div>
      <p className='fs-600' style={{ fontWeight: 500, marginLeft: "24px" }}>
        {props.text}
      </p>
    </div>
  );
};

export default TitleSettings;
