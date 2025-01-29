import React from "react";
import "./AboutbodyC.css";
import director from "./images/director.jpg";

const AboutbodyC = () => {
  return (
    <div>
                <h2 className="message">Message From Director</h2>

    <div className="about-container">
      <div className="about-image">
        <img src={director} alt="About Us" />
      </div>
      <div className="about-text">
        <h2>Hello, I'm <span className="nischal">Nischal</span>  Panta</h2>
        <p>
        Welcome to our Educraft Abroad Studies! We are committed to empowering you to achieve your dreams. Our team 
        of experts is here to provide personalized guidance, global opportunities, and unwavering support on your 
        educational journey. Together, let’s unlock your potential and turn your aspirations into reality.<br/><br/>
        "As a Consultancy Director, my goal is to help students unlock their full potential and pave the way for their future success. The journey ahead might seem challenging, but with the right guidance, resources, and mindset, there's no limit to what you can achieve. Always remember, success begins with knowledge, and we are here to help you every step of the way."


        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutbodyC;
