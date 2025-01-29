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

        <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>BENEFITS</Link>
        <Link to="/events" className={location.pathname === "/events" ? "active" : ""}>OFFER</Link> 
        <Link to="/team" className={location.pathname === "/team" ? "active" : ""}>CONTACT US</Link> 
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>BUY NOW</Link> 
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