import React, { useState } from "react";
import { WeekdaysInput } from "react-weekdays-input";

const Weekdays = (props) => {
  const [value, setValue] = useState([0, 0, 0, 0, 0, 0, 0]);

  return (
    <>
      <p className={`label fs-300 ${props.className}`}>Días</p>
      <WeekdaysInput
        value={value}
        onChange={(value) => setValue(value)}
        days={["L", "M", "X", "J", "V", "S", "D"]}
        dayStyle={{
          padding: "4px 9px",
          margin: "4px",
          borderRadius: "6px",
          border: "1px solid #474747",
        }}
        activeDayStyle={{
          backgroundColor: "#474747",
          color: "white",
        }}
      />
    </>
  );
};

export default Weekdays;
