import React from "react";
import Switch from "react-switch";

const ToggleSwitch = (props) => {
  return (
    <div>
      <Switch
        checked={props.checked}
        onChange={props.onChange}
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
  );
};

export default ToggleSwitch;
