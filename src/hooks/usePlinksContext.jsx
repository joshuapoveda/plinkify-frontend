import { PlinksContext } from "../context/PlinkContext";
import { useContext } from "react";

export const usePlinksContext = () => {
  const context = useContext(PlinksContext);

  if (!context) {
    throw Error("usePlinksContext must be used in a PlinksContextProvider");
  }

  return context;
};
