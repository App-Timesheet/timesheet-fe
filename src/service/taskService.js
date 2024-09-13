import apiClient from "../interceptor";

export const createTask = async (taskData) => {
  try {
    const response = await apiClient.post("/api/tasks/newTask", taskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllTasks = async () => {
  try {
    const response = await apiClient.get("/api/tasks/getAllTasks");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTasksByUserId = async (userId) => {
  try {
    const response = await apiClient.get(`/api/tasks/getTaskByUserId/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTask = async (taskId, updatedTask) => {
  try {
    const response = await apiClient.put(`/api/tasks/updateTask/${taskId}`, updatedTask);
    return response.data;
  } catch (error) {
    throw error;
  }
};
