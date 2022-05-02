import React from "react";
import Back from "../../components/Back";
import { SectionTitle, Title } from "../../components/Titles";
import OptionTile from "../../components/OptionTile";
import "./SettingsScreen.css";

const SettingsScreen = () => {
  return (
    <>
      <div className='flex setting-screen-navbar'>
        <Back /> <Title className='settings-title fw-500' text='Settings' />
      </div>
      <div className='mt-48'>
        <SectionTitle text='App' />
        <OptionTile first='true' showToggle='true' text='Intrusive Mode' />
      </div>

      <div className='mt-32'>
        <SectionTitle text='About us' />
        <OptionTile first='true' text='Rate this extension' />
        <OptionTile text='Help and Feedback' />
        <OptionTile text='About' />
      </div>

      <div className='mt-32'>
        <SectionTitle text='Account' />
        <OptionTile first='true' text='Reset Schedule' />
        <OptionTile className='text-red' text='Sign out' />
      </div>
    </>
  );
};

export default SettingsScreen;
