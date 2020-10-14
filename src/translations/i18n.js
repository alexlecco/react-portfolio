import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import * as TRANSLATIONS_ES from "../translations/es/translations.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: TRANSLATIONS_ES,
      },
    },
    lng: "en",
  });

export default i18n;
