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
              element={!user ? <Landing /> : <Home/>}
            />

            <Route
              path="/login"
              element={!user ? <Login /> : <Home/>}
            />

            <Route
              path="/signup"
              element={!user ? <Signup /> : <Home />}
            />
            <Route
              path="/main"
              element={!user ? <Navigate to="/" />: <Home/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

