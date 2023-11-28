import React from "react";
import "./bigcard.css";
const SecondCard = ({ message }) => {
  return (
      <div className="divtwo flex__center">
        <div className="smallcardtwo ">
          <p>{message}</p>
        </div>
      </div>
  );
};

export default SecondCard;
