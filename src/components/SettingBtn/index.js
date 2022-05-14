import React from "react";
import settingBtn from "../../assets/images/setting-btn.svg";
import { useNavigate } from "react-router-dom";

const SettingBtn = () => {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/SettingsScreen");
      }}
    >
      <img className="pointer" src={settingBtn}></img>
    </div>
  );
};

export default SettingBtn;
