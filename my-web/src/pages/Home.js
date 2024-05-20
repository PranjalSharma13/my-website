import React from 'react';
import { useTranslation } from "react-i18next";
import frontpic from '../assets/videos/frontpic.mp4';
import './Home.css';
import buttonImage from '../assets/images/yellowarrow.png';
import { useNavigate } from 'react-router-dom'; // Correct import

function Home() {
  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleMoreAboutMe = () => {
    navigate('/about'); // Use navigate to go to the '/home' route
  };

  return (
    <>
      <div className="video-container">
        <video className="background-video" loop autoPlay muted>
          <source src={frontpic} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-text">
          {t("home.intro1")}<div className='name'> Pranjal Sharma</div><br />{t("home.intro2")}
          <button className="more-about-me-button" onClick={handleMoreAboutMe}>
            {t("home.moreButton")}
            <img src={buttonImage} alt="More About Me" className="button-image" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
