import React, { useState } from "react";
import Back from "../../components/Back";
import { Title } from "../../components/Titles";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import Weekdays from "../../components/Weekdays";
import addIllustration from "../../assets/images/addIllustration.svg";
import EntryStorage from '../../controllers/EntryStorage';
import Entry from "../../models/Entry";
import "./AddScreen.css";

const AddScreen = () => {
  const [name, setName] = useState('');
  const [URL, setURL] = useState('');
  const [hour, setHour] = useState('');
  const [days, setDays] = useState([0, 0, 0, 0, 0, 0, 0]);

  const handleChange = (e, setNode) => {
    setNode(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = new Entry(0, name, URL, hour, days);
    EntryStorage.add(0, entry);
  }

  return (
    <>
      <div className="flex add-screen-navbar">
        <Back /> <Title className="navbar-title fw-500" text="New Schedule" />
      </div>
      <form className="flex column add-form">
        <Input label="Name" value={name} onChange={(e) => { handleChange(e, setName) }} />
        <Input label="URL" value={URL} onChange={(e) => { handleChange(e, setURL) }} />
        <Input label="Hour" type="time" value={hour} onChange={(e) => { handleChange(e, setHour) }} />
        <Weekdays value={days} onChange={setDays} />
        <PrimaryButton className="add-btn-spacing" text="ADD" onClick={(e) => { handleSubmit(e) }} />
      </form>
      <img
        className="center"
        src={addIllustration}
        alt="Two persons on their laptops"
      />
    </>
  );
};

export default AddScreen;
