import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7020/api", // your backend
});

// Add JWT automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config
});

export const getBuses = () => api.get("/bus");
export const getBusById = (id) => api.get(`/bus/${id}`);
export const createBus = (busData) => api.post("/bus", busData);
export const updateBus = (id, busData) => api.put(`/bus/${id}`, busData);
export const deleteBus = (id) => api.delete(`/bus/${id}`);

export default api;

