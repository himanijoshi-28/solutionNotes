import React from "react";
import "./about.css";
import { about_img1, about_img2 } from "../constant/Images";
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <main className="main">
      <Navbar />
      <div className="about">
        <div className="section1">
          <div className="about_content">
            <div className="about_heading"> Our Mission</div>
            <div className="about_para">
              Our mission is to empower students by providing a comprehensive
              and accessible platform for note-taking, enabling them to enhance
              their learning, improve academic performance, and achieve their
              educational goals.
            </div>
          </div>
          <img className="about_img" src={about_img1} alt="" />
        </div>

        <div className="section2">
          <img className="about_img" src={about_img2} alt="" />
          <div className="about2_content">
            <div className="about_heading"> Our Vision</div>
            <div className="about_para">
              We strive to create a community where students can easily exchange
              ideas, access high-quality notes across various subjects, and
              unlock their full academic potential.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
