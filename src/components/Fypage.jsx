import React from "react";
import Navbar from "./Navbar";
import "./fypage.css";
import SecondCard from "./Cards/SecondCard";
import BigCard from './Cards/BigCard';
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
              <BigCard sem="Sem2" heading1="Practicals" heading2="Projects"/>
            </div>
          </div>
        </div>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="svg2"
        width="226"
        height="237"
        viewBox="0 0 226 237"
        fill="none"
      >
        <path
          d="M173.603 136.78C314.75 402.505 -116.84 50.4576 -116.84 50.4576L-64.9894 -124L225.454 -37.6773C218.497 -25.2417 32.4566 -128.944 173.603 136.78Z"
          fill="#F1924D"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="svg1"
        viewBox="0 0 300 234"
        fill="none"
      >
        <path
          d="M68.2273 174.852C-179.925 324.873 336.822 254.682 336.822 254.682L388.673 80.2239L120.078 0.394615C118.888 14.5441 316.379 24.8317 68.2273 174.852Z"
          fill="#F1924D"
        />
      </svg>
      </div>
    </>
  );
};

export default Fypage;
