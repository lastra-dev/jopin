import React from "react";
import arrowLeftImg from "../../assets/images/arrow-left.svg";
import arrowRightImg from "../../assets/images/arrow-right.svg";
import settingArrowImg from "../../assets/images/setting-arrow-btn.svg";

const ArrowLeft = () => {
  return <img src={arrowLeftImg}></img>;
};

const ArrowRight = () => {
  return <img src={arrowRightImg}></img>;
};

const SettingArrow = () => {
  return <img src={settingArrowImg}></img>;
};

export { ArrowLeft, ArrowRight, SettingArrow };
