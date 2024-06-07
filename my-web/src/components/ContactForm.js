import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
import pic from '../assets/images/mypic.jpg';
import { useTranslation } from 'react-i18next';

function ContactForm() {
  const { t } = useTranslation('global');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  debugger;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_q0uj30j', // Replace with your EmailJS service ID
      'template_yte32rg', // Replace with your EmailJS template ID
      formData,
      'povxBCM37AbInFgc0' // Replace with your EmailJS user ID
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
  debugger;
  return (
 
    <div className="fill-container">
      <div className="contact-container">
        <h2>{t('form.title')}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            placeholder={t('form.name')}
            value={formData.user_name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="user_email"
            placeholder={t('form.email')}
            value={formData.user_email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder={t('form.message')}
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="image-container">
  <img src={pic} alt="My Picture" />
</div>
    </div>
  );
}

export default ContactForm;
