import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "utils/constants";
import styles from "./index.module.scss";

const LanguageSwitcher = () => {
  const [chosenLang, setChosenLang] = useState(languages.English);
  const { i18n } = useTranslation();
  const locates = [languages.English, languages.Ukrainian];

  const onSwitchLang = (lang: languages) => () => {
    if (chosenLang === lang) {
      return;
    }

    setChosenLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <ul>
      {locates.map((locate) => (
        <li>
          <button
            className={chosenLang === locate ? styles.active : styles.button}
            onClick={onSwitchLang(locate)}
          >
            {locate.toUpperCase()}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default LanguageSwitcher;
