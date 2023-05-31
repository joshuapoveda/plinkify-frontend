import { useAuthContext } from "./useAuthContext";
import { usePlinksContext } from "./usePlinksContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: plinksDispatch } = usePlinksContext();

  const logout = () => {
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
    plinksDispatch({ type: "SET_PLINKS", payload: null });
  };

  return { logout };
};
