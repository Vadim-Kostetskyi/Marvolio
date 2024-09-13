import React, { FC } from "react";
import styles from "./index.module.scss";
import Button from "components/Button";

interface ProjectProps {
  image: string;
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
}

const Project: FC<ProjectProps> = ({
  image,
  projectTitle,
  projectDescription,
  projectLink,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.projectBox}>
      <img src={image} alt="Software Screenshot" />
      <div className={styles.projectInfo}>
        <h3>{projectTitle}</h3>
        <p>{projectDescription}</p>
        <Button title={"Case Study"} href={projectLink} />
      </div>
    </div>
  </div>
);

export default Project;
