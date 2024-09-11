import React, { useState } from "react";
import { Container, Typography, Paper } from "@mui/material";
import Layout from "../../Layout";
import CreateProject from "../../components/project/CreateProject";
import ButtonGroup from "../../components/button/ButtonGroup";
import { createProject } from "../../service/projectService"; 

const CreateProjectPage = () => {
  const [users, setUsers] = useState([]);
  
  const handleCreateProject = async (newProject) => {
    try {
      const projectData = {
        name: newProject.name,
        description: newProject.description,
        userIds: newProject.users,
        file: newProject.file,
      };
      
      const response = await createProject(projectData);
      console.log('Project created successfully:', response);
    } catch (error) {
      console.error('Error creating project:', error);
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
