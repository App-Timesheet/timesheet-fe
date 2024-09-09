import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login-page/login.js";
import AdminPage from "./pages/admin-page/AddUser.js";
import AboutPage from "./pages/quick-links/AboutPage.js";
import ContactPage from "./pages/quick-links/ContactPage.js";
import ServicesPage from "./pages/quick-links/ServicesPage.js";
import SupportPage from "./pages/quick-links/SupportPage.js";
import CreateProjectPage from "./pages/admin-page/CreateProjectPage.js"; 
import AddTaskPage from "./pages/admin-page/AddTaskPage.js"; 

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
        <Route path="/create-project" element={<CreateProjectPage />} />
        <Route path="/add-task" element={<AddTaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
