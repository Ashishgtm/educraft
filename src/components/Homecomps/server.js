const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Email Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ashishgautam9846@gmail.com', // Replace with your email
    pass: 'admin', // Replace with your app password
  },
});

// Route to handle form submission
app.post('/send-email', (req, res) => {
  const { fullName, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'ashishgautam9846@gmail.com', // Your email
    subject: `Contact Form Submission from ${fullName}`,
    text: `You have a new message:\n\nName: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error); // Log the error
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent:', info.response); // Log success
    res.status(200).send('Email sent successfully');
  });
  
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
