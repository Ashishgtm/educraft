import React from 'react'
import './HomeB.css'
import { FaCircleNotch } from "react-icons/fa6";

const HomeB = () => {
  return (

<div className="consulting-team-container">
<div className="about-us">
<div className='about'><FaCircleNotch className='iconabout' />about us </div>
   <div className='empabout'>Empowering our clients with solutions that matter</div>
   <div className='aboutpar'>Educraft Abroad Studies Pvt. Ltd. is a pioneer registered institution established in Kathmandu, registered under the Act of Nepal Government.  
At Educraft Abroad Studies, we understand that choosing the right courses and country for your study abroad experience is a pivotal decision. 
</div>
<button className="custom-button2">
      Read more ---
    </button>
</div>

<div className="info-grid">
    <div className="info-item knowledge-marketing">
        <h3 className='infoonly'>Innovative Problem Solving</h3>
    </div>
    <div className="info-item">
        <h2>13k</h2>
        <p>HAPPY CLIENTS</p>
    </div>
    <div className="info-item">
        <h2>12</h2>
        <p>YEARS OF EXPERIENCE</p>
    </div>
    <div className="info-item knowledge-marketing2">
        <h3 className='infoonly'>Expert Financial Analysis</h3>
    </div>
</div>
</div>
 )
}

export default HomeB