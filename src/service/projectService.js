import apiClient from "../interceptor";

export const createProject = async (projectData) => {
  try {
    const response = await apiClient.post(
      "/api/projects/newProject",
      projectData,
      {
        headers: {},
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllProjects = async () => {
  try {
    const response = await apiClient.get("/api/projects/getAllProjects");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProjectsByUserId = async (userId) => {
  try {
    const response = await apiClient.get(
      `/api/projects/getProjectsByUserId/${userId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
