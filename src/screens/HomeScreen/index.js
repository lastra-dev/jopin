import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "../../components/Modal";
import WeekDay from "../../helpers/WeekDay";
import Database from "../../models/Database";
import Alarms from "../../controllers/Alarms";
import { AppTitle } from "../../components/Titles";
import AddButton from "../../components/AddButton";
import EntryTile from "../../components/EntryTile";
import SettingBtn from "../../components/SettingBtn";
import { ArrowLeft, ArrowRight } from "../../components/Arrows";
import ScheduleStorage from "../../controllers/ScheduleStorage";
import { BoxLoadingSpinner } from "../../components/LoadingSpinner";

import "./HomeScreen.css";
import placeholder from "../../assets/images/placeholder.svg";

const HomeScreen = () => {
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);
  const [modalIsShown, setModalIsShown] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [selectedWeekDay, setSelectedWeekDay] = useState(
    WeekDay.getCurrentWeekDay()
  );

  const fetchEntries = useCallback(() => {
    setEntries(ScheduleStorage.getAllFromWeekDay(selectedWeekDay));
  }, [selectedWeekDay]);

  useEffect(() => {
    if (firstLoad) {
      let timer = setTimeout(() => {
        fetchEntries();
        setLoading(false);
        setFirstLoad(false);
      }, 1000)
      return () => clearTimeout(timer);
    } else {
      fetchEntries();
    }
  }, [fetchEntries, firstLoad, setLoading]);

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
    ScheduleStorage.delete(entry.id);
    Alarms.delete(entry);
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
        {loading ? <BoxLoadingSpinner /> :
          entries.length > 0 ? entriesToRender :
            <>
              <p className="subtitle">Nothing here yet...</p>
              <div style={{ height: "409.20px", overflow: "hidden" }}>
                <img alt="A man with a paper airplane." src={placeholder}></img>
              </div>
            </>
        }
      </div>
    </>
  );
};

export default HomeScreen;
