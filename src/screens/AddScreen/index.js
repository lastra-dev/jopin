import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Auth from "../../services/Auth";
import Back from "../../components/Back";
import Input from "../../components/Input";
import Schedule from "../../models/Schedule";
import Database from "../../models/Database";
import Alarms from "../../controllers/Alarms";
import { Title } from "../../components/Titles";
import Weekdays from "../../components/Weekdays";
import PrimaryButton from "../../components/PrimaryButton";
import ScheduleStorage from "../../controllers/ScheduleStorage";

import "./AddScreen.css";
import AddImg from "../../assets/images/add-img.svg";

const AddScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const schedule = location.state ? location.state.schedule : null;
  const [url, setUrl] = useState(schedule ? schedule.url : "");
  const [name, setName] = useState(schedule ? schedule.name : "");
  const [time, setTime] = useState(schedule ? schedule.time : "");
  const [days, setDays] = useState(
    schedule ? schedule.days : [0, 0, 0, 0, 0, 0, 0]
  );

  const handleChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const handleAdd = async () => {
    try {
      const newSchedule = new Schedule({
        name: name,
        url: url,
        time: time,
        days: days,
        ownerId: Auth.getUserId(),
      });
      const id = await Database.createSchedule(newSchedule);
      newSchedule.id = id;
      ScheduleStorage.set(newSchedule);
      Alarms.create(newSchedule);
      navigate(-1);
    } catch (e) {
      console.log(e);
      setErrorMsg("Invalid Schedule, please fill all entries.");
    }
  };

  const handleEdit = () => {
    const newSchedule = new Schedule({
      name: name,
      url: url,
      time: time,
      days: days,
      daysEnabled: schedule.daysEnabled,
      ownerId: Auth.getUserId(),
      id: schedule.id,
    });
    Database.updateSchedule(newSchedule);
    Alarms.edit(schedule.id, newSchedule);
    ScheduleStorage.set(newSchedule);
    navigate(-1);
  };

  return (
    <>
      <div className="flex add-screen-navbar">
        <Back />
        <Title
          className="navbar-title fw-500"
          text={schedule ? "Edit Schedule" : "New Schedule"}
        />
      </div>
      <div className="flex column add-form">
        <Input
          label="Name"
          placeholder="Example"
          value={name}
          onChange={(e) => {
            handleChange(e, setName);
          }}
        />
        <Input
          label="URL"
          placeholder="https://example.com/"
          type="url"
          value={url}
          onChange={(e) => {
            handleChange(e, setUrl);
          }}
        />
        <Input
          label="Time"
          type="time"
          value={time}
          onChange={(e) => {
            handleChange(e, setTime);
          }}
        />
        <Weekdays value={days} onChange={setDays} />
        <p className="text-red">{errorMsg}</p>
        <PrimaryButton
          className="add-btn-spacing"
          text={schedule ? "EDIT" : "ADD"}
          onClick={schedule ? handleEdit : handleAdd}
        />
      </div>
      <img
        style={{ marginTop: "10px", height: "180px", overflow: "hidden" }}
        className="center"
        src={AddImg}
        alt="A Girl reading a book."
      />
    </>
  );
};

export default AddScreen;
