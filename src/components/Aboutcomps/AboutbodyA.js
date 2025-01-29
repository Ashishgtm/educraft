import React, { useLayoutEffect } from "react";

import { FaCircleNotch,FaCircle} from "react-icons/fa6";
import "./AboutbodyA.css";
import { gsap } from "gsap";

const AboutbodyA = () => {
  useLayoutEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo(
      ".aboutus-top",
      { x: "-100vw", opacity: 0 }, // Start from right
      { x: 0, opacity: 1, duration: 4, ease: "power3.out", delay: 1 },
      "-=1.3" // Overlapping animation
    );
  }, []);

  return (
    <div>
      <div className="aboutus-top">
        <FaCircleNotch className="iconaboutus" />
        Hi, we’re EduCraft
      </div>
      <div className="about-paragraph">
        <p>
          Welcome to EduCraft Abroad Studies, your trusted partner in
          achieving your study abroad dreams. Established in 2016, we have
          rapidly grown to become a leading provider of comprehensive career
          guidance and support services across the country. With our extensive
          network of nine branches nationwide, we are dedicated to assisting
          students in their pursuit of education, offering specialized expertise
          in abroad study programs, English language classes, and streamlined
          documentation processes. <br />
          At EduCraft, we understand that studying abroad is
          a life-changing decision. That's why our team of experienced
          professionals is committed to providing personalized guidance tailored
          to your unique aspirations and goals. We believe that every student
          deserves the opportunity to access quality education and gain a global
          perspective that will shape their future.
        </p>
      </div>
      <div className="aboutus-top">
        <FaCircleNotch className="iconaboutus" />
        Aims and Objectives
      </div>
      <div className="about-paragraph">
        <p>
          To be the industry leader in delivering one-stop study abroad
          solutions for students, assisting them in attaining their goals via
          effective career counseling and advice, and adding value to our
          partner universities and all other stakeholders.
        </p>
      </div>
      <div className="aboutus-top">
        <FaCircleNotch className="iconaboutus" />
        Our Missions
      </div>
      <div className="about-paragraph">
        <p>
        <FaCircle className="iconcircle" />To find the greatest employment possibilities that fit the student's skills, 
        performance, and interests. <br/>
        <FaCircle className="iconcircle" />To provide students who want to study abroad with specialized alternatives. <br/>
        <FaCircle className="iconcircle" />By maintaining our organization's integrity, honesty, and quality, we strive for organic growth.<br/>
        <FaCircle className="iconcircle" />To recognize similar values and objectives with the partner institutions in order to create a solid and reliable partnership.<br/>
        </p>
      </div>

      <div className="aboutus-top">
        <FaCircleNotch className="iconaboutus" />
        Our Vision
      </div>
      <div className="about-paragraph">
        <p>
        <p>Our core courses shall be graduate university-level programs. Our objectives can be stated as follow.</p>

        <FaCircle className="iconcircle" />We can accomplish the following goals to further our mission and vision.
        <br/>
        <FaCircle className="iconcircle" />To get a sufficient understanding of the study locations, institutions, and programs in order to offer effective counseling and advice. <br/>
        <FaCircle className="iconcircle" />To ensure that the important team members have the appropriate knowledge and abilities in the area of career counseling.<br/>
        <FaCircle className="iconcircle" />To foster a strong sense of teamwork and offer the pupils high-quality answers.<br/>
        <FaCircle className="iconcircle" />To get formal representation from prestigious universities and collaborate with them to support the students throughout their initial years in the nation.<br/>

        <FaCircle className="iconcircle" />With the purpose of offering the English Language Test lessons and other language training needed to enroll in the universities.<br/>

        <FaCircle className="iconcircle" />To help students find the appropriate programs and choose reputable colleges so they may achieve their objectives.<br/>

        </p>
      </div>




    </div>
  );
};

export default AboutbodyA;
