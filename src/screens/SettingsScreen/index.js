import React from "react";
import Back from "../../components/Back";
import { SectionTitle, Title } from "../../components/Titles";
import OptionTile from "../../components/OptionTile";
import "./SettingsScreen.css";

const SettingsScreen = () => {
  return (
    <div>
      <div className="flex setting-screen-navbar">
        <Back /> <Title className="settings-title fw-500" text="Ajustes" />
      </div>
      <div className="mt-48">
        <SectionTitle text="Aplicación" />
        <OptionTile first="true" showToggle="true" text="Modo intrusivo" />
      </div>

      <div className="mt-32">
        <SectionTitle text="Nosotros" />
        <OptionTile first="true" text="Califica esta extensión" />
        <OptionTile text="Ayuda y retroalimentación" />
        <OptionTile text="Acerca de" />
      </div>

      <div className="mt-32">
        <SectionTitle text="Cuenta" />
        <OptionTile first="true" text="Restablecer horarios" />
        <OptionTile className="text-red" text="Cerrar Sesión" />
      </div>
    </div>
  );
};

export default SettingsScreen;
