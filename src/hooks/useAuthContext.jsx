import { AuthContext } from "../context/PlinkContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be used in a AuthContextProvider");
  }

  return context;
};
