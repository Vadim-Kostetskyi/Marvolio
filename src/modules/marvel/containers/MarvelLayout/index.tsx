import React, { FC, ReactNode, useState } from "react";
import { MarvelContext } from "./context";

const MarvelLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const [marvel, setMarvel] = useState(false);

  return (
    <MarvelContext.Provider value={{ marvel, setMarvel }}>
      {children}
    </MarvelContext.Provider>
  );
};

export default MarvelLayout;
