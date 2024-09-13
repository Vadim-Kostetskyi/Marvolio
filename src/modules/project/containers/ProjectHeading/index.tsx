import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import Button from "components/Button";
import { projectProps } from "projects";
import styles from "./index.module.scss";

interface ProjectHeadingProps {
  chosenProject: projectProps;
}

const ProjectHeading: FC<ProjectHeadingProps> = ({ chosenProject }) => {
  const { t } = useTranslation();
  return (
    <section className={styles.wrapper}>
      <h1>{chosenProject.projectTitle}</h1>
      <p>{chosenProject.description}</p>
      <Button title={t("liveLink")} href={chosenProject.liveLink} />
    </section>
  );
};

export default ProjectHeading;
