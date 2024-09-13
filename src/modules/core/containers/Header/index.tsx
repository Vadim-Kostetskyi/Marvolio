import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "components/LanguageSwitcher";
import keys from "./data";
import photo from "assets/images/myPhoto.jpg";
import SwitchStyleButton from "modules/core/components/SwitchStyleButton";
import { useMarvel } from "modules/marvel/containers/MarvelLayout/context";
import styles from "./index.module.scss";

const Header = () => {
  const { t } = useTranslation();
  const anchors = keys();

  const { marvel } = useMarvel();

  return (
    <header className={styles.wrapper}>
      <div className={styles.logoBox}>
        <img src={photo} alt="My photo" />
        <span>{t("myFullName")}</span>
      </div>
      <nav>
        <ul className={styles.list}>
          {anchors.map(({ href, title }) => (
            <li>
              <a href={href}>{title}</a>
            </li>
          ))}
        </ul>
        <div className={styles.switcherBox}>
          <LanguageSwitcher />
        </div>
      </nav>
      <div className={styles.switchStyleBox}>
        <SwitchStyleButton />
      </div>
    </header>
  );
};

export default Header;
