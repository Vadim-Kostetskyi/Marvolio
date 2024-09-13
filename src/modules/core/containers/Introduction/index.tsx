import React from "react";
import { useTranslation } from "react-i18next";
import Button from "components/Button";
import SocialButtons from "modules/core/components/SocialButtons";
import styles from "./index.module.scss";

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.wrapper}>
      <h1>{`${t("hey")} ${t("myFullName")}`}</h1>
      <p>{t("extensiveSpecialization")}</p>
      <Button title={t("projects")} link="#projects" />
      <div className={styles.social}>
        <SocialButtons translate={t} />
      </div>
    </section>
  );
};

export default Introduction;
