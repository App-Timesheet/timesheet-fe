import apiClient from "../interceptor";

const login = async (username, password) => {
  try {
    const response = await apiClient.post("/api/authenticate", {
      username,
      password,
    });
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export { login };