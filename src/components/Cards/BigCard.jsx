import React, { useEffect, useState } from "react";
import "./bigcard.css";
import { Link } from "react-router-dom";

const BigCard = ({ sem, heading1, heading2 }) => {
  
  const [path, setPath] = useState({ prac: "", pro: "" });
  let page;
  let url = window.location.href;
  page = url.slice(7);
  page = page.split("/");
  useEffect(() => {
    if (page[1] === "firstyear") {
      setPath({ prac: "/fypracticalsem1", pro:"/fyprojectsem1" });
    }
    if (page[1] === "secondyear") {
      setPath({ prac: "/sypracticalsem1", pro:"/syprojectsem1" });
    }
  });

  return (
    <div>
      <div className="div1">
        <p>{sem}</p>
        <div className="smallcard-collection">
          <Link to={`/${page[1]}${path.prac}`} style={{ color: "black" }}>
            <div className="smallcard">
              <p>{heading1}</p>
            </div>
          </Link>
          <Link to={`/${page[1]}${path.pro}`} style={{color:"black"}}>
            <div className="smallcard">
              <p>{heading2}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
