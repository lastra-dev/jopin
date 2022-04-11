import React from "react";
import { AppTitle } from "../../components/Titles";
import LoginImg from "../../assets/images/login-img.svg";
import PrimaryButton from "../../components/PrimaryButton";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import "./LoginScreen.css";

const LoginScreen = () => {
  let navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/HomeScreen", { replace: true });
  };

  return (
    <>
      <AppTitle />
      <div className="flex column">
        <img
          src={LoginImg}
          alt="A person sitting on the window"
          className="center login-img-margin"
        />
        <form onSubmit={handleSubmit} className="text-center">
          <Input
            name="username"
            spellCheck="false"
            autoComplete="off"
            autoFocus="on"
            label="Usuario"
          />
          <Input
            name="password"
            label="Contraseña"
            type="password"
            className="mt-8"
          />
          <PrimaryButton
            className="login-btn-spacing btn-shadow"
            text="INICIAR SESIÓN"
          />
          <p className="subtitle text-gray">
            Ingresa utilizando tu cuenta IEST.
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
