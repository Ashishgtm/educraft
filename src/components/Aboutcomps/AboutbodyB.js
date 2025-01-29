import React from "react";
import "./AboutbodyB.css";
import myvideo from './video/tokyo.mp4'

const AboutbodyB = () => {
  return (
    <div className="video-container">
 <video autoPlay muted loop width="600">
            <source src={myvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AboutbodyB;
