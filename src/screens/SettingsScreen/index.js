import React from "react";
import Back from "../../components/Back";
import Title from "../../components/Title";
import TitleSettings from "../../components/TitleSettings";
import "./SettingsScreen.css";
import OptionTile from "../../components/OptionTile";

const SettingsScreen = () => {
  return (
    <div>
      <div className="flex setting-screen-navbar">
        <Back /> <Title className="settings-title fw-500" text="Ajustes" />
      </div>
      <div style={{ marginTop: "48px" }}>
        <TitleSettings text="Aplicación" />
        <OptionTile first="true" showToggle="true" text="Modo intrusivo" />
      </div>

      <div style={{ marginTop: "32px" }}>
        <TitleSettings text="Nosotros" />
        <OptionTile first="true" text="Califica esta extensión" />
        <OptionTile text="Ayuda y retroalimentación" />
        <OptionTile text="Acerca de" />
      </div>

      <div style={{ marginTop: "32px" }}>
        <TitleSettings text="Cuenta" />
        <OptionTile first="true" text="Restablecer horarios" />
        <OptionTile className="text-red" text="Cerrar Sesión" />
      </div>
    </div>
  );
};

export default SettingsScreen;
