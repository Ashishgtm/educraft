import React, { useLayoutEffect } from "react";
import Header from "../Header/Header";
import "../Contactcomps/contactheader.css";
import "./ContactSection";


import { gsap } from "gsap";

import Footer from '../Footer/Footer'
import ContactSection from "./ContactSection";

const Contactheader = () => {
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
            src="https://i.pinimg.com/736x/74/ef/02/74ef02ec5f8d291933d0e38bdf448838.jpg"
            alt="book-reading"
            className="about-img"
          />
        </div>
        <div className="about-header">
          <h1>CONTACT US</h1>
          <h3>Let's Explore Your Study Abroad Dreams !</h3>
        </div>
      </div>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default Contactheader;
