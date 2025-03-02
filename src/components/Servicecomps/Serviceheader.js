import React, { useLayoutEffect } from "react";
import Header from "../Header/Header";
import "../Servicecomps/Serviceheader.css";



import { gsap } from "gsap";

import Footer from '../Footer/Footer'
import ServiceSection from "./ServiceSection";

const Serviceheader = () => {
  useLayoutEffect(() => {
    let tl = gsap.timeline();

    tl.fromTo(
      ".about-img",
      { x: "-100vw", opacity: 0 }, // Start from left
      { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" } // End at center
    );

    tl.fromTo(
      ".about-header",
      { x: "100vw", opacity: 0 }, // Start from right
      { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
      "-=1.3" // Overlapping animation
    );
    tl.fromTo(
      ".about-header h3",
      { x: "100vw", opacity: 0 }, // Start from right
      { x: 0, opacity: 1, duration: 2, ease: "power3.out" },
      "-=1.3" // Overlapping animation
    );
  }, []);

  return (
    <div>
      <Header />
      <div className="top-section">
        <div className="header-img">
          <img
            src="https://i.pinimg.com/736x/17/35/30/1735302272c731a86e9153dc7b8ec773.jpg"
            alt="book-reading"
            className="about-img"
          />
        </div>
        <div className="about-header">
          <h1>SERVICES</h1>
          <h3>Smart solutions for a brighter future !</h3>
        </div>
      </div>
      <ServiceSection/>
      <Footer/>
    </div>
  );
};

export default Serviceheader;
