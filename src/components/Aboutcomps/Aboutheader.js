import React, { useLayoutEffect } from "react";
import Header from "../Header/Header";
import "../Aboutcomps/aboutheader.css";
import { gsap } from "gsap";
import AboutbodyA from "./AboutbodyA";
import AboutbodyB from "./AboutbodyB";
import AboutbodyC from "./AboutbodyC";
import Footer from '../Footer/Footer'

const Aboutheader = () => {
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
            src="https://i.pinimg.com/736x/56/a7/57/56a75701cc783f9790e782db303041be.jpg"
            alt="book-reading"
            className="about-img"
          />
        </div>
        <div className="about-header">
          <h1>ABOUT US</h1>
          <h3>Taking you where dreams are made true</h3>
        </div>
      </div>
      <AboutbodyA/>
      <AboutbodyB/>
      <AboutbodyC/>
      <Footer/>
    </div>
  );
};

export default Aboutheader;
