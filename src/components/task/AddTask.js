
import React, { useState } from "react";
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const AddTask = ({ projects, users, onCreateTask }) => {
  const [newTask, setNewTask] = useState({
    project: "",
    type: "",
    subject: "",
    description: "",
    startDate: "",
    endDate: "",
    assignedUsers: [],
  });

  const handleTaskChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateTask = () => {
    onCreateTask(newTask);
    setNewTask({
      project: "",
      type: "",
      subject: "",
      description: "",
      startDate: "",
      endDate: "",
      assignedUsers: [],
    });
  };

  return (
    <Box component="form" sx={{ mt: 2 }}>
      <FormControl fullWidth margin="normal">
        <InputLabel>Project</InputLabel>
        <Select
          value={newTask.project}
          onChange={handleTaskChange}
          name="project"
        >
          {projects.map((project) => (
            <MenuItem key={project.name} value={project.name}>
              {project.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="Task Type"
        variant="outlined"
        fullWidth
        margin="normal"
        name="type"
        value={newTask.type}
        onChange={handleTaskChange}
      />

      <TextField
        label="Subject"
        variant="outlined"
        fullWidth
        margin="normal"
        name="subject"
        value={newTask.subject}
        onChange={handleTaskChange}
      />

      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        margin="normal"
        name="description"
        multiline
        rows={4}
        value={newTask.description}
        onChange={handleTaskChange}
      />

      <TextField
        label="Start Date"
        type="date"
        variant="outlined"
        fullWidth
        margin="normal"
        name="startDate"
        value={newTask.startDate}
        onChange={handleTaskChange}
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        label="End Date"
        type="date"
        variant="outlined"
        fullWidth
        margin="normal"
        name="endDate"
        value={newTask.endDate}
        onChange={handleTaskChange}
        InputLabelProps={{ shrink: true }}
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Assigned Users</InputLabel>
        <Select
          multiple
          native
          value={newTask.assignedUsers}
          onChange={(e) =>
            setNewTask({
              ...newTask,
              assignedUsers: Array.from(
                e.target.selectedOptions,
                (option) => option.value
              ),
            })
          }
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateTask}
        sx={{ mt: 2 }}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default AddTask;