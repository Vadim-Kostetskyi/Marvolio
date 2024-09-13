import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ProjectPresentation from "modules/project/containers/ProjectPresentation";
import MainLayout from "modules/core/components/MainLayout";
import { allowedProjects } from "projects";

const Project = () => {
  const { projectName } = useParams<{ projectName?: string }>();

  if (projectName && !allowedProjects.includes(projectName)) {
    return <Navigate to="/" replace />;
  }

  if (!projectName) {
    return <Navigate to="/" replace />;
  }

  return (
    <MainLayout>
      <ProjectPresentation />
    </MainLayout>
  );
};

export default Project;
