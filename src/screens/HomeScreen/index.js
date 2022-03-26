import React from "react";
import AddSubject from "../../components/AddSubject";
import SettingBtn from "../../components/SettingBtn";
import NavBar from "../../components/NavBar";
import { ArrowLeft, ArrowRight } from "../../components/Arrows";
import SubjectTile from "../../components/SubjectTile";

const HomeScreen = () => {
  return (
    <div>
      <div
        className='flex'
        style={{ justifyContent: "space-between", margin: "0 24px" }}
      >
        <AddSubject /> <NavBar /> <SettingBtn />
      </div>
      <div
        className='flex'
        style={{
          marginTop: "40px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowLeft />
        <p className='title'>Lunes</p>
        <ArrowRight />
      </div>
      <div style={{ marginTop: "24px", gap: "1.5rem" }} className='flex column'>
        <SubjectTile hour='10:00 am' name='Materia de Rellenoooooooooooooooo' />
        <SubjectTile hour='10:00 am' name='Materia de Rellenoooooooooooooooo' />
        <SubjectTile hour='10:00 am' name='Materia de Rellenoooooooooooooooo' />
        <SubjectTile hour='10:00 am' name='Materia de Rellenoooooooooooooooo' />
        <SubjectTile hour='10:00 am' name='Materia de Rellenoooooooooooooooo' />
      </div>
    </div>
  );
};

export default HomeScreen;
