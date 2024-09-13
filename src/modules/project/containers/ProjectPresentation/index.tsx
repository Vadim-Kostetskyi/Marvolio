import React from "react";
import ProjectDescription from "../ProjectDescription";
import ProjectHeading from "../ProjectHeading";
import styles from "./index.module.scss";
import ProjectsComponent from "projects";

const ProjectPresentation = () => {
  const projectPath = window.location.pathname;
  const projects = ProjectsComponent();

  const projectIndex = projects.findIndex(
    (project) => project.projectLink === projectPath
  );
  const chosenProject = projects[projectIndex];

  return (
    <main className={styles.wrapper}>
      <ProjectHeading chosenProject={chosenProject} />
      <ProjectDescription chosenProject={chosenProject} />
    </main>
  );
};

export default ProjectPresentation;
