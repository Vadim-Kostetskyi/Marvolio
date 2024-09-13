import React from "react";
import HomePage from "./Home";
import { Route, Routes } from "react-router-dom";
import Project from "./Project";

const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/:projectName" element={<Project />} />
  </Routes>
);

export default Router;
