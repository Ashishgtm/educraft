import React,{ useEffect, useState }from 'react'
import './HomeB.css'
import { FaCircleNotch } from "react-icons/fa6";
import { Link} from 'react-router-dom';



const HomeB = () => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
          if (count < 10) {
            setCount(count + 1);
          } else {
            clearInterval(intervalId);
          }
        }, 150);
    

      const intervalId2 = setInterval(() => {
        if (count2 < 12) {
          setCount2(count2 + 1);
        } else {
          clearInterval(intervalId2);
        }
      }, 150);
      return () => {
        clearInterval(intervalId);
        clearInterval(intervalId2);
      };
    }, [count, count2]);

      

  return (

<div className="consulting-team-container">
<div className="about-us">
<div className='about'><FaCircleNotch className='iconabout' />about us </div>
   <div className='empabout'>Empowering our clients with solutions that matter</div>
   <div className='aboutpar'>Educraft Abroad Studies Pvt. Ltd. is a pioneer registered institution established in Kathmandu, registered under the Act of Nepal Government.  
At Educraft Abroad Studies, we understand that choosing the right courses and country for your study abroad experience is a pivotal decision. 
</div>
<Link to='/about'>
<button className="custom-button2">
      Read more ---
    </button></Link>
</div>

<div className="info-grid">
    <div className="info-item knowledge-marketing">
        <h3 className='infoonly'>Innovative Problem Solving</h3>
    </div>
    <div className="info-item">

    <div className="counter">
          <span>{count.toLocaleString('en-US')}</span>k
        </div>
        <p>HAPPY CLIENTS</p>
    </div>

    <div className="info-item">
       <div className="counter">
          <span>{count2}</span>
        </div>
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