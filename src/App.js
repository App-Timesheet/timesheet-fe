
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login-page/login.js";
import AdminPage from "./pages/admin-page/AddUser.js";
import AboutPage from "./pages/quick-links/AboutPage.js";
import ContactPage from "./pages/quick-links/ContactPage.js";
import ServicesPage from "./pages/quick-links/ServicesPage.js";
import SupportPage from "./pages/quick-links/SupportPage.js";
import CreateProjectPage from "./pages/admin-page/CreateProjectPage.js";
import AddTaskPage from "./pages/admin-page/AddTaskPage.js";
import { AuthContext } from "./AuthContext.js";


function App() {
  const { userRole } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        {userRole === "ADMIN" && (
          <>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/create-project" element={<CreateProjectPage />} />
            <Route path="/add-task" element={<AddTaskPage />} />
          </>
        )}

        {userRole === "PROJECT_MANAGER" && (
          <>
            <Route path="/create-project" element={<CreateProjectPage />} />
            <Route path="/add-task" element={<AddTaskPage />} />
          </>
        )}

        {userRole === "STANDARD_USER" && (
          <Route path="/add-task" element={<AddTaskPage />} />
        )}

        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/support" element={<SupportPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;