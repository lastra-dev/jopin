import React from "react";
import "./Titles.css";

const Title = (props) => {
  return (
    <center>
      <p className={`fs-600 ${props.className}`}>{props.text}</p>
    </center>
  );
};

const AppTitle = (props) => {
  return (
    <center>
      <h1 className={`text-gradient-ibiza fs-600 ${props.className}`}>JOPIN</h1>
    </center>
  );
};

const SectionTitle = (props) => {
  return <p className="fs-600 section-title">{props.text}</p>;
};

export { Title, AppTitle, SectionTitle };
