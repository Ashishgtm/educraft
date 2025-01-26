import React, { useState, useEffect }  from 'react'
import './HomeA.css'
import imageone from './imageone.jpg'
import secondimage from './imagetwo.jpg'
import akrisha from './akrisha.jpg'
import thirdimage from './imagethird.jpg'
import { FaCircleNotch } from "react-icons/fa6";

const HomeA = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    imageone,
    akrisha,
    secondimage,
    thirdimage,
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);


  return (
<div className='HomeAfirst'>
    <div className='homeAcontent'>
<div className='welcomepart'> 
    <div className='welcome'><FaCircleNotch className='iconwelcome' />welcome </div>
    <span className='educrafthead'>EduCraft </span>
    <span className='educraftabroad'>Abroad</span>
    <span className='educrafthead'>Studies </span>
    <div className='unlock'>Unlock Your Global Potential with Educraft Abroad Studies.</div>

    <button className="custom-button">
      Apply Now
    </button>

</div>
<div className="carousel-container">
      <div
        className="carousel-image"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>
    </div>
   </div>
</div>
)
}

export default HomeA