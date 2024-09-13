import React from "react";
import HomePage from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from "./Router";

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export default App;
