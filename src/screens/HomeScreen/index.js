import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "../../components/Modal";
import WeekDay from "../../helpers/WeekDay";
import Database from "../../models/Database";
import Alarms from "../../controllers/Alarms";
import { AppTitle } from "../../components/Titles";
import AddButton from "../../components/AddButton";
import ScheduleTile from "../../components/ScheduleTile";
import SettingBtn from "../../components/SettingBtn";
import { ArrowLeft, ArrowRight } from "../../components/Arrows";
import ScheduleStorage from "../../controllers/ScheduleStorage";

import "./HomeScreen.css";
import placeholder from "../../assets/images/placeholder.svg";

const HomeScreen = () => {
  const navigate = useNavigate();
  const [schedules, setSchedules] = useState([]);
  const [modalIsShown, setModalIsShown] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [selectedWeekDay, setSelectedWeekDay] = useState(
    WeekDay.getCurrentWeekDay()
  );

  const fetchSchedules = useCallback(() => {
    setSchedules(ScheduleStorage.getAllFromWeekDay(selectedWeekDay));
  }, [selectedWeekDay]);

  useEffect(() => {
    fetchSchedules();
  }, [fetchSchedules]);

  const showModal = (e, schedule) => {
    if (e.target.id !== "subject" && e.target.id !== "subject-name") return;
    setSelectedSchedule(schedule);
    setModalIsShown(true);
  };

  const hideModal = () => {
    setModalIsShown(false);
  };

  const openUrl = (schedule) => {
    window.open(schedule.url);
    hideModal();
  };

  const editSchedule = (schedule) => {
    navigate("/AddScreen", { state: { schedule: schedule } });
  };

  const deleteSchedule = (schedule) => {
    Database.deleteSchedule(schedule.id);
    ScheduleStorage.delete(schedule.id);
    Alarms.delete(schedule);
    fetchSchedules();
    hideModal();
  };

  const schedulesToRender = schedules.map((schedule) => (
    <ScheduleTile
      schedule={schedule}
      key={schedule.id}
      onClick={(e) => {
        showModal(e, schedule);
      }}
    />
  ));

  const setPreviousWeekDay = () => {
    const weekDay = WeekDay.previousWeekDay(selectedWeekDay);
    setSelectedWeekDay(weekDay);
    fetchSchedules();
  };

  const setNextWeekDay = () => {
    const weekDay = WeekDay.nextWeekDay(selectedWeekDay);
    setSelectedWeekDay(weekDay);
    fetchSchedules();
  };

  const modalToRender = (
    <Modal
      onClose={hideModal}
      schedule={selectedSchedule}
      onOpen={() => {
        openUrl(selectedSchedule);
      }}
      onEdit={() => {
        editSchedule(selectedSchedule);
      }}
      onDelete={() => {
        deleteSchedule(selectedSchedule);
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
        {schedules.length > 0 ? (
          schedulesToRender
        ) : (
          <>
            <p className="subtitle">Nothing here yet...</p>
            <div style={{ height: "409.20px", overflow: "hidden" }}>
              <img alt="A man with a paper airplane." src={placeholder}></img>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HomeScreen;
