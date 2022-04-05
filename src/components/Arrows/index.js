import React from "react";
import arrowLeftImg from "../../assets/images/arrow-left.svg";
import arrowRightImg from "../../assets/images/arrow-right.svg";
import settingArrowImg from "../../assets/images/setting-arrow-btn.svg";

const ArrowLeft = () => {
  return (
    <div>
      <img src={arrowLeftImg}></img>
    </div>
  );
};

const ArrowRight = () => {
  return (
    <div>
      <img src={arrowRightImg}></img>
    </div>
  );
};

const SettingArrow = () => {
  return (
    <div>
      <img src={settingArrowImg}></img>
    </div>
  );
};

export { ArrowLeft, ArrowRight, SettingArrow };
