import React, { FC } from "react";
import ProjectLinkButton from "modules/project/components/ProjectLinkButton";
import GoBackLinkButton from "modules/project/components/GoBackLinkButton";
import Skills from "components/Skills";
import { projectProps } from "projects";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";

interface ProjectDescriptionProps {
  chosenProject: projectProps;
}

const ProjectDescription: FC<ProjectDescriptionProps> = ({ chosenProject }) => {
  const { t } = useTranslation();

  return (
    <section className={styles.wrapper}>
      <div className={styles.imageBox}>
        <img src={chosenProject.image} alt="Project" />
      </div>
      <div className={styles.descriptionBox}>
        <h2>{t("projectDescription.projectOverview")}</h2>
        {chosenProject.projectOverview.map((text) => (
          <p>{text}</p>
        ))}
      </div>
      <div className={styles.toolsBox}>
        <h2>{t("projectDescription.toolsUsed")}</h2>
        <Skills skills={chosenProject.tools} />
      </div>
      <div className={styles.functionalBox}>
        <h2>{t("projectDescription.repositoryLink")}</h2>
        <ProjectLinkButton href={chosenProject.githubLink} translate={t} />
        <GoBackLinkButton translate={t} />
      </div>
    </section>
  );
};

export default ProjectDescription;
