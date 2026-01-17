import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashbord from "./components/Dashboard/EmployeeDashbord";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/Authprovider";

const App = () => {
  const [user, setUser] = useState(null);
  const AuthData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogin = (email, password) => {
    // Admin Login
    if (email === "admin@gmail.com" && password === "123") {
      const adminUser = { role: "admin", email };
      setUser(adminUser);
      localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
      return;
    }

    // Employee Login
    if (AuthData) {
      const employee = AuthData.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        const empUser = { role: "employee", ...employee };
        setUser(empUser);
        localStorage.setItem("loggedInUser", JSON.stringify(empUser));
        return;
      }
    }

    alert("Invalid credentials");
  };

  // 🔥 LOGOUT FEATURE
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === "admin" ? (
        <AdminDashboard user={user} handleLogout={handleLogout} />
      ) : (
        <EmployeeDashbord user={user} handleLogout={handleLogout} />
      )}
    </>
  );
};

export default App;
