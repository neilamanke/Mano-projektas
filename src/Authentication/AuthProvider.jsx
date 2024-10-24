import {createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    permissions: [],
  });
  const navigate = useNavigate();
  const location = useLocation();

  const login = (person) => {
    if (person === "admin") {
      setUser({ username: person, permissions: ["updata_product"] });
    } else {
      setUser({
        username: person,
        permissions: ["read_products"],
      });
    }
    navigate(location.state?.path || "/profile");
  };

  const logout = () => {
    setUser({
        username: "", 
        permissions: [] 
    });
    navigate("/");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
