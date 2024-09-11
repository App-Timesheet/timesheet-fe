import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Edit, Archive } from "@mui/icons-material";
import { createProject } from '../../service/projectService'; 

const CreateProject = ({ users, onCreateProject }) => {
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    usernames: [], 
    file: null,
  });
  const [projects, setProjects] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProjectIndex, setEditingProjectIndex] = useState(null);
  const [fileName, setFileName] = useState("Dosya seçilmedi");

  const handleProjectChange = (e) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProject({
        ...newProject,
        file: file,
      });
      setFileName(file.name);
    }
  };

  const handleUserNameChange = (e) => {
    const selectedUsernames = e.target.value;
    setNewProject({
      ...newProject,
      usernames: selectedUsernames, 
    });
  };

  const handleCreateOrUpdateProject = async () => {
    const formData = new FormData();
    formData.append("name", newProject.name);
    formData.append("description", newProject.description);
    formData.append("userNames", newProject.usernames); 
    if (newProject.file) {
      formData.append("file", newProject.file); 
    }

    console.log("Gönderilen proje verisi:", formData);

    try {
      await createProject(formData);
    } catch (error) {
      console.error("Proje oluşturulamadı:", error);
    }

    setNewProject({ name: "", description: "", usernames: [], file: null });
    setFileName("Dosya seçilmedi");
  };

  const handleEditProject = (index) => {
    setNewProject(projects[index]);
    setIsEditing(true);
    setEditingProjectIndex(index);
  };

  const handleArchiveProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
      <Box sx={{ width: "30%" }}>
        <Typography variant="h6">
          {isEditing ? "Update Project" : "Create Project"}
        </Typography>
        <TextField
          label="Project Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={newProject.name}
          onChange={handleProjectChange}
        />
        <TextField
          label="Project Description"
          variant="outlined"
          fullWidth
          margin="normal"
          name="description"
          value={newProject.description}
          onChange={handleProjectChange}
          multiline
          rows={4}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="user-select-label">Kullanıcılar</InputLabel>
          <Select
            labelId="user-select-label"
            multiple
            value={newProject.usernames}
            onChange={handleUserNameChange}
            renderValue={(selected) => selected.join(", ")} 
          >
            {users.map((user) => (
              <MenuItem key={user.username} value={user.username}>
                {user.nameSurname}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Typography variant="body1" sx={{ mr: 2 }}>
            Dosyalar:
          </Typography>
          <Button variant="contained" component="label">
            Dosya Seç
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
          <Typography variant="body2" sx={{ ml: 2 }}>
            {fileName}
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateOrUpdateProject}
          sx={{ mt: 2 }}
        >
          {isEditing ? "Update Project" : "Create Project"}
        </Button>
      </Box>

      <Box sx={{ width: "65%" }}>
        <Typography variant="h6">Project List</Typography>
        <TableContainer component={Paper}>
          <Table aria-label="projects table">
            <TableHead>
              <TableRow>
                <TableCell>Project Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {project.name}
                    </TableCell>
                    <TableCell>{project.description}</TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => handleEditProject(index)}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => handleArchiveProject(index)}>
                        <Archive />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    No projects found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default CreateProject;
