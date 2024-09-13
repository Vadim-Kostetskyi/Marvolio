import React from "react";
import { useTranslation } from "react-i18next";
import Title from "modules/core/components/Title";
import ProjectsList from "modules/core/components/ProjectsList";
import ProjectsDataReact from "projects/projectsReact";
import projectsDataJavaScript from "projects/projectsJavaScript";
import ProjectsDataHtml from "projects/projectsHtml";
import { projectCategories } from "utils/constants";
import styles from "./index.module.scss";

const Projects = () => {
  const { t } = useTranslation();
  const projectsHtml = ProjectsDataHtml();
  const projectsJavaScript = projectsDataJavaScript();
  const projectsReact = ProjectsDataReact();

  const titleProps = {
    title: t("projects"),
    text: t("Projects.text"),
  };

  return (
    <section className={styles.wrapper} id="projects">
      <Title {...titleProps} />
      <ProjectsList
        title={projectCategories.React}
        projects={projectsReact}
        isOpen={true}
      />
      <ProjectsList
        title={projectCategories.JavaScript}
        projects={projectsJavaScript}
      />
      <ProjectsList title={projectCategories.html} projects={projectsHtml} />
    </section>
  );
};

export default Projects;
