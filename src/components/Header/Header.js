import React, { useState } from 'react';

import edulogo from './edu logo.png'
import './Header.css';
import { Link, useLocation  } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation(); 

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    
  };

  return (
    <header className="header">
      <div className="logo">
      <Link to="/home"> <img src={edulogo} alt="lexislogo" className="edulogo" /></Link>
      </div>
      <button className="nav-toggler" onClick={toggleNav}>
        ☰
      </button>
      <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
      <Link to="/home" className={location.pathname === "/home" ? "active" : ""}>HOME</Link> 
      <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>ABOUT</Link> 

        <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>SERVICES</Link>
        <Link to="/universities" className={location.pathname === "/universities" ? "active" : ""}>UNIVERSITIES</Link> 
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>CONTACT</Link> 
        <Link to="/buy" className={location.pathname === "/buy" ? "active" : ""}>BUY NOW</Link> 
      </nav>
      <div className="contact">
        <button className="contact-btn">
          <span role="img" aria-label="phone">📱</span> +977-9843797777
        </button>
      </div>
    </header>
  );
};

export default Header;