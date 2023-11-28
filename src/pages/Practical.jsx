import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import "./practical.css";
import { card5img1, card5img2, profile } from "../constant/Images";
import {
  praclogo,
  home,
  secondyear,
  thirdyear,
  register,
  project,
} from "../constant/Images";
import Navbar from "../components/Navbar"
import CardType3 from "../components/Cards/CardType3";
import CardType4 from "../components/Cards/CardType4";
import CardType5 from "../components/Cards/CardType5";

const Practical = () => {
  let subName = window.location.href.split("/").slice(-1).toString();

  const [toggle, setToggle] = useState(false);

  return (
    <main>
      <nav className="nav-active"><Navbar/></nav>
      <div className="prac">
        
        {/* {toggle && */}

        <div className="app__prac-leftSection ">
          <div className="app__prac-leftSection_logo">
            <img src={praclogo} alt="" />
          </div>
          <div className="app__prac-leftSection_navlist">
            <li className="app__prac-leftSection-navlink">
              <img src={home} alt="" /> <a href="/">Home</a>
            </li>

            <li className="app__prac-leftSection-navlink">
              <img src={project} alt="" /> <a href="/">Project</a>
            </li>

            <li className="app__prac-leftSection-navlink">
              <img src={register} alt="" /> <a href="/">Register</a>
            </li>

            <li className="app__prac-leftSection-navlink">
              <img src={secondyear} alt="" /> <a href="/">2nd Year</a>
            </li>

            <li className="app__prac-leftSection-navlink">
              <img src={thirdyear} alt="" /> <a href="/">3rd Year</a>
            </li>
          </div>

          <CardType3 />
        </div>
        {/* } */}
        <div className="middleSection flex__start">
          <div className="heading ">
            <p> PRACTICAL FILES ({subName.toUpperCase()})</p>
          </div>

          <div className="cards-collections ">            
              <CardType4 no={"1"} />
              <CardType4 no={"2"} />
              <CardType4 no={"3"} />
              <CardType4 no={"4"} />
              <CardType4 no={"5"} />
              <CardType4 no={"6"} />
              <CardType4 no={"7"} />
              <CardType4 no={"8"} />
              <CardType4 no={"9"} />
              <CardType4 no={"10"} />
          </div>
        </div>

        <div className="endsection">
          <div className="photo flex__end ">
            <img src={profile} alt="Your Profile" />
            <RxHamburgerMenu
              onClick={() => {
                setToggle(true);
              }}
              style={{ fontSize: "3rem", color: "white", display: "none" }}
            />
            {toggle && (
              <AiOutlineClose
                style={{ fontSize: "3rem", color: "white", display: "none" }}
                onClick={() => {
                  setToggle(false);
                }}
              />
            )}
          </div>

          <div className="rightsection">
            <CardType5
              mainheading="Visit! "
              subHeading="Our Lastest Blog "
              link={card5img1}
            />
            <CardType5
              mainheading="Explore!"
              subHeading="The resource Page "
              link={card5img2}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Practical;
