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
      <div className='flex home-screen-navbar' >
        <AddSubject /> <NavBar /> <SettingBtn />
      </div>
      <div className='flex weekday' >
        <ArrowLeft />
        <p className='title'>Lunes</p>
        <ArrowRight />
      </div>
      <div className='flex column tiles'>
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
