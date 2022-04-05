import React, { useState } from "react";
import Back from "../../components/Back";
import Title from "../../components/Title";
import TitleSettings from "../../components/TitleSettings";
import "./SettingScreen.css";
import ToggleSwitch from "../../components/ToggleSwitch";
import { SettingArrow } from "../../components/Arrows";

const SettingsScreen = () => {
  const [checked, setChecked] = useState(false);

  const handleChecked = (toggle) => {
    setChecked(toggle);
  };
  return (
    <div>
      <div
        className='flex setting-screen-navbar'
        style={{ alignItems: "center" }}
      >
        <Back /> <Title text='Ajustes' /> <p></p>
      </div>

      <div style={{ marginTop: "48px" }}>
        <TitleSettings text='Aplicación' />
        <hr></hr>
        <div
          className='flex fs-400 setting-text-align'
          style={{ alignItems: "center" }}
        >
          Modo Intrusivo
          <ToggleSwitch checked={checked} onChange={handleChecked} />
        </div>
        <hr></hr>
      </div>

      <div style={{ marginTop: "32px" }}>
        <TitleSettings text='Nosotros' />
        <hr></hr>
        <div
          className='flex fs-400 setting-text-align'
          style={{ alignItems: "center" }}
        >
          Califica esta extensión <SettingArrow />
        </div>
        <hr></hr>
        <div
          className='flex fs-400 setting-text-align'
          style={{ alignItems: "center" }}
        >
          Ayuda y retroalimentación <SettingArrow />
        </div>
        <hr></hr>
        <div
          className='flex fs-400 setting-text-align'
          style={{ alignItems: "center" }}
        >
          Acerca de <SettingArrow />
        </div>
        <hr></hr>
      </div>

      <div style={{ marginTop: "32px" }}>
        <TitleSettings text='Cuenta' />
        <hr></hr>
        <div className='fs-400 setting-text-align'>Restablecer horarios</div>
        <hr></hr>
        <div className='fs-400 text-red setting-text-align'>Cerrar Sesión</div>
        <hr></hr>
      </div>
    </div>
  );
};

export default SettingsScreen;
