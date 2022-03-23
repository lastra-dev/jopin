import React from "react";
import NavBar from "../../components/NavBar";
import welcomeImg from "../../assets/images/welcome-img.svg";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import "./WelcomeScreen.css";

const WelcomeScreen = () => {
  let navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <div className="flex column">
        <img
          src={welcomeImg}
          alt="Two people chatting"
          className="center welcome-img"
        />
        <p className="title welcome-title">Bienvenido</p>
        <p className="subtitle text-gray">
          Basta de pedir enlaces, deja que lo<br></br>hagamos por ti.
        </p>
        <PrimaryButton
          className="start-button"
          text="COMENZAR"
          onClick={() => {
            navigate("/LoginScreen", { replace: true });
          }}
        />
      </div>
    </div>
  );
};

export default WelcomeScreen;
