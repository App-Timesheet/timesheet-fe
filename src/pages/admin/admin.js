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
      alert("Kullanıcı oluşturuldu");
      setNewUser({
        username: "",
        password: "",
        role: "",
        isActive: true,
        projects: [],
      });
    } else {
      alert("Lütfen kullanıcı adı ve şifreyi doldurun.");
    }
  };

  const handleDeleteUser = (username) => {
    setUsers(users.filter((user) => user.username !== username));
    alert("Kullanıcı silindi");
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
                <Typography variant="h6">Yeni Kullanıcı</Typography>
                <Box component="form" sx={{ mt: 2 }}>
                  <TextField
                    label="Kullanıcı Adı"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="username"
                    value={newUser.username}
                    onChange={handleInputChange}
                  />
                  <TextField
                    label="Şifre"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="password"
                    value={newUser.password}
                    onChange={handleInputChange}
                  />
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Rol</InputLabel>
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
                    label="Aktif"
                  />
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Projeler</InputLabel>
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
                      Oluştur
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
                  <Typography variant="h6">Kullanıcılar</Typography>
                  <TextField
                    label="Filtrele"
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
                        <TableCell>Kullanıcı Adı</TableCell>
                        <TableCell>Rol</TableCell>
                        <TableCell>Aktif</TableCell>
                        <TableCell>Projeler</TableCell>
                        <TableCell>İşlemler</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredUsers.map((user) => (
                        <TableRow key={user.username}>
                          <TableCell>{user.username}</TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell>
                            {user.isActive ? "Evet" : "Hayır"}
                          </TableCell>
                          <TableCell>{user.projects.join(", ")}</TableCell>
                          <TableCell>
                            <Button
                              variant="outlined"
                              color="error"
                              onClick={() => handleDeleteUser(user.username)}
                            >
                              Sil
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
    </Layout>
  );
};

export default AdminPage;
