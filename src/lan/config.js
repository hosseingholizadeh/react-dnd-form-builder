import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import culture from "../lib/js/culture";

const msList = ["global"];
const languages = culture.languages;
var lang = culture.getLanguage();

const getAllJsonFiles = (lng) => {
  let all = {};
  msList.forEach((ms) => {
    const fileName = `${ms}.json`;
    try {
      const resource = require(`./lan/${lng}/${fileName}`);
      let data = JSON.parse(JSON.stringify(resource));
      all = { ...all, ...data };
    } catch (e) {
      console.error(
        "failed to load file ",
        fileName,
        " for language ",
        lng,
        " error:",
        e.message
      );
    }
  });
  return all;
};

let initObj = {
  fallbackLng: "fa",
  lng: lang,
  // getDefaultLang(),
  resources: {},
  ns: ["translations"],
  defaultNS: "translations",
};

languages.forEach((language) => {
  initObj.resources[language] = {
    translations: getAllJsonFiles(language),
  };
});

i18n.use(initReactI18next).init(initObj);

i18n.languages = languages;

export default i18n;
