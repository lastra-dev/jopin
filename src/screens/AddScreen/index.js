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
      <div className="flex add-screen-navbar" style={{ alignItems: "center" }}>
        {/* NOTA: <p></p> necesario para alinear los elementos (buscar una mejor forma) */}
        <Back /> <Title text="Agregar Clase" /> <p></p>
      </div>
      <hr></hr>
      <form
        className="flex column"
        style={{ textAlign: "center", marginTop: "32px", gap: "0.5rem" }}
      >
        <TextInput label="Nombre" />
        <TextInput label="Enlace" />
        <TextInput label="Horario" type="time" />
        <PrimaryButton className="add-btn-spacing btn-shadow" text="AGREGAR" />
      </form>
      <img
        className="center"
        src={addIllustration}
        style={{ marginTop: "8px" }}
      />
    </div>
  );
};

export default AddScreen;
