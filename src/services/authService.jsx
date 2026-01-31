// authService.jsx
import axios from "axios";  // make sure axios is imported
import api from "./api";    // your custom axios instance for baseURL

// LOGIN function
export const login = async ({ username, password }) => {
  // Use full backend URL
  return await axios.post(
    "https://localhost:7020/api/auth/login",
    { username, password }
  );
};

// REGISTER function
export const register = async (data) => {
  // Use your api instance which has baseURL set
  return await api.post("/auth/register", data);
};
