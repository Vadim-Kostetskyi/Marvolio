import ProjectsHtml from "./projectsHtml";
import projectsJavaScript from "./projectsJavaScript";
import projectsReact from "./projectsReact";

export interface projectProps {
  projectTitle: string;
  image: string;
  description: string;
  projectDescription: string;
  projectOverview: string[];
  tools: string[];
  projectLink: string;
  githubLink: string;
  liveLink?: string;
}

export const allowedProjects = [
  "dopefolio",
  "slimMom",
  "cocktailBar",
  "onlineStore",
  "medDoc",
  "movies",
  "webStudio",
  // "photoChat",
];

const ProjectsComponent = () => {
  const projectsHtml = ProjectsHtml();
  const projectsJS = projectsJavaScript();
  const reactProjects = projectsReact();

  const projects = [...reactProjects, ...projectsJS, ...projectsHtml];
  return projects;
};

export default ProjectsComponent;
