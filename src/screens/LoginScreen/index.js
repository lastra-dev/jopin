import React, { useState } from "react";
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
  const [errorMsg, setErrorMsg] = useState("");

  window.onkeydown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    const errMsg = await Auth.signIn(email, password);
    if (errMsg) {
      setErrorMsg(errMsg);
    }
  };

  const loadSignUpScreen = () => {
    navigate("/SignUpScreen");
  }

  return (
    <>
      <AppTitle />
      <div className="flex column">
        <img
          height="280px"
          src={LoginImg}
          alt="A person sitting on the window"
          className="center"
        />
        <div className="text-center">
          <Input
            spellCheck="false"
            autoComplete="off"
            autoFocus="on"
            label="Email"
            type="email"
            onChange={(e) => { handleChange(e, setEmail) }}
          />
          <Input
            label="Password"
            type="password"
            className="mt-8"
            onChange={(e) => { handleChange(e, setPassword) }}
          />
          <p className="text-red mt-8">{errorMsg}</p>
          <PrimaryButton
            className="login-btn-spacing btn-shadow login-btn"
            text="SIGN IN"
            onClick={handleSubmit}
          />
          <p className="subtitle text-gray">Don't have an account?
            <span className="text-ibiza pointer" onClick={loadSignUpScreen}> Register</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
