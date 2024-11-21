import React from 'react'
import './HomeA.css'
import akrisha from './akrisha.jpg'
import { FaCircleNotch } from "react-icons/fa6";

const HomeA = () => {
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
<div className='imagepart'> 
<img src={akrisha} alt="akrisha" className='imagefirst' />
</div>
   </div>
</div>
)
}

export default HomeA