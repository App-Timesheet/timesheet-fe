import apiClient from "../interceptor";

export const registerUser = async (newUser) => {
  try {
    const response = await apiClient.post("/api/register", newUser);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await apiClient.get("/api/users/getAllUsers");
    return response.data;
  } catch (error) {
    throw error;
  }
};

