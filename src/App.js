import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login-page/login";
import AdminPage from "./pages/admin-page/AddUser";
import AboutPage from "./pages/quick-links/AboutPage";
import ContactPage from "./pages/quick-links/ContactPage";
import ServicesPage from "./pages/quick-links/ServicesPage";
import SupportPage from "./pages/quick-links/SupportPage";
import CreateProjectPage from "./pages/admin-page/CreateProjectPage";
import AddTaskPage from "./pages/admin-page/AddTaskPage";
import AdminMessagesPage from './pages/admin-page/MessagesPage'; 
import UserProfilePage from './pages/admin-page/UserProfilePage'; 

import { AuthContext } from "./AuthContext";

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
            <Route path="/message" element={<AdminMessagesPage />} />
            <Route path="/update-user" element={<UserProfilePage />} />
          </>
        )}

        {userRole === "PROJECT_MANAGER" && (
          <>
            <Route path="/create-project" element={<CreateProjectPage />} />
            <Route path="/add-task" element={<AddTaskPage />} />
          </>
        )}

        {userRole === "STANDARD_USER" && (
          <>
            <Route path="/add-task" element={<AddTaskPage />} />
            <Route path="/update-user" element={<UserProfilePage />} /> 
          </>
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
