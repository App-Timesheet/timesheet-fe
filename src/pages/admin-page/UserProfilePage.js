import React, { useState, useContext } from "react";
import { Container, TextField, Button, Paper, Typography, Box } from "@mui/material";
import { AuthContext } from "../../AuthContext";
import { updateUserDetails } from "../../service/userService";
import { toast } from "react-toastify";
import Layout from "../../Layout";

const UserProfilePage = () => {
  const { userId } = useContext(AuthContext); 
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    nameSurname: "",
    password: "", 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleUpdateUser = async () => {
    if (!userDetails.username || !userDetails.email || !userDetails.nameSurname) {
      toast.error("Lütfen gerekli tüm alanları doldurun.");
      return;
    }

    try {
      const updateData = { ...userDetails };

      if (!updateData.password) {
        delete updateData.password;
      }

      await updateUserDetails(userId, updateData);
      toast.success("Kullanıcı bilgileri başarıyla güncellendi.");
    } catch (error) {
      toast.error("Bilgiler güncellenirken bir hata oluştu.");
    }
  };

  return (
    <Layout>
      <Container
        sx={{
          maxWidth: "600px",
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: "600px" }}>
          <Typography variant="h4" gutterBottom align="center">
            Kullanıcı Bilgileri
          </Typography>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              label="Kullanıcı Adı"
              name="username"
              value={userDetails.username}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
              placeholder=""
            />
            <TextField
              label="Email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
              placeholder=""
            />
            <TextField
              label="İsim Soyisim"
              name="nameSurname"
              value={userDetails.nameSurname}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
              placeholder=""
            />
            <TextField
              label="Şifre"
              name="password"
              type="password"
              value={userDetails.password}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              placeholder="Şifrenizi değiştirmek için girin"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpdateUser}
              sx={{ mt: 3 }}
            >
              Güncelle
            </Button>
          </Box>
        </Paper>
      </Container>
    </Layout>
  );
};

export default UserProfilePage;
