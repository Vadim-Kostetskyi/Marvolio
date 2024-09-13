import React from "react";
import { useTranslation } from "react-i18next";
import Button from "components/Button";
import Title from "modules/core/components/Title";
import Skills from "components/Skills";
import { socialLinks } from "helpers/socialLinks";
import { mySkills } from "./data";
import styles from "./index.module.scss";

const About = () => {
  const { t } = useTranslation();

  const titleProps = {
    title: t("About.title"),
    text: t("About.text"),
  };

  return (
    <section id="about" className={styles.wrapper}>
      <div className={styles.mainBox}>
        <Title {...titleProps} />
        <div className={styles.content}>
          <div>
            <h3>{t("About.getToKnowMe")}</h3>
            <p>
              {t("About.iAm")} <strong>{t("specialization")}</strong>{" "}
              {t("About.buildingAnd...")}
              <strong>{t("projects")}</strong> {t("section")}.
            </p>
            <p>
              {t("About.iAlso...")} <strong>{t("webDevelopment")}</strong>{" "}
              {t("About.soIt...")}
              <a href={socialLinks.Linkedin} target="_blank">
                {t("linkedin")}
              </a>
              .
            </p>
            <p>
              {t("About.ImOpenTo...")}
              <strong>{t("About.job")}</strong>{" "}
              {t("About.opportunitiesWhere...")}
              <strong>{t("About.contact")}</strong> {t("About.me")}.
            </p>
          </div>
          <div>
            <h3>{t("About.mySkills")}</h3>
            <Skills skills={mySkills} />
          </div>
        </div>
        <Button title={t("contact")} link="#contact" />
      </div>
    </section>
  );
};

export default About;
