import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(localStorage.getItem("role") || "");
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");

  useEffect(() => {
    const role = localStorage.getItem("role");
    const id = localStorage.getItem("userId");
    if (role) {
      setUserRole(role);
    }
    if (id) {
      setUserId(id);
    }
  }, []);

  const login = (role, id) => {
    localStorage.setItem("role", role);
    localStorage.setItem("userId", id);
    setUserRole(role);
    setUserId(id);
  };

  const logout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    setUserRole("");
    setUserId("");
  };

  return (
    <AuthContext.Provider value={{ userRole, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
