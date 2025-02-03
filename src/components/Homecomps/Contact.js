import React, { useState } from 'react';
import { FaCircleNotch } from "react-icons/fa6";

import './contact.css'; // Import the CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Email sent successfully!');
          setFormData({ fullName: '', email: '', message: '' });
        } else {
          alert('Error sending email. Please send mail directly to ashishgautam9846@gmail.com');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error sending email. Please send mail directly to ashishgautam9846@gmail.com');
      });
  };
  


  return (
    <div>
      <div className='contact-head'><FaCircleNotch className='iconcontact' />Quick Contact </div>
               <div className='contact-desc'>Have questions? We've got answers. Contact us today.</div>   

    <div className="contact-form-container">
       
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Your Full Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Have Your Say"
            required
          ></textarea>
        </div>

        <button type="submit">SUBMIT</button>
      </form>

      
    </div>

    </div>
  );
};

export default ContactForm;