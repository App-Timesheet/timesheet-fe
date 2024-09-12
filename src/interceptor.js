import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://timesheet-be-latest.onrender.com",
  timeout: 60000,
  headers: {
    "Content-Type": "multipart/form-data", 
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // JWT token'ı localStorage'dan al
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Token'ı Authorization header'a ekle
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
