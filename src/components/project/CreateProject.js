import React, { useState } from "react";
import { Box, TextField, Button, FormControl, InputLabel, Select, List, ListItem, IconButton, Typography } from "@mui/material";
import { Edit, Archive, Unarchive } from "@mui/icons-material";

const CreateProject = ({ users, onCreateProject }) => {
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    users: [],
  });
  const [projects, setProjects] = useState([]);
  const [archivedProjects, setArchivedProjects] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProjectIndex, setEditingProjectIndex] = useState(null);
  const [showArchived, setShowArchived] = useState(false); // Arşivlenen projeleri göstermek için

  const handleProjectChange = (e) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateOrUpdateProject = () => {
    if (isEditing) {
      const updatedProjects = [...projects];
      updatedProjects[editingProjectIndex] = newProject;
      setProjects(updatedProjects);
      setIsEditing(false);
    } else {
      setProjects([...projects, newProject]);
    }
    onCreateProject(newProject); // Proje oluşturma callback'i
    setNewProject({ name: "", description: "", users: [] });
  };

  const handleEditProject = (index) => {
    setNewProject(projects[index]);
    setIsEditing(true);
    setEditingProjectIndex(index);
  };

  const handleArchiveProject = (index) => {
    const projectToArchive = projects.splice(index, 1)[0];
    setArchivedProjects([...archivedProjects, projectToArchive]);
    setProjects([...projects]);
  };

  const handleUnarchiveProject = (index) => {
    const projectToUnarchive = archivedProjects.splice(index, 1)[0];
    setProjects([...projects, projectToUnarchive]);
    setArchivedProjects([...archivedProjects]);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
      <Box sx={{ width: "30%" }}>
        <Typography variant="h6">{isEditing ? "Update Project" : "Create Project"}</Typography>
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
          <InputLabel>Users</InputLabel>
          <Select
            multiple
            native
            value={newProject.users}
            onChange={(e) =>
              setNewProject({
                ...newProject,
                users: Array.from(
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
          onClick={handleCreateOrUpdateProject}
          sx={{ mt: 2 }}
        >
          {isEditing ? "Update Project" : "Create Project"}
        </Button>
      </Box>

      <Box sx={{ width: "65%" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6">Project List</Typography>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setShowArchived(!showArchived)}
          >
            {showArchived ? "Back to Projects" : "Archived Projects"}
          </Button>
        </Box>

        {showArchived ? (
          <List>
            {archivedProjects.length > 0 ? (
              archivedProjects.map((project, index) => (
                <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="subtitle1">{project.name}</Typography>
                    <Typography variant="body2">{project.description}</Typography>
                  </Box>
                  <IconButton onClick={() => handleUnarchiveProject(index)}>
                    <Unarchive />
                  </IconButton>
                </ListItem>
              ))
            ) : (
              <Typography>No archived projects.</Typography>
            )}
          </List>
        ) : (
          // Aktif projeleri göster
          <List>
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="subtitle1">{project.name}</Typography>
                    <Typography variant="body2">{project.description}</Typography>
                  </Box>
                  <Box>
                    <IconButton onClick={() => handleEditProject(index)}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleArchiveProject(index)}>
                      <Archive />
                    </IconButton>
                  </Box>
                </ListItem>
              ))
            ) : (
              <Typography>No projects found.</Typography>
            )}
          </List>
        )}
      </Box>
    </Box>
  );
};

export default CreateProject;
