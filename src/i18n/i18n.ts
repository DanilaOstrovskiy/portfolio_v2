import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en';
import ru from './locales/ru';
import ua from './locales/ua';


const resources = {
    EN: en,
    RU: ru,
    UA: ua
} as const;

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'EN',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;