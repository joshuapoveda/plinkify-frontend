import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import "./App.css";
import Landing from "./pages/Landing";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="https://plinkify-backend.onrender.com/api/user/login" />}
            />

            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="https://plinkify-backend.onrender.com/api/plinks" />}
            />

            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="https://plinkify-backend.onrender.com/api/plinks" />}
            />
          </Routes>
        </div>
      </BrowserRouter>

      <Landing></Landing>
    </div>
  );
}

export default App;
