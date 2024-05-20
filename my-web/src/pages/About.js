import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import './About.css';
import profileImage from '../assets/images/IMG_2609.jpg'; 
import TechStack from '../components/TechStack';

function About() {
    const [t, i18n] = useTranslation("global");

  return (
    
    <div className="about-section">
      <div className="profile">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="profile-details">
          <h1>{t("about.title")}</h1> {/* Translate the title */}
          <p>{t("about.discription")}</p> {/* Translate the description */}
        </div>
      </div>
      <div><TechStack/></div>
    </div>
  );
}

export default About;
