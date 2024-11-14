import { useState } from "react";
import translations from "./translations";
export const useLanguage = () => {
  const [language, setLanguage] = useState("es"); 

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "es" ? "en" : "es"));
  };

  const t = translations[language];

  return { t, toggleLanguage, language };
};