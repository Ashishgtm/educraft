import React from 'react';
import './Testimonials.css'; // Import the CSS file
import { FaCircleNotch } from "react-icons/fa6";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Stella Larson',
      image: 'https://i.pinimg.com/736x/14/d0/ed/14d0ed7eee037b01253fbc38dcfd7908.jpg', 
      text: 'EduCraft helped me navigate the complex world of international education with ease. They provided personalized guidance and support throughout the entire application process, from choosing the right university to securing my visa.',
      rating: 4.5,
    },
    {
      name: 'Nick Jhonson',
      image: 'https://i.pinimg.com/736x/76/30/35/7630350298f65829e5db9e4338ca1945.jpg',
      text: 'The team at EduCraft Abroad was incredibly knowledgeable and supportive. They answered all my questions patiently and provided valuable insights into the application process. Thanks to their guidance, I was accepted to my dream university!',
      rating: 4,
    },
    {
        name: 'Olivia Davis ',
        image: 'https://i.pinimg.com/736x/7b/8b/34/7b8b34ade44fafd642dd2e68d8eef235.jpg', 
        text: 'I was impressed by their knowledge of different education systems and their ability to match me with universities that best suited my academic goals and interests.',
        rating: 4,
      },
      {
        name: 'Emma Smith',
        image: 'https://i.pinimg.com/736x/6e/ab/f9/6eabf9474f9163cfec6a42dcc57c7103.jpg',
        text: 'EduCraft Abroad helped me achieve my goal of studying at a top-ranked university in the US. I am incredibly grateful for their assistance.',
        rating: 5,
      },
      {
        name: 'Ethan Miller',
        image: 'https://i.pinimg.com/736x/6f/42/f7/6f42f7337ff905c9820da0c432c67881.jpg', 
        text: 'They went above and beyond to ensure a smooth and stress-free experience. I highly recommend their services to anyone considering studying abroad.',
        rating: 4.5,
      },
      {
        name: 'Liam Brown',
        image: 'https://i.pinimg.com/736x/32/2c/93/322c93ecf97455e782cf8469f7b8bda8.jpg',
        text: 'EduCraft provided excellent customer service and made the entire application process much easier to navigate.',
        rating: 5,
      },
     
  ];

  return (
    <div className='testi-div'>
    <div className='testimo'><FaCircleNotch className='icontesti' />Testimonial </div>
         <div className='testimon'>Our Students' Stories</div>   

    <div className="testimonials-container">
      {testimonialsData.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
          <div className="testimonial-content">
            <p className='testimonial-text'>{testimonial.text}</p>
            <div className="rating">
                {"⭐".repeat(testimonial.rating)}
              </div>
            <span className="testimonial-name">{testimonial.name}</span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Testimonials;