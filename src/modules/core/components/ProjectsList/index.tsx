import React, { FC, useState, useRef, useEffect } from "react";
import Resize from "assets/svg/ArrowTopBottom";
import styles from "./index.module.scss";
import { projectProps } from "projects";
import heightChange from "helpers/heightChange";
import Project from "../Project";

interface ProjectsListProps {
  title: string;
  projects: projectProps[];
  isOpen?: boolean;
}

const ProjectsList: FC<ProjectsListProps> = ({
  title,
  projects,
  isOpen = false,
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const projectBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    heightChange(projectBoxRef, isVisible);
  }, [isVisible]);

  const onResize = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <button className={styles.resizeButton} onClick={onResize}>
        {title} <Resize />
      </button>
      <div
        ref={projectBoxRef}
        className={`${styles.projectBox} ${!isVisible ? styles.hide : ""}`}
      >
        {projects.map((props, index) => (
          <Project {...props} key={index} />
        ))}
      </div>
    </>
  );
};

export default ProjectsList;
