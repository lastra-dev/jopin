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
      {/* navigate(-1) permite navegar a la pantalla anterior */}
      <img src={backImg} />
    </div>
  );
};

export default Back;
