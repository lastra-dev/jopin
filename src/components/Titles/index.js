import React from "react";
import "./Titles.css";

const Title = (props) => {
  return (
    <center>
      <p className={`fs-600 ${props.className}`}>{props.text}</p>
    </center>
  );
};

const AppTitle = () => {
  return (
    <center>
      <h1 className="text-amin fs-600">JOPIN</h1>
    </center>
  );
};

const SectionTitle = (props) => {
  return <p className="fs-600 section-title">{props.text}</p>;
};

export { Title, AppTitle, SectionTitle };
