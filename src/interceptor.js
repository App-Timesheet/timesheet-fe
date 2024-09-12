import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://timesheet-be-latest.onrender.com/",
  timeout: 60000,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // JWT token'ı localStorage'dan al
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Token'ı Authorization header'a ekle
    }

    // Eğer veriler FormData ise Content-Type ayarlama, tarayıcı otomatik ayarlayacak
    if (!(config.data instanceof FormData)) {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
