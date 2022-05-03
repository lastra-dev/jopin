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
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    fetchEntries();
  }, [setEntries]);

  const showModal = (e, entry) => {
    if (e.target.id !== "subject" && e.target.id !== "subject-name") return;
    setSelectedEntry(entry);
    setModalIsShown(true);
  };

  const hideModal = () => {
    setModalIsShown(false);
  };

  const fetchEntries = () => {
    setEntries(EntryStorage.getAll());
  };

  const openURL = () => {
    // TODO: Invoke openURL function
    hideModal();
  };

  const deleteEntry = (entry) => {
    EntryStorage.delete(entry.id);
    fetchEntries();
    hideModal();
  };

  const EntriesToRender = entries.map((entry) => (
    <EntryTile
      key={entry.id}
      hour={entry.hour}
      name={entry.name}
      onClick={(e) => {
        showModal(e, entry);
      }}
    />
  ));

  const ModalToRender = (
    <Modal
      entry={selectedEntry}
      onOpen={openURL}
      onClose={hideModal}
      onDelete={() => {
        deleteEntry(selectedEntry);
      }}
    />
  );

  return (
    <>
      <div className="flex home-screen-navbar">
        <AddButton /> <AppTitle /> <SettingBtn />
      </div>
      {modalIsShown && ModalToRender}
      <div className="flex weekday">
        <ArrowLeft />
        <p className="title">Monday</p>
        <ArrowRight />
      </div>
      <div className="flex column tiles">
        {entries.length > 0 ? EntriesToRender : null}
      </div>
    </>
  );
};

export default HomeScreen;
