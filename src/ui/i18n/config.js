import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import localeEn from './locales/en/translation.json';
import localeZhCN from './locales/zh-CN/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    // Define your translations here
    en: {
      name: 'English',
      translation: localeEn,
    },
    'zh-CN': {
      name: 'Chinese Simplified',
      translation: localeZhCN,
    },
    // Add more languages as needed
  },
  lng: localStorage.getItem('locale') ?? 'en', // Default language
  fallbackLng: 'en',
});

export default i18n;
