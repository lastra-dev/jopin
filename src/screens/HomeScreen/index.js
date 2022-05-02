import React, { useState, useEffect } from "react";
import AddButton from "../../components/AddButton";
import SettingBtn from "../../components/SettingBtn";
import { AppTitle } from "../../components/Titles";
import { ArrowLeft, ArrowRight } from "../../components/Arrows";
import EntryTile from "../../components/EntryTile";
import Modal from "../../components/Modal";
import EntryStorage from "../../controllers/EntryStorage";
import "./HomeScreen.css";

const HomeScreen = () => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, [setEntries]);

  const showModal = (e) => {
    if (e.target.id !== "subject" && e.target.id !== "subject-name") return;
    setModalIsShown(true);
  };

  const hideModal = () => {
    setModalIsShown(false);
  };

  const fetchEntries = () => {
    setEntries(EntryStorage.getAll());
  }

  const renderedEntries = entries.map((entry, index) => (
    < EntryTile
      key={index}
      hour={entry.hour}
      name={entry.name}
      onClick={showModal}
    />
  ))

  return (
    <>
      <div className='flex home-screen-navbar'>
        <AddButton /> <AppTitle /> <SettingBtn />
      </div>
      {modalIsShown && <Modal onClose={hideModal} />}
      <div className='flex weekday'>
        <ArrowLeft />
        <p className='title'>Monday</p>
        <ArrowRight />
      </div>
      <div className="flex column tiles">
        {entries.length > 0 ? renderedEntries : null}
      </div>
    </>
  );
};

export default HomeScreen;
