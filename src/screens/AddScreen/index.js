import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Back from "../../components/Back";
import { Title } from "../../components/Titles";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import Weekdays from "../../components/Weekdays";
import AddImageWatch from "../../assets/images/add-img-watch.svg";
import EntryStorage from "../../controllers/EntryStorage";
import Entry from "../../models/Entry";
import Schedule from "../../controllers/Schedule";
import "./AddScreen.css";

const AddScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const entry = location.state ? location.state.entry : null;
  const [URL, setURL] = useState(entry ? entry.url : "");
  const [name, setName] = useState(entry ? entry.name : "");
  const [hour, setHour] = useState(entry ? entry.hour : "");
  const [days, setDays] = useState(entry ? entry.days : [0, 0, 0, 0, 0, 0, 0]);

  const handleChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newEntry = new Entry(name, URL, hour, days);
    EntryStorage.add(newEntry);
    Schedule.create(newEntry);
    navigate(-1);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const newEntry = new Entry(name, URL, hour, days, entry.enabled, entry.id);
    EntryStorage.edit(entry.id, newEntry);
    navigate(-1);
  };

  return (
    <>
      <div className="flex add-screen-navbar">
        <Back />{" "}
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
          value={URL}
          onChange={(e) => {
            handleChange(e, setURL);
          }}
        />
        <Input
          label="Hour"
          type="time"
          value={hour}
          onChange={(e) => {
            handleChange(e, setHour);
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
        className="center"
        src={AddImageWatch}
        alt="A simple clock illustration."
      />
    </>
  );
};

export default AddScreen;
