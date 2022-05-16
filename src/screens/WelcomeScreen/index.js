import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Auth from "../../services/Auth";
import { AppTitle } from "../../components/Titles";
import PrimaryButton from "../../components/PrimaryButton";
import { HashSpinner } from "../../components/LoadingSpinner";

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

  const loadHomeScreen = useCallback(() => {
    navigate("/HomeScreen", { replace: true });
  }, [navigate]);

  const loadWelcomeScreen = useCallback(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  useEffect(() => {
    Auth.monitorAuthState(loadHomeScreen, loadWelcomeScreen);
    let timer = setTimeout(() => {
      setLoading(false);
    }, 1500)
    return () => clearTimeout(timer);
  }, [loadHomeScreen, loadWelcomeScreen, setLoading]);

  const handleSubmit = () => {
    navigate("/LoginScreen", { replace: true });
  }

  return (
    loading ? <HashSpinner /> :
      <>
        <AppTitle />
        <div className="flex column override-gap">
          <img
            width="500px"
            src={welcomeImg}
            alt="Two people chatting"
          />
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
