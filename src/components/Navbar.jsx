import React, { useState } from "react";
import { logo, profile, heroImg } from "../constant/Images";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false);
  return (
    <nav>
      <div className="app__navbar flex__spacebtn">
        <div className="app__navbar-img flex__start">
          <img src={logo} alt="SNlogo" />
        </div>
        <div className="app__navbar-links flex__spacebtn ">
          <li className="app__navbar-links_link flex__center">
            <a href="#">Home</a>
          </li>
          <li className="app__navbar-links_link">
            <a href="#">About</a>
          </li>
          <li className="app__navbar-links_link">
            <a href="#">Services</a>
          </li>
          <li className="app__navbar-links_link">
            <a href="#">Guide</a>
          </li>
        </div>
        <div className="app__navbar-profile flex__end">
          <img src={profile} alt="Your Profile" />
        </div>

        <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff "
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {/* {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />

            <ul className="app__navbar-smallscreen_links">
              <li >
                <a href="#">Home</a>
              </li>
              <li >
                <a href="#">About</a>
              </li>
              <li >
                <a href="#">Menu</a>
              </li>
              <li >
          <a href="#">Awards</a>
        </li>
              <li >
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        )} */}

      </div>
      </div>
    </nav>
  );
};

export default Navbar;
