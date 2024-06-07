import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';
import ContactForm from './ContactForm';

const Contact = () => {
  const { t } = useTranslation('global');

  return (
    <div className="contact-me">
      <h2>{t('contact.title')}</h2>
      <p>{t('contact.subtitle')}</p>
      <div className="contact-info">
        <div className="info-item">
          <div className="icon">&#x1F4CD;</div>
          <h3>{t('contact.addressTitle')}</h3>
          <p>{t('contact.address')}</p>
        </div>
        <div className="info-item">
          <div className="icon">&#x260E;</div>
          <h3>{t('contact.phoneTitle')}</h3>
          <p>{t('contact.phone')}</p>
        </div>
        <div className="info-item">
          <div className="icon">&#x2709;</div>
          <h3>{t('contact.emailTitle')}</h3>
          <p>{t('contact.email')}</p>
        </div>
        <div className="info-item">
          <div className="icon">&#x1F310;</div>
          <h3>{t('contact.websiteTitle')}</h3>
          <p>{t('contact.website')}</p>
        </div>
      </div>
     <ContactForm/>
    </div>
  );
};

export default Contact;
