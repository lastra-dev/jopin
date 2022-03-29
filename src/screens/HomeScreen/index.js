import React from "react";
import AddSubject from "../../components/AddSubject";
import SettingBtn from "../../components/SettingBtn";
import NavBar from "../../components/NavBar";
import { ArrowLeft, ArrowRight } from "../../components/Arrows";
import SubjectTile from "../../components/SubjectTile";
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div>
      <div className='flex home-screen-navbar'>
        <AddSubject /> <NavBar /> <SettingBtn />
      </div>
      <hr></hr>
      <div className='flex weekday' >
        <ArrowLeft />
        <p className='title'>Lunes</p>
        <ArrowRight />
      </div>
      <div className='flex column tiles'>
        <SubjectTile hour='10:00 am' name='Sistemas Operativos I' />
        <SubjectTile hour='1:00 pm' name='Tratamiento estadístico de la información' />
        <SubjectTile hour='4:00 pm' name='Desarrollo de aplicaciones web II' />
        <SubjectTile hour='5:30 pm' name='Desarrollo de Software' />
        <SubjectTile hour='7:00 pm' name='Redes Avanzadas' />
      </div>
    </div>
  );
};

export default HomeScreen;
