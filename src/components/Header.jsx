import React from "react";
import { heroImg } from "../constant/Images";
import "./head.css";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ backgroundColor: "var(--bg)" }}>
      <Navbar />
      <div className="app__header flex__spacebtn">
        <div className="app__header-content">
          <p className="app__header-content-block p1 flex__start ">
            Exceptional
          </p>
          <p className="app__header-content-block p2 flex__start ">
            Student Support for
          </p>
          <p className="app__header-content-block p3 flex__start ">
            I.T. Community
          </p>
          <div className="app__header-content_years-block">
            <Link to={'/firstyear'} style={{color:'black'}}>
              <div className="app__header-content_years p1-bg flex__center">
                First Year
              </div>
            </Link>
            <Link to={'/secondyear'} style={{color:'black'}}>
              <div className="app__header-content_years p2-bg flex__center">
                Second Year
              </div>
            </Link>
            <Link to={'/firstyear'} style={{color:'black'}}>
              <div className="app__header-content_years p3-bg flex__center">
                Third Year
              </div>
            </Link>
          </div>
        </div>
        <div className="app__header-img">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
