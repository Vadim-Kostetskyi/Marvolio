import { useTranslation } from "react-i18next";
import { SkillList } from "utils/constants";
import imageDopefolio from "assets/images/dopefolio.jpg";
import imageMedDoc from "assets/images/medDoc.png";
import imageOnlineStore from "assets/images/onlineStore.png";
import imageSlimMom from "assets/images/slimMom.png";

const ProjectsDataReact = () => {
  const { t } = useTranslation();

  const projectTitles = {
    dopefolio: t("dopefolio.title"),
    medDoc: t("medDoc.title"),
    onlineStore: t("onlineStore.title"),
    slimMom: t("slimMom.title"),
  };

  const dopefolio = {
    projectTitle: projectTitles.dopefolio,
    image: imageDopefolio,
    description: t("information", { projectTitle: projectTitles.dopefolio }),
    projectDescription: t("dopefolio.projectDescription"),
    projectOverview: [
      t("dopefolio.projectOverview.0"),
      t("dopefolio.projectOverview.1"),
      t("feelFree"),
    ],
    tools: [
      SkillList.HTML5,
      SkillList.CSS3,
      SkillList.React,
      SkillList.SASS,
      SkillList.GIT,
      SkillList.Github,
    ],
    projectLink: "/dopefolio",
    liveLink: "/",
    githubLink:
      "https://github.com/Vadim-Kostetskyi/cocktail_Bar_project?organization=Vadim-Kostetskyi&organization=Vadim-Kostetskyi",
  };

  const medDoc = {
    projectTitle: projectTitles.medDoc,
    image: imageMedDoc,
    description: t("information", { projectTitle: projectTitles.medDoc }),
    projectDescription: t("medDoc.projectDescription"),
    projectOverview: [
      t("medDoc.projectOverview.0"),
      t("medDoc.projectOverview.1"),
      t("medDoc.projectOverview.2"),
      t("feelFree"),
    ],
    tools: [
      SkillList.HTML5,
      SkillList.CSS3,
      SkillList.MUI,
      SkillList.ResponsiveDesign,
      SkillList.React,
      SkillList.Redux,
      SkillList.Axios,
      SkillList.NodeJS,
      SkillList.MongoDB,
      SkillList.Figma,
    ],
    projectLink: "/medDoc",
    githubLink: "https://github.com/Vadim-Kostetskyi/MedDoc-front",
    liveLink: "https://dr-artem.github.io/MedDoc-front",
  };

  const onlineStore = {
    projectTitle: projectTitles.onlineStore,
    image: imageOnlineStore,
    description: t("information", { projectTitle: projectTitles.onlineStore }),
    projectDescription: t("onlineStore.projectDescription"),
    projectOverview: [
      t("onlineStore.projectOverview.0"),
      t("onlineStore.projectOverview.1"),
      t("onlineStore.projectOverview.2"),
      t("onlineStore.projectOverview.3"),
      t("feelFree"),
    ],
    tools: [
      SkillList.HTML5,
      SkillList.CSS3,
      SkillList.SASS,
      SkillList.ResponsiveDesign,
      SkillList.React,
      SkillList.TypeScript,
      SkillList.Figma,
    ],
    projectLink: "/onlineStore",
    githubLink: "https://github.com/Vadim-Kostetskyi/Online-store",
    liveLink: "https://online-store-seven-murex.vercel.app/men/products-grid",
  };

  const slimMom = {
    projectTitle: projectTitles.slimMom,
    image: imageSlimMom,
    description: t("information", { projectTitle: projectTitles.slimMom }),
    projectDescription: t("slimMom.projectDescription"),
    projectOverview: [
      t("slimMom.projectOverview.0"),
      t("slimMom.projectOverview.1"),
      t("slimMom.projectOverview.2"),
      t("feelFree"),
    ],
    tools: [
      SkillList.HTML5,
      SkillList.CSS3,
      SkillList.SASS,
      SkillList.ResponsiveDesign,
      SkillList.React,
      SkillList.Axios,
      SkillList.Figma,
      SkillList.GIT,
      SkillList.Github,
    ],
    projectLink: "/slimMom",
    githubLink: "https://github.com/Vadim-Kostetskyi/SlimMomm",
    liveLink: "https://vladislav-ivanilov.github.io/team_project_SlimMom",
  };

  return { dopefolio, medDoc, onlineStore, slimMom };
};

export default ProjectsDataReact;
