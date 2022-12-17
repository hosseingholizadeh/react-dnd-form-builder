export default class culture {
  static language_key = "lang";
  static languages = ["en", "fa", "tr"];
  static default_language = "en";

  static getLanguage() {
    return localStorage.getItem(this.language_key) ?? this.default_language;
  }

  static setLanguage(lang) {
    localStorage.setItem(this.language_key, lang);
    console.log("CULTURE - set language to " + lang);
  }

  static isRtl(lang) {
    if (!lang) lang = this.getLanguage();
    return lang === "fa" || lang === "ar";
  }

  static align(lang) {
    return this.isRtl(lang) ? "right" : "left";
  }
}
