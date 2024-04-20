import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactUs() {
  const contactNumbers = [
    '123-456-7890',
    '987-654-3210',
    '555-123-4567',
  ];

  return (
    <div className="contact-us">
      <h2>Contact Information</h2>
      <p>Address: St lawrence college cornwal</p>
      <p>Email: slc@gmail.com</p>
      <p>Phone: {contactNumbers[Math.floor(Math.random() * contactNumbers.length)]}</p>
      <p>Contact hours: Monday to Friday, 9:00 AM - 5:00 PM</p>
      <Link to="/main">
          <button>Back to home</button>
        </Link>
    </div>
  );
}
