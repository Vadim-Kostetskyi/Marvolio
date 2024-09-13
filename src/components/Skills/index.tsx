import React, { FC } from "react";
import styles from "./index.module.scss";

interface SkillsProps {
  skills: string[];
}

const Skills: FC<SkillsProps> = ({ skills }) => (
  <div className={styles.skillBox}>
    {skills.map((skill) => (
      <div key={skill} className={styles.skill}>
        {skill}
      </div>
    ))}
  </div>
);

export default Skills;
