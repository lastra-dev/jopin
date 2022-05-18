import React from "react";

import Auth from "../../services/Auth";
import Back from "../../components/Back";
import Alarms from "../../controllers/Alarms";
import OptionTile from "../../components/OptionTile";
import { SectionTitle, Title } from "../../components/Titles";
import ScheduleStorage from "../../controllers/ScheduleStorage";

import "./SettingsScreen.css";
import Database from "../../models/Database";

const SettingsScreen = () => {
  const deleteSchedules = () => {
    Database.deleteAllSchedules();
    Alarms.deleteAll();
    ScheduleStorage.clear();
  };

  return (
    <>
      <div className="flex setting-screen-navbar">
        <Back /> <Title className="settings-title fw-500" text="Settings" />
      </div>
      <div className="mt-48">
        <SectionTitle text="App" />
        <OptionTile first="true" showToggle="true" text="Notify mode" />
      </div>

      <div className="mt-32">
        <SectionTitle text="About us" />
        <OptionTile first="true" text="Rate this extension" />
        <OptionTile text="Help and Feedback" />
        <OptionTile text="About" />
      </div>

      <div className="mt-32">
        <SectionTitle text="Account" />
        <OptionTile
          onClick={deleteSchedules}
          first="true"
          text="Delete Schedules"
        />
        <OptionTile
          className="text-red"
          text="Sign out"
          onClick={Auth.logout}
        />
      </div>
    </>
  );
};

export default SettingsScreen;
