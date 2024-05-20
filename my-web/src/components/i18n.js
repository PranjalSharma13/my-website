// i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import global_en from './../translations/en/global.json';
import global_es from './../translations/es/global.json';
import global_hi from './../translations/hi/global.json';
import global_ne from './../translations/ne/global.json';

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
    hi: {
      global: global_hi,
    },
    ne: {
      global: global_ne,
    },
  },
});

export default i18next;
