import { useTranslation } from "react-i18next";
import imageCocktailBar from "assets/images/cocteiles.png";
import imageMovies from "assets/images/movies.jpg";
import { SkillList } from "utils/constants";

const ProjectsDataJS = () => {
  const { t } = useTranslation();

  const projectTitles = {
    cocktailBar: t("cocktailBar.title"),
    movies: t("movies.title"),
  };

  const cocktailBar = {
    projectTitle: projectTitles.cocktailBar,
    image: imageCocktailBar,
    description: t("information", { projectTitle: projectTitles.cocktailBar }),
    projectDescription: t("cocktailBar.projectDescription"),
    projectOverview: [
      t("cocktailBar.projectOverview.0"),
      t("cocktailBar.projectOverview.1"),
      t("cocktailBar.projectOverview.2"),
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
    projectLink: "/cocktailBar",
    githubLink:
      "https://github.com/Vadim-Kostetskyi/cocktail_Bar_project?organization=Vadim-Kostetskyi&organization=Vadim-Kostetskyi",
  };

  const movies = {
    projectTitle: projectTitles.movies,
    image: imageMovies,
    description: t("information", { projectTitle: projectTitles.movies }),
    projectDescription: t("movies.projectDescription"),
    projectOverview: [
      t("movies.projectOverview.0"),
      t("movies.projectOverview.1"),
      t("feelFree"),
    ],
    tools: [
      SkillList.HTML5,
      SkillList.CSS3,
      SkillList.ResponsiveDesign,
      SkillList.React,
      SkillList.Axios,
      SkillList.Figma,
      SkillList.GIT,
      SkillList.Github,
    ],
    projectLink: "/movies",
    liveLink: "https://vadim-kostetskyi.github.io/movies/",
    githubLink: "https://github.com/Vadim-Kostetskyi/movies",
  };

  return { cocktailBar, movies };
};

export default ProjectsDataJS;
