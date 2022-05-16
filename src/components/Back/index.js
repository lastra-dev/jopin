import React from "react";
import backImg from "../../assets/images/back.svg";
import { useNavigate } from "react-router-dom";

const Back = () => {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(-1);
      }}
    >
      {/* navigate(-1) lets you pop the screen */}
      <img className="hover-animation-large pointer" src={backImg} />
    </div>
  );
};

export default Back;
