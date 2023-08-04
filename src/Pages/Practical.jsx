import React, { useState } from "react";
import {RxHamburgerMenu} from 'react-icons/rx';
import {AiOutlineClose} from 'react-icons/ai';
import "./practical.css";
import { card5img1,card5img2,profile } from '../constant/Images';
import {
  praclogo,
  home,
  secondyear,
  thirdyear,
  register,
  project,
} from "../constant/Images";
import CardType3 from "../components/Cards/CardType3";
import CardType4 from "../components/Cards/CardType4";
import CardType5 from "../components/Cards/CardType5";

const Practical = () => {
  const [toggle,setToggle]=useState(false);
  return (
    <>
    <div className="prac">

      {/* {toggle && */}

      

      <div  className="app__prac-leftSection ">
        <div className="app__prac-leftSection_logo">
          <img src={praclogo} alt="" />
        </div>
        <div className="app__prac-leftSection_navlist">
          <li className="app__prac-leftSection-navlink">
            <img src={home} alt="" /> <a href="">Home</a>
          </li>

          <li className="app__prac-leftSection-navlink">
            <img src={project} alt="" /> <a href="">Project</a>
          </li>

          <li className="app__prac-leftSection-navlink">
            <img src={register} alt="" /> <a href="">Register</a>
          </li>

          <li className="app__prac-leftSection-navlink">
            <img src={secondyear} alt="" /> <a href="">2nd Year</a>
          </li>

          <li className="app__prac-leftSection-navlink">
            <img src={thirdyear} alt="" /> <a href="">3rd Year</a>
          </li>
        </div>

        <CardType3 />
      </div>
  {/* } */}
      <div className="middleSection flex__start">
        <div className="heading ">
          <p> PRACTICAL FILES (#SUBJECT NAME)</p>
        </div>

        <div className="cards-collections ">
          <CardType4 no={"01"} />
          <CardType4 no={"02"} />
          <CardType4 no={"03"} />
          <CardType4 no={"04"} />
          <CardType4 no={"05"} />
          <CardType4 no={"06"} />
          <CardType4 no={"07"} />
          <CardType4 no={"08"} />
           <CardType4 no={"09"} />
          <CardType4 no={"10"} />
        </div>
      </div>

      <div className="endsection">
        <div className="photo flex__end ">
          <img src={profile} alt="Your Profile" />
          <RxHamburgerMenu onClick={()=>{
            setToggle(true);
          }} 
          style={{ fontSize: '3rem' ,color:'white', display:'none'}} 
                     />
           {toggle &&<AiOutlineClose style={{ fontSize: '3rem' ,color:'white', display:'none'}} onClick={()=>{
          setToggle(false)
           }}/> }          
            
                    
        </div>
    
        <div className="rightsection">
           <CardType5 mainheading="Visit! " subHeading="Our Lastest Blog " link={card5img1}/>
           <CardType5 mainheading="Explore!" subHeading="The resource Page " link={card5img2}/>
        </div>
      </div>
      </div>
      </>
  );
};

export default Practical;
