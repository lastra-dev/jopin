import React from "react";
import NavBar from "../../components/NavBar";
import welcomeImg from "../../assets/images/welcome-img.svg";
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  return (
    <div>
      <NavBar />
      <div className="flex column">
        <img
          src={welcomeImg}
          alt="Welcome"
          className="center-img welcome-img"
        />
        <p className="title welcome-title">Bienvenido</p>
        <p className="subtitle text-gray">
          Basta de pedir enlaces, deja que lo<br></br>hagamos por ti.
        </p>
        <button className="primary-btn btn-shadow fs-500 start-button">COMENZAR</button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
