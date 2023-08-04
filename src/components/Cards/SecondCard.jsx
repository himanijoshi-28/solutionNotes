import React from "react";
import "../Cards/secondcard.css";
const SecondCard = ({ message }) => {
  return (
    <div>
      <div className="divtwo flex__center">
        <div className="smallcardtwo ">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
