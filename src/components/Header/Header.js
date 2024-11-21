import React from 'react'
import './Header.css'
import edulogo from './edu logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
<img src={edulogo} alt='educraftlogo' className='educraftlogo'/>       
      </div>
      <nav className="nav">
        <a href="#home" className="active">HOME</a>
        <a href="/">HOW WE WORK</a>
        <a href="/">BENEFITS</a>
        <a href="/">OFFER</a>
        <a href="/">CONTACT US</a>
        <a href="/">BUY NOW</a>
      </nav>
      <div className="contact">
        <button className="contact-btn">
          <span role="img" aria-label="phone">📱</span> +977-9862403580
        </button>
      </div>
    </header>
  )
}

export default Header