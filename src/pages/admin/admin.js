import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Layout from "../../Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [roles, setRoles] = useState([
    "Admin",
    "Project Manager",
    "Standard User",
  ]);
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    role: "",
    isActive: true,
    projects: [],
  });
  const [filter, setFilter] = useState("");

  // useEffect(() => {
   
  // }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setNewUser({
      ...newUser,
      isActive: e.target.checked,
    });
  };

  const handleRoleChange = (e) => {
    setNewUser({
      ...newUser,
      role: e.target.value,
    });
  };

  const handleProjectSelection = (e) => {
    const selectedProjects = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setNewUser({
      ...newUser,
      projects: selectedProjects,
    });
  };

  const handleCreateUser = () => {
    if (newUser.username && newUser.password) {
      setUsers([...users, newUser]);
      toast.success("User created successfully");
      setNewUser({
        username: "",
        password: "",
        role: "",
        isActive: true,
        projects: [],
      });
    } else {
      toast.error("Please fill in the username and password.");
    }
  };
  
  const handleDeleteUser = (username) => {
    setUsers(users.filter((user) => user.username !== username));
    toast.success("User deleted successfully");
  };
  

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(filter)
  );

  return (
    <Layout>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Paper elevation={5} sx={{ p: 4, width: "100%", maxWidth: "1200px" }}>
          <Typography variant="h4" gutterBottom align="center">
            Admin Panel
          </Typography>
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
          >
            <Box
              sx={{
                flex: 1,
                marginRight: { md: 2 },
                marginBottom: { xs: 2, md: 0 },
              }}
            >
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6">New User</Typography>
                <Box component="form" sx={{ mt: 2 }}>
                  <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="username"
                    value={newUser.username}
                    onChange={handleInputChange}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="password"
                    value={newUser.password}
                    onChange={handleInputChange}
                  />
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Role</InputLabel>
                    <Select value={newUser.role} onChange={handleRoleChange}>
                      {roles.map((role) => (
                        <MenuItem key={role} value={role}>
                          {role}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={newUser.isActive}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="Active"
                  />
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Projects</InputLabel>
                    <Select
                      multiple
                      native
                      value={newUser.projects}
                      onChange={handleProjectSelection}
                      inputProps={{
                        id: "select-multiple-native",
                      }}
                    >
                      {projects.map((project) => (
                        <option key={project.id} value={project.id}>
                          {project.name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <Box sx={{ mt: 3 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleCreateUser}
                    >
                      Create
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Box>
            <Box sx={{ flex: 2 }}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">Users</Typography>
                  <TextField
                    label="Filter"
                    variant="outlined"
                    size="small"
                    onChange={handleFilterChange}
                    sx={{ width: "200px" }}
                  />
                </Box>
                <TableContainer sx={{ mt: 2 }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>Projects</TableCell>
                        <TableCell>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredUsers.map((user) => (
                        <TableRow key={user.username}>
                          <TableCell>{user.username}</TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell>
                            {user.isActive ? "Yes" : "No"}
                          </TableCell>
                          <TableCell>{user.projects.join(", ")}</TableCell>
                          <TableCell>
                            <Button
                              variant="outlined"
                              color="error"
                              onClick={() => handleDeleteUser(user.username)}
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Box>
          </Box>
        </Paper>
      </Container>
      <ToastContainer />

    </Layout>
  );
};

export default AdminPage;
