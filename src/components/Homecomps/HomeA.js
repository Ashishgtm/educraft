import React, { useState, useEffect, useRef } from 'react';
import './HomeA.css';
import imageone from './girl.jpg';
import akrisha from './akrisha.jpg';
import { FaCircleNotch } from "react-icons/fa6";
import { gsap } from 'gsap';

const HomeA = () => {
  const [currentImage] = useState(0);
  const images = [imageone, akrisha];
  const carouselRef = useRef(null);
  const welcomeRef = useRef(null);
  const welcomeTextRefs = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current && welcomeRef.current) {
      gsap.fromTo(carouselRef.current, 
        { x: '100%', opacity: 0 }, 
        { x: '0%', opacity: 1, duration: 3, ease: 'power2.out' }
      ); 

      gsap.fromTo(welcomeTextRefs.current, 
        { x: '-100%', opacity: 0 }, 
        { x: '0%', opacity: 1, duration: 1.5, ease: 'power2.out', stagger: 0.2 } 
      );

      gsap.fromTo(buttonRef.current, 
        { x: '100%', opacity: 0 }, 
        { x: '0%', opacity: 1, duration: 2, ease: 'power2.out', delay: 1.8 } 
      );
    }
  }, []);

  return (
    <div className='HomeAfirst'>
      <div className='homeAcontent'>
        <div className='welcomepart' ref={welcomeRef}> 
          <div className='welcome-start' ref={(el) => (welcomeTextRefs.current[0] = el)}> 
            <FaCircleNotch className='iconwelcome' />welcome 
          </div>
          <span className='educrafthead' ref={(el) => (welcomeTextRefs.current[1] = el)}>EduCraft </span>
          <span className='educraftabroad' ref={(el) => (welcomeTextRefs.current[2] = el)}>Abroad</span>
          <span className='educrafthead' ref={(el) => (welcomeTextRefs.current[3] = el)}>Studies </span>
          <div className='unlock'>Unlock Your Global Potential with Educraft Abroad Studies.</div>
          <button className="custom-button" >Apply Now</button> 
        </div>
        <div className="carousel-container" >
        <div className="carousel-wrapper">
        <div className="green-background"></div> 

          <div
            className="carousel-image"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
          ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeA;