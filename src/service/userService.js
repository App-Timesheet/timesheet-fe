import apiClient from "../interceptor";

export const registerUser = async (newUser) => {
  try {
    const response = await apiClient.post("/api/register", newUser);
    return response.data;
  } catch (error) {
    console.error("Kullanıcı kaydedilemedi:", error);
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await apiClient.get("/api/users/getAllUsers");
    console.log("API'den gelen cevap: ", response); 
    return response.data;
  } catch (error) {
    console.error("Kullanıcılar getirilemedi:", error);
    throw error;
  }
};