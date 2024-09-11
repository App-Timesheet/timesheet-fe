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
import ButtonGroup from "../../components/button/ButtonGroup";
import { registerUser, getAllUsers } from "../../service/userService";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [roles] = useState(["PROJECT_MANAGER", "STANDARD_USER", "ADMIN"]);
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: "",
    nameSurname: "",
    role: "",
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await getAllUsers();
        setUsers(userList || []);
      } catch (error) {
        toast.error("Kullanıcılar getirilemedi.");
      }
    };
    fetchUsers();
  }, []);

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
        const response = await registerUser({
          username: newUser.username,
          password: newUser.password,
          email: newUser.email,
          nameSurname: newUser.nameSurname,
          role: newUser.role,
        });
        setUsers([...users, response]);
        toast.success("Kullanıcı başarıyla oluşturuldu.");
        setNewUser({
          username: "",
          password: "",
          email: "",
          nameSurname: "",
          role: "",
        });
      } catch (error) {
        toast.error("Kullanıcı oluşturulurken bir hata oluştu.");
      }
    } else {
      toast.error("Lütfen kullanıcı adı ve şifre alanlarını doldurunuz.");
    }
  };

  const handleDeleteUser = (username) => {
    setUsers(users.filter((user) => user.username !== username));
    toast.success("Kullanıcı başarıyla silindi.");
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const filteredUsers = users.filter((user) => {
    return user.username && user.username.toLowerCase().includes(filter);
  });

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
                    name="nameSurname"
                    value={newUser.nameSurname}
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
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredUsers.length > 0 ? (
                        filteredUsers.map((user) => (
                          <TableRow key={user.username}>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.nameSurname}</TableCell>
                            <TableCell>{user.role}</TableCell>
                          </TableRow>
                        ))
                      ) : (
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
