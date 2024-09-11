import React, { useState } from "react";
import { Container, Typography, Paper, Box, Button } from "@mui/material";
import Layout from "../../Layout";
import AddTask from "../../components/task/AddTask";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "../../components/button/ButtonGroup";

const AddTaskPage = () => {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleCreateTask = (newTask) => {};

  return (
    <Layout>
      <Container>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom align="center">Add Task</Typography>
          <ButtonGroup />

          <AddTask
            projects={projects}
            users={users}
            onCreateTask={handleCreateTask}
          />
        </Paper>
      </Container>
    </Layout>
  );
};

export default AddTaskPage;
