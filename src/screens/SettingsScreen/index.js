import React from "react";

import Auth from "../../services/Auth";
import Back from "../../components/Back";
import Schedule from "../../controllers/Schedule";
import OptionTile from "../../components/OptionTile";
import EntryStorage from "../../controllers/EntryStorage";
import { SectionTitle, Title } from "../../components/Titles";

import "./SettingsScreen.css";

const SettingsScreen = () => {
  const deleteSchedules = () => {
    Schedule.deleteAll();
    EntryStorage.clear();
  };

  return (
    <>
      <div className="flex setting-screen-navbar">
        <Back /> <Title className="settings-title fw-500" text="Settings" />
      </div>
      <div className="mt-48">
        <SectionTitle text="App" />
        <OptionTile first="true" showToggle="true" text="Intrusive Mode" />
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
        <OptionTile className="text-red" text="Sign out" onClick={Auth.logout} />
      </div>
    </>
  );
};

export default SettingsScreen;
