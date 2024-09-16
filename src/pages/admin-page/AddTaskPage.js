import React, { useEffect, useState, useContext } from "react";
import { Container, Paper, Typography } from "@mui/material";
import Layout from "../../Layout";
import AddTask from "../../Components/task/AddTask";
import { getAllProjects, getProjectsByUserId } from "../../service/projectService";
import { getAllUsers } from "../../service/userService";
import { createTask, getAllTasks, getTasksByUserId } from "../../service/taskService";
import { AuthContext } from "../../AuthContext";

const AddTaskPage = () => {
  const { userRole, userId } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchProjectsAndUsers = async () => {
      try {
        let projectList;
        if (userRole === "ADMIN") {
          projectList = await getAllProjects();
        } else if (userRole === "PROJECT_MANAGER" || userRole === "STANDARD_USER") {
          projectList = await getProjectsByUserId(userId);
        }

        setProjects(projectList || []);
        const userList = await getAllUsers();
        setUsers(userList || []);
      } catch (error) {
        console.error("Veri çekme hatası:", error.message || error);
      }
    };

    fetchProjectsAndUsers();
  }, [userRole, userId]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        let taskList;
        if (userRole === "ADMIN") {
          taskList = await getAllTasks();
        } else {
          taskList = await getTasksByUserId(userId);
        }
        setTasks(taskList || []);
      } catch (error) {
        console.error("Task verisi çekme hatası:", error.message || error);
      }
    };

    fetchTasks();
  }, [userRole, userId]);

  const handleCreateTask = async (newTask) => {
    try {
      const createdTask = await createTask(newTask);
      console.log("Task başarıyla oluşturuldu:", createdTask);
    } catch (error) {
      console.error("Task oluşturulamadı:", error.message);
    }
  };

  return (
    <Layout>
      <Container>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            Task Oluştur
          </Typography>
          <AddTask projects={projects} users={users} onCreateTask={handleCreateTask} tasks={tasks} />
        </Paper>
      </Container>
    </Layout>
  );
};

export default AddTaskPage;
