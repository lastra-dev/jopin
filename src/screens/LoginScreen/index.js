import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Auth from "../../services/Auth";
import Input from "../../components/Input";
import { AppTitle } from "../../components/Titles";
import LoginImg from "../../assets/images/login-img.svg";
import PrimaryButton from "../../components/PrimaryButton";

import "./LoginScreen.css";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loadHomeScreen = useCallback(() => {
    navigate("/HomeScreen", { replace: true });
  }, [navigate]);

  const loadSignIn = useCallback(() => {
    navigate("/LoginScreen", { replace: true });
  }, [navigate]);

  useEffect(() => {
    Auth.monitorAuthState(loadHomeScreen, loadSignIn);
  }, [loadHomeScreen, loadSignIn]);

  const handleChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    await Auth.signIn(email, password);
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
        <div className="text-center">
          <Input
            spellCheck="false"
            autoComplete="off"
            autoFocus="on"
            label="Email"
            onChange={(e) => { handleChange(e, setEmail) }}
          />
          <Input
            label="Password"
            type="password"
            className="mt-8"
            onChange={(e) => { handleChange(e, setPassword) }}
          />
          <PrimaryButton
            className="login-btn-spacing btn-shadow login-btn"
            text="SIGN IN"
            onClick={handleSubmit}
          />
          <p className="subtitle text-gray"></p>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
