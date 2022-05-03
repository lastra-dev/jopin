import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  let navigate = useNavigate();

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

  const editEntry = (entry) => {
    navigate("/AddScreen", { state: { entry: entry } });
  }

  const deleteEntry = (entry) => {
    EntryStorage.delete(entry.id);
    fetchEntries();
    hideModal();
  };

  const EntriesToRender = entries.map((entry) => (
    <EntryTile
      key={entry.id}
      name={entry.name}
      hour={entry.hour}
      onClick={(e) => {
        showModal(e, entry);
      }}
    />
  ));

  const ModalToRender = (
    <Modal
      onOpen={openURL}
      onClose={hideModal}
      entry={selectedEntry}
      onEdit={() => { editEntry(selectedEntry); }}
      onDelete={() => { deleteEntry(selectedEntry); }}
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
