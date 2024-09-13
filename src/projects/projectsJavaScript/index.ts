import ProjectsDataJS from "./projects";

const projectsDataJavaScript = () => {
  const { cocktailBar, movies } = ProjectsDataJS();
  const projectsJavaScript = [cocktailBar, movies];

  return projectsJavaScript;
};

export default projectsDataJavaScript;
