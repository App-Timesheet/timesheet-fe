import apiClient from '../interceptor';

export const createProject = async (projectData) => {
  try {
    const response = await apiClient.post('/api/projects/newProject', projectData);
    return response.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};
