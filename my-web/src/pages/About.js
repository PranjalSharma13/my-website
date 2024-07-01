import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import profileImage from '../assets/images/IMG_2609.jpg'; 
import TechStack from '../components/TechStack';
import Projects from './Projects';
import Contact from '../components/Contact';

function About() {
  const [t] = useTranslation("global");

  return (
    <div className="about-section">
      <div className="profile">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="profile-details">
          <h1>{t("about.title")}</h1>
          <p>{t("about.discription")}</p> 
        </div>
      </div>
      <div className="content">
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default About;
