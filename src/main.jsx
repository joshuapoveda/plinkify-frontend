import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PlinksContextProvider } from "./context/PlinkContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PlinksContextProvider>
        <App />
      </PlinksContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
