import React, { useState } from "react";
import AddSubject from "../../components/AddSubject";
import SettingBtn from "../../components/SettingBtn";
import AppTitle from "../../components/AppTitle";
import { ArrowLeft, ArrowRight } from "../../components/Arrows";
import SubjectTile from "../../components/SubjectTile";
import AlertDialog from "../../components/AlertDialog";
import "./HomeScreen.css";

const HomeScreen = () => {
  const [alertIsShown, setAlertIsShown] = useState(false);

  const showAlertHandler = () => {
    setAlertIsShown(true);
  };

  const hideAlertHandler = () => {
    setAlertIsShown(false);
  };

  return (
    <div>
      <div className="flex home-screen-navbar">
        <AddSubject /> <AppTitle /> <SettingBtn />
      </div>
      {alertIsShown && (
        <AlertDialog
          title="Eliminar Clase"
          text="¿Deseas eliminar la clase?"
          submitBtnMsg="ACEPTAR"
          onClose={hideAlertHandler}
        />
      )}
      <div className="flex weekday">
        <ArrowLeft />
        <p className="title">Lunes</p>
        <ArrowRight />
      </div>
      <div className="flex column tiles">
        <SubjectTile hour="10:00 am" name="Sistemas Operativos I" />
        <SubjectTile
          hour="1:00 pm"
          name="Tratamiento estadístico de la información"
        />
        <SubjectTile hour="4:00 pm" name="Desarrollo de aplicaciones web II" />
        <SubjectTile hour="5:30 pm" name="Desarrollo de Software" />
        <SubjectTile hour="7:00 pm" name="Redes Avanzadas" />
        <p onClick={showAlertHandler}> show alert </p>
      </div>
    </div>
  );
};

export default HomeScreen;
