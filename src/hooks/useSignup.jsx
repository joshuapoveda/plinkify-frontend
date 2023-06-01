import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("https://plinkify-backend.onrender.com/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    //response is async method
    const json = await response.json();
    //if error, ok prop will be false
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //local storage save, must be strings in local storage, not json string
      localStorage.setItem("user", JSON.stringify(json));
    }
    
    //payload is json we get back from async func
    dispatch({ type: "LOGIN", payload: json });

    setIsLoading(false);
  };
  return { signup, isLoading, error };
};
