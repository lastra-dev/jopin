import React from "react";
import addBtn from "../../assets/images/add-btn.svg";
import { useNavigate } from "react-router-dom";

const AddButton = () => {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/AddScreen");
      }}
    >
      <img
        className="hover-animation-large pointer"
        src={addBtn}
        alt="Add Button"
      ></img>
    </div>
  );
};

export default AddButton;
