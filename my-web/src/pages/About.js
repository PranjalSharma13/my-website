import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import './About.css';
import profileImage from '../assets/images/IMG_2609.jpg'; 
import TechStack from '../components/TechStack';
import Projects from './Projects';
import Contact from '../components/Contact';
function About() {
    const [t, i18n] = useTranslation("global");

  return (
    <>
    <div className="about-section">
      <div className="profile">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="profile-details">
          <h1>{t("about.title")}</h1>
          <p>{t("about.discription")}</p> 
        </div>
      </div>
      <div><TechStack/></div>
      <Projects/>
      <Contact/>
    </div>
 
    </>
  );
}

export default About;
