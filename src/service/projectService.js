import apiClient from "../interceptor";

// Proje ekleme

export const createProject = async (projectData) => {
  try {
    const response = await apiClient.post("/api/projects/newProject", projectData, {
      headers: {
        // "Content-Type" başlığını ayarlamayın, tarayıcı otomatik ayarlayacaktır
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};



// Tüm projeleri listeleme
export const getAllProjects = async () => {
  try {
    const response = await apiClient.get("/api/projects/getAllProjects");
    return response.data;
  } catch (error) {
    throw error;
  }
};









