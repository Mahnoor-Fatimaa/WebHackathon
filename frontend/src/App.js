import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./index.css"; // includes Tailwind directives

// Import all your components/pages
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import FarmerDashboard from "./pages/FarmerDashboard";
import Forum from "./pages/Forum";
import Weather from "./pages/Weather";
import Price from "./pages/Price";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-dark dark:text-white font-display">
        <Routes>
          {/* Default Route → Login */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Dashboards */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/farmer" element={<FarmerDashboard />} />

          {/* Functional Modules */}
          <Route path="/forum" element={<Forum />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/price" element={<Price />} />

          {/* Fallback route */}
          <Route path="*" element={<h1 className="text-center mt-20 text-2xl font-bold">404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;