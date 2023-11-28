import React from "react";
import "./bigcard.css";
import { rateus } from "../../constant/Images";
const CardType3 = () => {
  return (
    <div className="cardtype3 ">
      <p className="cardtype3_text">Enjoying our Service!!</p>
      <div className="rateus">
        <img src={rateus} alt="" width={170}/>
      </div>
      <p className="cardtype3_text">Rate us!!</p>
    </div>
  );
};

export default CardType3;
