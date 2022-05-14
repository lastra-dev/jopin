import React from "react";
import arrowLeftImg from "../../assets/images/arrow-left.svg";
import arrowRightImg from "../../assets/images/arrow-right.svg";
import settingArrowImg from "../../assets/images/setting-arrow-btn.svg";

const ArrowLeft = (props) => {
  return <img className="pointer" src={arrowLeftImg} onClick={props.onClick}></img>;
};

const ArrowRight = (props) => {
  return <img className="pointer" src={arrowRightImg} onClick={props.onClick}></img>;
};

const SettingArrow = () => {
  return <img src={settingArrowImg}></img>;
};

export { ArrowLeft, ArrowRight, SettingArrow };
