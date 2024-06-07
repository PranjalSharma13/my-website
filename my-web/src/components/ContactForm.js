import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.user_name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_q0uj30j', // Replace with your EmailJS service ID
      'service_q0uj30j', // Replace with your EmailJS template ID
      formData,
      'your_user_id' // Replace with your EmailJS user ID
    )
      .then((result) => {
        console.log(result.text);
        alert('Message Sent!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });

    setFormData({ user_name: '', user_email: '', message: '' });
  };

  return (
    <div className="fill-container">
      <div className="contact-container">
        <h2>Let's Connect</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            value={formData.user_name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            value={formData.user_email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
