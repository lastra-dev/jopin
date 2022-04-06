import React from "react";
import Back from "../../components/Back";
import Title from "../../components/Title";
import TextInput from "../../components/TextInput";
import PrimaryButton from "../../components/PrimaryButton";
import Weekdays from "../../components/Weekdays";
import addIllustration from "../../assets/images/addIllustration.svg";
import "./AddScreen.css";

const AddScreen = () => {
  return (
    <div>
      <div className="flex add-screen-navbar">
        <Back /> <Title className="navbar-title fw-500" text="Agregar Clase" />
      </div>
      <form className="flex column add-form">
        <TextInput label="Nombre" />
        <TextInput label="Enlace" />
        <TextInput label="Horario" type="time" />
        <Weekdays />
        <PrimaryButton className="add-btn-spacing" text="AGREGAR" />
      </form>
      <img
        className="center"
        src={addIllustration}
        alt="Two persons on their laptops"
      />
    </div>
  );
};

export default AddScreen;
