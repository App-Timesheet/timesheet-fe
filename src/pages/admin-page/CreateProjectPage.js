
import React, { useState } from "react";
import { Container, Typography, Paper, Box, Button } from "@mui/material";
import Layout from "../../Layout";
import CreateProject from "../../components/project/CreateProject";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "../../components/button/ButtonGroup";

const CreateProjectPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleCreateProject = (newProject) => {
  
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
