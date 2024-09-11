
import { useEffect, useState } from "react";
import { Container, Typography, Paper } from "@mui/material";
import Layout from "../../Layout";
import CreateProject from "../../components/project/CreateProject";
import ButtonGroup from "../../components/button/ButtonGroup";
import { createProject } from "../../service/projectService";
import { getAllUsers } from "../../service/userService";

const CreateProjectPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await getAllUsers();
        console.log(userList); 
        setUsers(userList); 
      } catch (error) {
        console.error("Kullanıcılar getirilemedi:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleCreateProject = async (newProject) => {
    const projectData = {
      name: newProject.name,
      description: newProject.description,
      userNames: [newProject.username], 
      file: newProject.file,
    };

    console.log("Gönderilen proje verisi:", projectData); 
    
    try {
      await createProject(projectData);
    } catch (error) {
      console.error("Proje oluşturulamadı:", error);
    }
  };

  return (
    <Layout>
      <Container>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4">Create Project</Typography>
          <ButtonGroup />
          <CreateProject users={users} onCreateProject={handleCreateProject} />
        </Paper>
      </Container>
    </Layout>
  );
};

export default CreateProjectPage;

