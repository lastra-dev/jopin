import React, { useState } from "react";
import AddButton from "../../components/AddButton";
import SettingBtn from "../../components/SettingBtn";
import { AppTitle } from "../../components/Titles";
import { ArrowLeft, ArrowRight } from "../../components/Arrows";
import SubjectTile from "../../components/SubjectTile";
import Modal from "../../components/Modal";
import "./HomeScreen.css";

const HomeScreen = () => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showModal = (e) => {
    if (e.target.id !== "subject" && e.target.id !== "subject-name") return;
    setModalIsShown(true);
  };

  const hideModal = () => {
    setModalIsShown(false);
  };

  return (
    <div>
      <div className="flex home-screen-navbar">
        <AddButton /> <AppTitle /> <SettingBtn />
      </div>
      {modalIsShown && <Modal onClose={hideModal} />}
      <div className="flex weekday">
        <ArrowLeft />
        <p className="title">Lunes</p>
        <ArrowRight />
      </div>
      <div className="flex column tiles">
        <SubjectTile
          onClick={showModal}
          hour="10:00 am"
          name="Sistemas Operativos I"
        />
        <SubjectTile
          onClick={showModal}
          hour="1:00 pm"
          name="Tratamiento estadístico de la información"
        />
        <SubjectTile
          onClick={showModal}
          hour="4:00 pm"
          name="Desarrollo de aplicaciones web II"
        />
        <SubjectTile
          onClick={showModal}
          hour="5:30 pm"
          name="Desarrollo de Software"
        />
        <SubjectTile
          onClick={showModal}
          hour="7:00 pm"
          name="Redes Avanzadas"
        />
      </div>
    </div>
  );
};

export default HomeScreen;
