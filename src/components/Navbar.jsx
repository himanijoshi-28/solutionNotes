import React, { useState } from "react";
import { logo } from "../constant/Images";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav>
      <div className="app__navbar flex__spacebtn">
        <div className="app__navbar-img flex__start">
          <img src={logo} alt="SNlogo" />
        </div>
        <div className="app__navbar-links flex__spacebtn ">
          <li className="app__navbar-links_link flex__center">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="app__navbar-links_link">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="app__navbar-links_link">
            <NavLink to={"/"}>Services</NavLink>
          </li>
          <li className="app__navbar-links_link">
            <NavLink to={"/"}>Guide</NavLink>
          </li>
        </div>

        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="#fff "
            fontSize={27}
            onClick={() => setToggleMenu(!toggleMenu)}
          />

          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom" >
              <ul className="app__navbar-smallscreen_links">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <hr/>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <hr/>
                <li>
                  <Link to={"/"}>Service</Link>
                </li>
                <hr/>
                <li>
                  <Link to={"/"}>Guide</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;