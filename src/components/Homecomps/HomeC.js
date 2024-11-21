import React from 'react'
import './HomeC.css'
import { FaCircleNotch } from "react-icons/fa6";


const HomeC = () => {
  return (
  

    <div className="homec">
    <div className="homec-left">
      <img 
        src="https://images.pexels.com/photos/25950418/pexels-photo-25950418/free-photo-of-portrait-of-woman-wearing-white-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="Sample"
        className="image-homec"
      />
    </div>
    <div className='homec-right'>
    <div className='service'><FaCircleNotch className='iconservice' />our services </div>
    <div className='ourservices'>Our Services.</div>
    <div className='fewwords'>Few words about</div>    
    <div className='fewwords'> our services.</div>

    </div>
 
  </div>
  )
}

export default HomeC