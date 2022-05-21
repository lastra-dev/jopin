import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Auth from "../../services/Auth";
import Database from "../../models/Database";
import Alarms from "../../controllers/Alarms";
import { AppTitle } from "../../components/Titles";
import PrimaryButton from "../../components/PrimaryButton";
import { HashSpinner } from "../../components/LoadingSpinner";
import ScheduleStorage from "../../controllers/ScheduleStorage";

import welcomeImg from "../../assets/images/welcome-img.svg";
import "./WelcomeScreen.css";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  window.onkeydown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const fetchAndSaveSchedules = async () => {
    if (!localStorage.getItem("loggedIn")) {
      const schedules = await Database.getSchedules();
      ScheduleStorage.setAll(schedules);
      // Alarms.createAll(schedules);
      localStorage.setItem("loggedIn", true);
    }
  };

  const loadHomeScreen = useCallback(async () => {
    await fetchAndSaveSchedules();
    setLoading(false);
    navigate("/HomeScreen", { replace: true });
  }, [navigate]);

  const loadWelcomeScreen = useCallback(() => {
    setLoading(false);
    navigate("/", { replace: true });
  }, [navigate]);

  const handleSubmit = () => {
    navigate("/LoginScreen", { replace: true });
  };

  useEffect(() => {
    Auth.monitorAuthState(loadHomeScreen, loadWelcomeScreen);
  }, [loadHomeScreen, loadWelcomeScreen]);

  return loading ? (
    <HashSpinner />
  ) : (
    <>
      <AppTitle />
      <div className="flex column override-gap">
        <img width="500px" src={welcomeImg} alt="Two people chatting" />
        <p className="title welcome-title">Welcome!</p>
        <p className="subtitle text-gray">Let us schedule your links...</p>
        <PrimaryButton
          className="start-button btn-shadow"
          text="START"
          onClick={handleSubmit}
        />
      </div>
    </>
  );
};

export default WelcomeScreen;
