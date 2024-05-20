import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import enFlag from './../assets/images/us.png';
import esFlag from './../assets/images/spain.png';
import hiFlag from './../assets/images/india.png';
import neFlag from './../assets/images/nepal.png';
import './LanguageSwitch.css';
const LanguageSwitch = () => {
    const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (lng) => {
    setSelectedLanguage(lng);
    i18n.changeLanguage(lng);
  };

    return (
        <> <div className="language-switcher">
        {selectedLanguage !== 'en' && (
          <button onClick={() => handleLanguageChange('en')}>
            <img src={enFlag} alt="English" />
          </button>
        )}
        {selectedLanguage !== 'es' && (
          <button onClick={() => handleLanguageChange('es')}>
            <img src={esFlag} alt="Spanish" />
          </button>
        )}
        {selectedLanguage !== 'hi' && (
          <button onClick={() => handleLanguageChange('hi')}>
            <img src={hiFlag} alt="Hindi" />
          </button>
        )}
        {selectedLanguage !== 'ne' && (
          <button onClick={() => handleLanguageChange('ne')}>
            <img src={neFlag} alt="Nepali" />
          </button>
        )}
      </div></>
    )
}

export default LanguageSwitch;