import React from "react";
import { useTranslation } from "react-i18next";
import { SkillList } from "utils/constants";
import image from "assets/images/webStudio.jpg";

const ProjectsDataHtml = () => {
  const { t } = useTranslation();
  const projectTitle = t("webStudio.title");

  const webStudio = {
    projectTitle,
    image,
    description: t("information", { projectTitle }),
    projectDescription: t("webStudio.projectDescription"),
    projectOverview: [
      t("webStudio.projectOverview.0"),
      t("webStudio.projectOverview.1"),
      t("feelFree"),
    ],
    tools: [
      SkillList.HTML5,
      SkillList.CSS3,
      SkillList.SASS,
      SkillList.ResponsiveDesign,
      SkillList.JavaScript,
      SkillList.Axios,
      SkillList.Figma,
      SkillList.GIT,
      SkillList.Github,
    ],
    projectLink: "/webStudio",
    liveLink: "https://vadim-kostetskyi.github.io/WebStudio/",
    githubLink: "https://github.com/Vadim-Kostetskyi/WebStudio",
  };

  return webStudio;
};

export default ProjectsDataHtml;
