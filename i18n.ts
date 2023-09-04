import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationID from "./src/app/configs/locales/id.json";
import translationENG from "./src/app/configs/locales/en.json";



// the translations
const resources = {

    en: {
        translation: translationENG,
    },
    id: {
        translation: translationID,
    },
};

const language = localStorage.getItem("I18N_LANGUAGE");
const lang: any = process.env.DEFAULT_LANGUAGE
if (!language) {
    localStorage.setItem("I18N_LANGUAGE", lang);
}


i18n
    .use(detector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: localStorage.getItem("I18N_LANGUAGE") || lang,
        fallbackLng: lang, // use en if detected lng is not available

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
