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
    <div className='fewwords'>We Don’t Just Guide Your Journey; We Walk It With You.</div>    

    <div className="service-container">
      <div className="service-div">
        <img src="https://i.pinimg.com/736x/32/8d/f6/328df6b803dae83859b765273d0ec8dd.jpg" alt="Icon 1" className="service-icon" />
        <h4 className="service-title"> Counseling Session</h4>
        <button className="learn-more-btn">Learn More</button>
      </div>

      <div className="service-div">
        <img src="https://i.pinimg.com/736x/c4/64/7d/c4647d68c6133b40cd4e84fd617eb0df.jpg" alt="Icon 2" className="service-icon" />
        <h4 className="service-title">Admissions Assistance</h4>
        <button className="learn-more-btn">Learn More</button>
      </div>

      <div className="service-div">
        <img src="https://i.pinimg.com/736x/2a/12/20/2a1220bd30d4a7b794c32d917eba439d.jpg" alt="Icon 3" className="service-icon" />
        <h4 className="service-title">Study Abroad</h4>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>



    </div>

 
  </div>
  )
}

export default HomeC