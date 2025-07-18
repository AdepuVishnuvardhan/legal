import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Features from "./pages/Features";
import PersonalProfile from "./pages/PersonalProfile";
import Home from "./pages/Home";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      {/* Show Navbar only if authenticated */}
      {isAuthenticated && <Navbar onLogout={handleLogout} />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        {isAuthenticated ? (
          <>
            <Route path="/home" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/features" element={<Features />} />
            <Route path="/personal-profile" element={<PersonalProfile />} />
          </>
        ) : (
          <Route
            path="*"
            element={<h1>Please log in to access this page.</h1>}
          />
        )}
      </Routes>
    </Router>
  );
};

export default App;
