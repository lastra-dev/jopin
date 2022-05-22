import React from "react";
import backImg from "../../assets/images/back.svg";
import { useNavigate } from "react-router-dom";

const Back = (props) => {
  let navigate = useNavigate();

  return (
    <div
      onClick={
        props.onClick
          ? props.onClick
          : () => {
              navigate(-1);
            }
      }
    >
      {/* navigate(-1) lets you pop the screen */}
      <img
        alt="Go back."
        className="hover-animation-large pointer"
        src={backImg}
      />
    </div>
  );
};

export default Back;
