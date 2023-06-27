import i18n from 'i18next';
import {  initReactI18next } from "react-i18next";
import en from '../copy/en.json';
import ru from '../copy/ru.json';


export const defaultNS = "en";

export const resources = {
  en: {
    translation:  en ,
    name: 'en'
  },
  ru: {
    translation:  ru ,
    name: 'ru'
  },
};


i18n
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: 'en',
    resources,
  });

export default i18n;