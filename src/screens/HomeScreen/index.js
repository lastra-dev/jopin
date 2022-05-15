import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "../../components/Modal";
import WeekDay from "../../helpers/WeekDay";
import Database from "../../models/Database";
import Schedule from "../../controllers/Schedule";
import AddButton from "../../components/AddButton";
import EntryTile from "../../components/EntryTile";
import SettingBtn from "../../components/SettingBtn";
import EntryStorage from "../../controllers/EntryStorage";
import { AppTitle } from "../../components/Titles";
import { ArrowLeft, ArrowRight } from "../../components/Arrows";

import "./HomeScreen.css";

const HomeScreen = () => {
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);
  const [modalIsShown, setModalIsShown] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [selectedWeekDay, setSelectedWeekDay] = useState(
    WeekDay.getCurrentWeekDay()
  );

  const fetchEntries = useCallback(() => {
    setEntries(EntryStorage.getAllFromWeekDay(selectedWeekDay));
  }, [selectedWeekDay]);

  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  const showModal = (e, entry) => {
    if (e.target.id !== "subject" && e.target.id !== "subject-name") return;
    setSelectedEntry(entry);
    setModalIsShown(true);
  };

  const hideModal = () => {
    setModalIsShown(false);
  };

  const openUrl = (entry) => {
    window.open(entry.url);
    hideModal();
  };

  const editEntry = (entry) => {
    navigate("/AddScreen", { state: { entry: entry } });
  };

  const deleteEntry = (entry) => {
    Database.deleteSchedule(entry.id);
    EntryStorage.delete(entry.id);
    Schedule.delete(entry);
    fetchEntries();
    hideModal();
  };

  const entriesToRender = entries.map((entry) => (
    <EntryTile
      entry={entry}
      key={entry.id}
      onClick={(e) => {
        showModal(e, entry);
      }}
    />
  ));

  const setPreviousWeekDay = () => {
    const weekDay = WeekDay.previousWeekDay(selectedWeekDay);
    setSelectedWeekDay(weekDay);
    fetchEntries();
  };

  const setNextWeekDay = () => {
    const weekDay = WeekDay.nextWeekDay(selectedWeekDay);
    setSelectedWeekDay(weekDay);
    fetchEntries();
  };

  const modalToRender = (
    <Modal
      onClose={hideModal}
      entry={selectedEntry}
      onOpen={() => {
        openUrl(selectedEntry);
      }}
      onEdit={() => {
        editEntry(selectedEntry);
      }}
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
      {modalIsShown && modalToRender}
      <div className="flex weekday">
        <ArrowLeft onClick={setPreviousWeekDay} />
        <p className="title">{selectedWeekDay}</p>
        <ArrowRight onClick={setNextWeekDay} />
      </div>
      <div className="flex column tiles">
        {entries.length > 0 ? entriesToRender : null}
      </div>
    </>
  );
};

export default HomeScreen;
