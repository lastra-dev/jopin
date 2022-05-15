import React from "react";
import { AppTitle } from "../../components/Titles";
import welcomeImg from "../../assets/images/welcome-img.svg";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import "./WelcomeScreen.css";

const WelcomeScreen = () => {
  let navigate = useNavigate();

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
