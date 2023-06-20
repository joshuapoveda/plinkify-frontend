import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import "./App.css";

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
              element={<Landing/>}
            />

            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/home"/>}
            />

            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/home"/>}
            />
            <Route
              path="/home"
              element={user ? <Home/> : <Navigate to="/"/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

