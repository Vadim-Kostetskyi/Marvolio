import React from "react";
import Introduction from "./Introduction";
import About from "./About";
import Projects from "./Projects";
import Feedback from "./Feedback";
import { useMarvel } from "modules/marvel/containers/MarvelLayout/context";
import DoorPortal from "../../marvel/components/DoorPortal";

const Main = () => {
  const { marvel } = useMarvel();

  return (
    <>
      {marvel ? (
        <DoorPortal />
      ) : (
        <>
          <Introduction />
          <About />
          <Projects />
          <Feedback />
        </>
      )}
    </>
  );
};

export default Main;
