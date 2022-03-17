import React from "react";
import NavBar from "../../components/NavBar";
import welcomeImg from "../../assets/images/welcome-img.svg";

const WelcomeScreen = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <img
          src={welcomeImg}
          alt="Welcome"
          className="center-img"
          style={{ marginTop: "50px" }}
        />
        <div className="title">
          Bienvenido
        </div>
        <div className="subtitle">
          Basta de pedir enlaces, deja que lo <br></br> hagamos por ti.
        </div>
        <button
          className="common-btn btn-shadow fs-500"
          style={{
            padding: "10.5px 73.5px 10.5px 73.5px",
            marginLeft: "69px",
            marginRight: "69px",
            marginTop: "10px",
          }}
        >
          COMENZAR
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
