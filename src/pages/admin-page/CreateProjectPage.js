import { useEffect, useState, useContext } from "react";
import { Container, Typography, Paper } from "@mui/material";
import Layout from "../../Layout";
import CreateProject from "../../Components/project/CreateProject";
import ButtonGroup from "../../Components/button/ButtonGroup";
import {
  getAllProjects,
  getProjectsByUserId,
  createProject,
} from "../../service/projectService";
import { getAllUsers } from "../../service/userService";
import { AuthContext } from "../../AuthContext"; 

const CreateProjectPage = () => {
  const { userRole, userId } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjectsAndUsers = async () => {
      try {
        if (userRole === "ADMIN") {
          const projectList = await getAllProjects();
          setProjects(projectList || []);
        }

        if (userRole === "PROJECT_MANAGER" && userId) {
          const projectList = await getProjectsByUserId(userId);
          setProjects(projectList || []);
        }

        const userList = await getAllUsers(); 
        setUsers(userList || []);
      } catch (error) {
      }
      
    };

    fetchProjectsAndUsers();
  }, [userRole, userId]);

  const handleCreateProject = async (newProject) => {
    try {
      const createdProject = await createProject(newProject);
      setProjects((prevProjects) => [...prevProjects, createdProject]);
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
    }
    
  };

  return (
    <Layout>
      <Container>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            Proje Oluşturma ve Listeleme
          </Typography>
          <ButtonGroup />
          <CreateProject
            users={users}
            projects={projects}
            onCreateProject={handleCreateProject}
          />
        </Paper>
      </Container>
    </Layout>
  );
};

export default CreateProjectPage;
