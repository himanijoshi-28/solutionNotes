import React from "react";
import Navbar from "../components/Navbar";
import "../components/fypage.css";
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
              <p className="app2__headeer-heading_Text">Second Year</p>
            </div>
          </div>

          <div className="app2__section2">
            <div className="cards flex__spaceeven">
               
              <BigCard sem="Sem3" heading1="Practicals" heading2="Projects"/> 
              <SecondCard message="A Guide to 2nd Year...."/>
              <BigCard sem="Sem4" heading1="Practicals" heading2="Projects"/>
            </div>
          </div>
        </div>
        <svg
        className="sy_svg1"
        viewBox="0 0 104 173"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-41 39C-41 14.1472 -20.8528 -6 4 -6H20C66.3919 -6 104 31.6081 104 78V173H-41V39Z"
          fill="#9475F4"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="sy_svg3"
        viewBox="0 0 168 261"
        fill="none"
      >
        <path
          d="M171.902 70C171.902 108.66 219.372 333 171.902 333C124.433 333 0 108.66 0 70C0 31.3401 38.4817 0 85.9512 0C133.421 0 171.902 31.3401 171.902 70Z"
          fill="#FF9A62"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="sy_svg2"
        viewBox="0 0 425 308"
        fill="none"
      >
        <path
          d="M158.97 16.5724C175.198 -0.543724 201.181 -3.99101 221.311 8.30119L317.47 67.0189L424.121 212.242L270.972 373.769L-12.8216 300.264L30.204 159.974C32.4679 152.593 36.4104 145.836 41.7226 140.233L158.97 16.5724Z"
          fill="#07A1CE"
        />
      </svg>
      </div>
    </>
  );
};

export default Fypage;
