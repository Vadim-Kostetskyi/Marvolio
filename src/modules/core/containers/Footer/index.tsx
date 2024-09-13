import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
import SocialButtons from "modules/core/components/SocialButtons";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <div>
            <h2>{t("myFullName")}</h2>
            <p>{t("extensiveSpecializationFooter")}</p>
          </div>
          <div>
            <h2>{t("social")}</h2>
            <div className={styles.social}>
              <SocialButtons isWhite={true} />
            </div>
          </div>
        </div>
        <div className={styles.lover}>
          <span className={styles.copyright}>{t("copyright")}</span>
          <a href="/">{t("myFullName")}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
