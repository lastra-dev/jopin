import React from "react";

import Auth from "../../services/Auth";
import Back from "../../components/Back";
import { AppTitle, Title } from "../../components/Titles";
import SecondaryButton from "../../components/SecondaryButton";

import "./VerifictaionScreen.css";
import VerificationImg from "../../assets/images/verification-img.svg";

const VerificationScreen = () => {
  return (
    <>
      <div className="flex verification-screen-navbar">
        <Back onClick={Auth.logout} />
        <AppTitle className="verification-app-title" />
      </div>
      <div className="flex column verification-body">
        <Title className="fw-500" text="Email Verification" />
        <p className="subtitle text-gray">
          To continue using Jopin, please verify<br></br> your email address:
        </p>
        <p className="subtitle fw-500">email@example.com</p>
        <img
          alt="A lady receiving a package"
          className="center verification-img"
          src={VerificationImg}
        />
        <div className="flex column resend-section">
          <p className="subtitle text-gray">Haven't received an email yet?</p>
          <SecondaryButton
            onClick={Auth.sendVerificationEmail}
            className="verification-btn pointer"
            text="RESEND VERIFICATION EMAIL"
          />
        </div>
      </div>
    </>
  );
};

export default VerificationScreen;
