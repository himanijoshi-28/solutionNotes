import React, { useEffect, useState } from "react";
import "./bigcard.css";
import { Link } from "react-router-dom";

const BigCard = ({ sem, heading1, heading2 }) => {
  const [path, setPath] = useState({ prac: "", pro: "" });
  let url = window.location.href.split("/").slice(-1).toString();

  useEffect(() => {
    if (url === "firstyear") {
      if (sem === "Sem1") {
        setPath({ prac: "/fypracticalsem1", pro: "/fyprojectsem1" });
      }
      else if(sem === "Sem2"){
        setPath({ prac: "/fypracticalsem2", pro: "/fyprojectsem2" });
      }
    }
    if (url === "secondyear") {
      if (sem === "Sem3") {
      setPath({ prac: "/sypracticalsem3", pro: "/syprojectsem3" });
      }
      else if(sem === "Sem4"){
        setPath({ prac: "/sypracticalsem4", pro: "/syprojectsem4" });
      }
    }
    else if(sem === "Sem2"){}
  },[setPath, url, sem]);

  return (
      <div className="div1">
        <p>{sem}</p>
        <div className="smallcard-collection">
          <Link to={`/${url}${path.prac}`} style={{ color: "black" }}>
            <div className="smallcard">
              <p>{heading1}</p>
            </div>
          </Link>
          <Link to={`/${url}${path.pro}`} style={{ color: "black" }}>
            <div className="smallcard">
              <p>{heading2}</p>
            </div>
          </Link>
        </div>
      </div>
  );
};

export default BigCard;
