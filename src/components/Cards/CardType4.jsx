import React from "react";
import "./bigcard.css";
import { Link } from "react-router-dom";
const CardType4 = ({ no }) => {
  const getNumber = async()=> {
    let subName = window.location.href.split("/").slice(-1).toString();
    await fetch("http://localhost:8000/getpracticalinfo", {
      method: "POST",
      body: JSON.stringify({
        no: no,
        sub: subName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).catch((err) => console.log(err));
    console.log(no);
  }
  return (
    <Link onClick={getNumber} to={"http://localhost:8000/post"}>
      <div className="cardtype4">
        <div className="cardtype4-div">
          <p className="innertext">PRACTICAL</p>
          <p className="no"> {no}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardType4;
