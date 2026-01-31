import { createContext, useState } from "react";
import { getUserFromToken } from "../utils/jwtHelper";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getUserFromToken());

  const loginUser = (token) => {
    localStorage.setItem("token", token);
    setUser(getUserFromToken());
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
