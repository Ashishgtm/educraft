import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFacebook, faTwitter, faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=chevron_right" />


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="heading">STUDENT SERVICES</div>
        <div className="footer-item">- Academic Advising</div>
        <div className="footer-item">- Career Counseling</div>
        <div className="footer-item">- Personal Development</div>
        <div className="footer-item">- Scholarship and Financial Aid</div>
        <div className="footer-item">- Test Preparation Services</div>
        <div className="footer-item">- College Application Services</div>
        <div className="footer-item">- Document Verification and Legal Support</div>
        <div className="footer-item">- Mentorship Programs</div>
        <div className="footer-item">- Emergency Support Services</div>

      </div>
      <div className="footer-section">
        <div className="heading">ABOUT</div>
        <div className="footer-item">- About Us</div>
        <div className="footer-item">- Message from Director</div>
      </div>
      <div className="footer-section">
        <div className="heading">QUICK LINKS</div>
        <div className="footer-item">- Events</div>
        <div className="footer-item">- Blog</div>
        <div className="footer-item">- Contact us</div>
      </div>
      <div className="footer-name">EduCraft Abroad Studies</div>
      <div className="footer-social">
        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
      </div>
      <div className="footer-bottom">
        <p>
          Copyright © 2025.EduCraft Abroad Studies. All Rights Reserved.
        </p>
        <p>Privacy Policy | Code of Conduct | Modern Slavery Policy | Under 18 Policy and Procedure</p>
      </div>
    </footer>
  );
};

export default Footer;