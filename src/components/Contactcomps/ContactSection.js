import React,{useState} from 'react';
import './contactform.css'
import emailjs from '@emailjs/browser';


const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Replace these with your actual EmailJS credentials
        emailjs.send(
          'YOUR_SERVICE_ID', // Get this from EmailJS dashboard
          'YOUR_TEMPLATE_ID', // Get this from EmailJS dashboard
          {
            to_email: 'ashishgautam9846@gmail.com',
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message
          },
          'YOUR_PUBLIC_KEY' // Get this from EmailJS dashboard
        )
        .then((response) => {
          alert('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        })
        .catch((error) => {
          alert('Failed to send message. Please try again.');
          console.error('Email error:', error);
        });
      };



  return (
    <div className="contact-container">
      
      <div className="info-cards">
        <div className="info-card">
          <div className="contact-icon">📍</div>
          <h3>Address</h3>
          <p>Putalisadak-30, Kathmandu</p>
        </div>

        <div className="info-card">
          <div className="contact-icon">📞</div>
          <h3>Call Us</h3>
          <p>01-4547987, +977-9862403580</p>
        </div>

        <div className="info-card">
          <div className="contact-icon">✉️</div>
          <h3>Email Us</h3>
          <p>info@educraft.com.np
          </p>
        </div>

        <div className="info-card">
          <div className="contact-icon">⏰</div>
          <h3>Open Hours</h3>
          <p>Monday-Sunday</p>
          <p>07 AM - 05 PM</p>
        </div>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone" 
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input 
              type="text" 
              name="subject"
              placeholder="Subject" 
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>          <textarea placeholder="Message"></textarea>
          <button className='buttoncontact' type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;