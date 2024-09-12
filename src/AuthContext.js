import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(localStorage.getItem("role") || "");

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role) {
      setUserRole(role);
    }
  }, []);

  const login = (role) => {
    localStorage.setItem("role", role);
    setUserRole(role);
  };

  const logout = () => {
    localStorage.removeItem("role");
    setUserRole("");
  };

  return (
    <AuthContext.Provider value={{ userRole, setUserRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};