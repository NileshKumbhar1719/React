import { createContext, useState, useEffect } from "react";
import { getUserFromToken } from "../utils/jwtHelper";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user on app start (refresh-safe)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedUser = getUserFromToken(token);
      setUser(decodedUser);
    }
  }, []);

  // Login (save token + decode user)
  const loginUser = (token) => {
    localStorage.setItem("token", token);
    const decodedUser = getUserFromToken(token);
    setUser(decodedUser);
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin: user?.role === "Admin",
        isUser: user?.role === "User",
        loginUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
