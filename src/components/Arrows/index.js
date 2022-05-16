import React from "react";
import arrowLeftImg from "../../assets/images/arrow-left.svg";
import arrowRightImg from "../../assets/images/arrow-right.svg";
import settingArrowImg from "../../assets/images/setting-arrow-btn.svg";

const ArrowLeft = (props) => {
  return (
    <img alt="Previous week day." className="hover-animation-large pointer" src={arrowLeftImg} onClick={props.onClick}></img>
  );
};

const ArrowRight = (props) => {
  return (
    <img alt="Next week day." className="hover-animation-large pointer" src={arrowRightImg} onClick={props.onClick}></img>
  );
};

const SettingArrow = () => {
  return <img alt="Open setting." src={settingArrowImg}></img>;
};

export { ArrowLeft, ArrowRight, SettingArrow };
