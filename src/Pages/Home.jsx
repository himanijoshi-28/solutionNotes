import React from "react";
import { heroImg } from "../constant/Images";
import './head.css';
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="app__header flex__spacebtn">
        <div className="app__header-content">
          <p className="app__header-content-block p1 flex__start ">Exceptional</p>
          <p className="app__header-content-block p2 flex__start ">Student Support for</p>
          <p className="app__header-content-block p3 flex__start ">I.T. Community</p>
          
          <div className="app__header-content_years-block">
         <div className="app__header-content_years p1-bg flex__center">First Year</div>
         <div className="app__header-content_years p2-bg flex__center" >Second Year</div>
         <div className="app__header-content_years p3-bg flex__center">Third Year</div>
          </div>
        </div>
        <div className="app__header-img">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
