import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";

interface MarvelContextProps {
  marvel: boolean;
  setMarvel: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MarvelContext = createContext<MarvelContextProps | undefined>(
  undefined
);

export const useMarvel = () => {
  const context = useContext(MarvelContext);
  if (!context) {
    throw new Error("useMarvel must be used within a MarvelProvider");
  }
  return context;
};
