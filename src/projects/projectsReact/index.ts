import ProjectsDataReact from "./projects";

const projectsReact = () => {
  const { dopefolio, medDoc, onlineStore, slimMom } = ProjectsDataReact();
  const projectsJavaScript = [dopefolio, medDoc, onlineStore, slimMom];

  return projectsJavaScript;
};

export default projectsReact;
