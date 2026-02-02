// authService.jsx
import api from "./api"; // use the shared axios instance

// LOGIN function — use api so interceptor adds token automatically when needed
export const login = async ({ username, password }) => {
  return await api.post("/auth/login", { username, password });
};

// REGISTER function
export const register = async (data) => {
  return await api.post("/auth/register", data);
};
