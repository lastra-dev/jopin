import React from "react";
import Back from "../../components/Back";
import Title from "../../components/Title";
import TextInput from "../../components/TextInput";
import PrimaryButton from "../../components/PrimaryButton";
import addIllustration from "../../assets/images/addIllustration.svg";
import "./AddScreen.css";

const AddScreen = () => {
  return (
    <div>
      <div className="flex add-screen-navbar">
        <Back /> <Title className="navbar-title" text="Agregar Clase" />
      </div>
      <hr></hr>
      <form className="flex column add-form">
        <TextInput label="Nombre" />
        <TextInput label="Enlace" />
        <TextInput label="Horario" type="time" />
        <PrimaryButton className="add-btn-spacing btn-shadow" text="AGREGAR" />
      </form>
      <img
        className="center"
        src={addIllustration}
        alt="Two persons on their laptops"
        style={{ marginTop: "8px" }}
      />
    </div>
  );
};

export default AddScreen;
