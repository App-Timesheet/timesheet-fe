import React, { useState } from "react";
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
  IconButton,
  Grid,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import Layout from "../../Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonGroup from "../../components/button/ButtonGroup";
import { registerUser } from "../../service/authService";


const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [roles] = useState(["Admin", "Project Manager", "Standard User"]);
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: "",
    fullname: "",
    role: "",
  });
  const [filter, setFilter] = useState("");
  const [editingUserId, setEditingUserId] = useState(null); 
  const [editUser, setEditUser] = useState({
    username: "",
    password: "",
    role: "",
    isActive: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleRoleChange = (e) => {
    setNewUser({
      ...newUser,
      role: e.target.value,
    });
  };

  const handleCreateUser = async () => {
    if (newUser.username && newUser.password) {
      try {
        const userData = {
          username: newUser.username,
          password: newUser.password,
          email: newUser.email,
          nameSurname: newUser.fullname,
          role: "ADMIN,STANDARD_USER,PROJECT_MANAGER",
        };

        await registerUser(userData); 
        setUsers([...users, newUser]); 
        toast.success("Kullanıcı başarıyla oluşturuldu.");
        setNewUser({
          username: "",
          password: "",
          email: "",
          fullname: "",
          role: "",
        });
      } catch (error) {
        toast.error("Kullanıcı oluşturulamadı.");
      }
    } else {
      toast.error("Lütfen kullanıcı adı ve şifre alanlarını doldurunuz.");
    }
  };

  const handleDeleteUser = (username) => {
    setUsers(users.filter((user) => user.username !== username));
    toast.success("Kullanıcı başarıyla silindi.");
  };

  const handleEditClick = (user) => {
    setEditingUserId(user.username); 
    setEditUser({
      username: user.username,
      password: "",
      role: user.role,
      isActive: user.isActive || false,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditUser({
      ...editUser,
      [name]: value,
    });
  };

  const handleToggleActive = () => {
    setEditUser((prev) => ({ ...prev, isActive: !prev.isActive }));
  };

  const handleSaveEdit = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.username === editingUserId ? { ...user, ...editUser } : user
      )
    );
    setEditingUserId(null); 
    toast.success("Kullanıcı güncellendi.");
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(filter)
  );

  return (
    <Layout>
      <Container>
        <Paper elevation={5} sx={{ p: 4, width: "100%", maxWidth: "1200px" }}>
          <Typography variant="h4" gutterBottom align="center">
            Admin Panel
          </Typography>

          <ButtonGroup />

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
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="email"
                    value={newUser.email}
                    onChange={handleInputChange}
                  />
                  <TextField
                    label="İsim Soyisim"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="fullname"
                    value={newUser.fullname}
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
                    mb: 2,
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
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Kullanıcı Adı</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>İsim Soyisim</TableCell>
                        <TableCell>Rol</TableCell>
                        <TableCell>İşlemler</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredUsers.map((user) => (
                        <React.Fragment key={user.username}>
                          <TableRow>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.fullname}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>
                              <IconButton
                                onClick={() => handleEditClick(user)}
                                color="primary"
                              >
                                <Edit />
                              </IconButton>
                              <IconButton
                                onClick={() => handleDeleteUser(user.username)}
                                color="error"
                              >
                                <Delete />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                          {editingUserId === user.username && (
                            <TableRow>
                              <TableCell colSpan={5}>
                                <Box
                                  sx={{
                                    p: 1,
                                    backgroundColor: "#f9f9f9",
                                    borderRadius: "8px",
                                  }}
                                >
                                  <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                      <TextField
                                        label="Kullanıcı Adı"
                                        variant="outlined"
                                        fullWidth
                                        margin="dense"
                                        name="username"
                                        value={editUser.username}
                                        onChange={handleEditChange}
                                      />
                                    </Grid>
                                    <Grid item xs={4}>
                                      <TextField
                                        label="Şifre"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                        margin="dense"
                                        name="password"
                                        value={editUser.password}
                                        onChange={handleEditChange}
                                      />
                                    </Grid>
                                    <Grid item xs={4}>
                                      <FormControl fullWidth margin="dense">
                                        <InputLabel>Rol</InputLabel>
                                        <Select
                                          name="role"
                                          value={editUser.role}
                                          onChange={handleEditChange}
                                        >
                                          {roles.map((role) => (
                                            <MenuItem key={role} value={role}>
                                              {role}
                                            </MenuItem>
                                          ))}
                                        </Select>
                                      </FormControl>
                                    </Grid>
                                  </Grid>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      mt: 2,
                                    }}
                                  >
                                    <Switch
                                      checked={editUser.isActive}
                                      onChange={handleToggleActive}
                                      inputProps={{ "aria-label": "Aktif mi?" }}
                                    />
                                    <Typography sx={{ ml: 1 }}>
                                      {editUser.isActive ? "Aktif" : "Pasif"}
                                    </Typography>
                                  </Box>
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSaveEdit}
                                    sx={{ mt: 2 }}
                                  >
                                    Kaydet
                                  </Button>
                                </Box>
                              </TableCell>
                            </TableRow>
                          )}
                        </React.Fragment>
                      ))}
                      {filteredUsers.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={5} align="center">
                            Kullanıcı bulunamadı.
                          </TableCell>
                        </TableRow>
                      )}
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


