import React from "react";
import "./Titles.css";

const Title = (props) => {
  return (
    <div>
      <center>
        <p className={`fs-600 ${props.className}`}>{props.text}</p>
      </center>
    </div>
  );
};

const AppTitle = () => {
  return (
    <div>
      <center>
        <h1 className="text-gradient-orange fs-600">JOPIN</h1>
      </center>
    </div>
  );
};

const SectionTitle = (props) => {
  return (
    <div>
      <p className='fs-600 section-title'>
        {props.text}
      </p>
    </div>
  );
};

export { Title, AppTitle, SectionTitle };
