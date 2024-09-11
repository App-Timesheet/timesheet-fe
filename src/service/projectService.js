import apiClient from '../interceptor';

export const createProject = async (projectData) => {
  try {
    const response = await apiClient.post('/api/projects/newProject', projectData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllProjects = async () => {
  try {
    const response = await apiClient.get('/api/projects/getAllProjects');
    return response.data;
  } catch (error) {
    throw error;
  }
};
