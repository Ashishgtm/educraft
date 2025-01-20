import React from 'react';
import { FaCircleNotch } from "react-icons/fa6";

import './whychooseus.css'; // Import the CSS file

const ChooseUsPage = () => {
  return (
    <div className="container">
         <div className='whychooseus'><FaCircleNotch className='iconservices' />why choose us </div>
         <div className='whyfewword'>From application to acceptance —  we’ve got your back.</div>    
      <div className="sectioncard">
        <div className="cards">
          <img src="https://i.pinimg.com/736x/99/b8/b2/99b8b2eb37fd3329cbdeeff0a6f607c5.jpg" alt="Intellectually Diverse" />
          <h3>Intellectually Diverse</h3>
          <span className='card-text'>Collaboration among individuals with varied skills and knowledge leads to groundbreaking ideas and solutions.</span>
        </div>
        <div className="cards">
          <img src="https://i.pinimg.com/736x/50/a4/2c/50a42c0a969d3d5a6cc04e12ce1b4dd0.jpg" alt="Driven By Our Curiosity" />
          <h3>Driven By Our Curiosity</h3>
          <span className='card-text'>A curious mind seeks to explore the unknown, constantly searching for new ideas, methods, and solutions.</span>
        </div>
        <div className="cards">
          <img src="https://i.pinimg.com/736x/1b/80/f2/1b80f2d5745bca5f4bc619c4d2a5084f.jpg" alt="Our Scholarship" />
          <h3>Our Scholarship</h3>
          <span className='card-text'>Scholarships provide students with financial assistance to help pay for tuition, fees, books, and other educational expenses.

</span>
        </div>
      </div>

      <div className="sectioncard">
        <div className="cards">
          <img src="https://i.pinimg.com/736x/2c/1b/db/2c1bdbb77e6d76014aaeee20363e1aad.jpg" alt="Globally Focused" />
          <h3>Globally Focused</h3>
          <span className='card-text'>Exposure to different cultures and perspectives can lead to greater understanding and appreciation of diversity.</span>
        </div>
        <div className="cards">
          <img src="https://i.pinimg.com/736x/9c/a9/2d/9ca92dbe4288dcbcba5e3750d709f6c3.jpg" alt="Idea Generation" />
          <h3>Idea Generation</h3>
          <span className='card-text'>Ideas help us find creative solutions to challenges we face in our personal and professional lives.</span>
        </div>
        <div className="cards">
          <img src="https://i.pinimg.com/736x/61/c7/85/61c785305b4588d05082a896520d2a25.jpg" alt="Teaching Methods" />
          <h3>Teaching Methods</h3>
          <span className='card-text'>The teacher presents information to the class through verbal explanation, often accompanied by visual aids like slides or the blackboard.</span>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsPage;