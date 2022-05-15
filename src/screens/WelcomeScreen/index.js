import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Auth from "../../services/Auth";
import { AppTitle } from "../../components/Titles";
import PrimaryButton from "../../components/PrimaryButton";

import welcomeImg from "../../assets/images/welcome-img.svg";
import "./WelcomeScreen.css";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const loadHomeScreen = useCallback(() => {
    navigate("/HomeScreen", { replace: true });
  }, [navigate]);

  const loadWelcomeScreen = useCallback(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  useEffect(() => {
    Auth.monitorAuthState(loadHomeScreen, loadWelcomeScreen);
  }, [loadHomeScreen, loadWelcomeScreen]);

  return (
    <>
      <AppTitle />
      <div className="flex column">
        <img
          src={welcomeImg}
          alt="Two people chatting"
          className="center welcome-img"
        />
        <p className="title welcome-title">Welcome</p>
        <p className="subtitle text-gray">Let us handle your links!</p>
        <PrimaryButton
          className="start-button btn-shadow"
          text="START"
          onClick={() => {
            navigate("/LoginScreen", { replace: true });
          }}
        />
      </div>
    </>
  );
};

export default WelcomeScreen;
