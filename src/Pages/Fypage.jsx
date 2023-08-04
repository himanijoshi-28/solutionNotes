import React from "react";
import Navbar from "../components/Navbar";
import "./fypage.css";
import SecondCard from "../components/Cards/SecondCard";
import BigCard from '../components/Cards/BigCard';
// import Sec from "./Cards/";

const Fypage = () => {
  return (
    <>
      <div className="bg">
        <Navbar />
        <div className="app2__header ">
          <div className="heading flex__center">
            <div className="app2__header-heading ">
              <p className="app2__headeer-heading_Text">First Year</p>
            </div>
          </div>

          <div className="app2__section2">
            <div className="cards flex__spaceeven">
               
              <BigCard sem="Sem1" heading1="Practicals" heading2="Projects"/> 
              <SecondCard message="A Guide to 1st Year...."/>
              <BigCard sem="Sem3" heading1="Practicals" heading2="Projects"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fypage;
