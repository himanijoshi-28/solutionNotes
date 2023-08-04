import React from "react";
import "./cardtype3.css";
import { rateus } from "../../constant/Images";
const CardType3 = () => {
  return (
    <div className="cardtype3 ">
      <p className="cardtype3_text">Enjoying our Service!!</p>
      <div className="rateus">
        <img src={rateus} alt="" />
      </div>
      <p className="cardtype3_text">Rate us!!</p>
    </div>
  );
};

export default CardType3;
