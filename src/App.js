import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login.js";
import AdminPage from "./pages/admin/admin";
import AboutPage from "./pages/quickLinks/AboutPage.js";
import ContactPage from "./pages/quickLinks/ContactPage.js";
import ServicesPage from "./pages/quickLinks/ServicesPage.js";
import SupportPage from "./pages/quickLinks/SupportPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
