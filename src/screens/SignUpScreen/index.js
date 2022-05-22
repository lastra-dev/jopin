import React, { useState } from "react";

import Auth from "../../services/Auth";
import Back from "../../components/Back";
import Input from "../../components/Input";
import { AppTitle } from "../../components/Titles";
import SignUpImg from "../../assets/images/signup-img.svg";
import PrimaryButton from "../../components/PrimaryButton";

import "./SignUpScreen.css";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  window.onkeydown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    const errMsg = await Auth.createAccount(email, password, passwordConfirm);
    if (errMsg) {
      setErrorMsg(errMsg);
    }
    Auth.sendVerificationEmail();
  };

  return (
    <>
      <div className="flex sign-up-screen-navbar">
        <Back />
        <AppTitle className="appTitle-margin" />
      </div>
      <div className="flex column">
        <img
          width="180px"
          src={SignUpImg}
          alt="A person sitting on the window"
          className="center sign-up-img-margin"
        />
        <div className="text-center">
          <Input
            spellCheck="false"
            autoComplete="off"
            autoFocus="on"
            label="Email"
            onChange={(e) => {
              handleChange(e, setEmail);
            }}
          />
          <Input
            label="Password"
            type="password"
            className="mt-8"
            onChange={(e) => {
              handleChange(e, setPassword);
            }}
          />
          <Input
            label="Confirm Password"
            type="password"
            className="mt-8"
            onChange={(e) => {
              handleChange(e, setPasswordConfirm);
            }}
          />
          <p className="text-red mt-8">{errorMsg}</p>
          <PrimaryButton
            className="login-btn-spacing btn-shadow login-btn"
            text="SIGN UP"
            onClick={handleSubmit}
          />
          <p className="fs-300 text-gray">
            By signing up you're agreeing to<br></br> our
            <span className="text-ibiza pointer"> Terms of Service</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpScreen;
