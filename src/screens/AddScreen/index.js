import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Auth from "../../services/Auth";
import Entry from "../../models/Entry";
import Back from "../../components/Back";
import Input from "../../components/Input";
import Database from "../../models/Database";
import { Title } from "../../components/Titles";
import Weekdays from "../../components/Weekdays";
import Schedule from "../../controllers/Schedule";
import EntryStorage from "../../controllers/EntryStorage";
import PrimaryButton from "../../components/PrimaryButton";

import "./AddScreen.css";
import AddImg from "../../assets/images/add-img.svg";

const AddScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const entry = location.state ? location.state.entry : null;
  const [url, setUrl] = useState(entry ? entry.url : "");
  const [name, setName] = useState(entry ? entry.name : "");
  const [time, setTime] = useState(entry ? entry.time : "");
  const [days, setDays] = useState(entry ? entry.days : [0, 0, 0, 0, 0, 0, 0]);

  const handleChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const newEntry = new Entry(name, url, time, days, Auth.getUserId());
    const id = await Database.createSchedule(newEntry);
    newEntry.id = id;
    EntryStorage.add(newEntry);
    Schedule.create(newEntry);
    navigate(-1);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const newEntry = new Entry(
      name,
      url,
      time,
      days,
      entry.ownerId,
      entry.enabled,
      entry.id
    );
    Database.updateSchedule(newEntry);
    Schedule.edit(entry.id, newEntry);
    EntryStorage.edit(newEntry);
    navigate(-1);
  };

  return (
    <>
      <div className="flex add-screen-navbar">
        <Back />
        <Title
          className="navbar-title fw-500"
          text={entry ? "Edit Schedule" : "New Schedule"}
        />
      </div>
      <form className="flex column add-form">
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
        <PrimaryButton
          className="add-btn-spacing"
          text={entry ? "EDIT" : "ADD"}
          onClick={(e) => {
            entry ? handleEdit(e) : handleAdd(e);
          }}
        />
      </form>
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
