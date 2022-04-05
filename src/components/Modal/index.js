import React from "react";
import "./Modal.css";
import {SettingArrow} from "../Arrows";

const Modal = (props) => {
  window.onkeydown = (event) => {
    // Close on Escape key
    if (event.key === "Escape") {
      props.onClose();
    }
  };

  return (
    <>
      <div className="backdrop" onClick={props.onClose} />
      <form className="modal" onSubmit={(e) => props.onSubmit(e)}>
        <p   className="fs-500" style={{fontWeight: "500", margin: "0 0 8px 24px"}}> Sistemas Operativos I </p>

        <div
          className='flex fs-400 setting-text-align'
          style={{ alignItems: "center" }}
        >
          Abrir <SettingArrow />
        </div>
        <hr></hr>

        <div
          className='flex fs-400 setting-text-align'
          style={{ alignItems: "center" }}
        >
          Editar <SettingArrow />
        </div>
        <hr></hr>

        <div
          className='flex fs-400 setting-text-align text-red'
          style={{ alignItems: "center" }}
        >
          Eliminar <SettingArrow />
        </div>
        <hr></hr>

      </form>
    </>
  );
};

export default Modal;
