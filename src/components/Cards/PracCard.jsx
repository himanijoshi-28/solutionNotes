import React from "react";
import "./bigcard.css";
import { Link } from "react-router-dom";

const PracCard = ({ subject }) => {
  const routePractical = () => {
    if(subject){
      const sub = subject.toLowerCase();
      return `/firstyear/fypracticalsem1/${sub}`
    }
  };
  return (
    <>
      <Link className="prac-card" to={routePractical()}>
        <p className="praccard-text">{subject}</p>
      </Link>
    </>
  );
};

export default PracCard;
