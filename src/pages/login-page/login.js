import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import {
  Container,
  Typography,
  Paper,
  Box,
  AppBar,
  Toolbar,
  TextField,
  Button,
} from "@mui/material";

import logo from "../../assets/images/logo.png";
import login_left from "../../assets/images/login_left.png";
import login_photo1 from "../../assets/images/login_photo1.png";
import login_photo2 from "../../assets/images/login_photo2.png";
import lg from "../../assets/images/lg.png";
import hp from "../../assets/images/hp.png";
import amazon from "../../assets/images/amazon.jpg";
import hepsi from "../../assets/images/hepsi.png";
import netflix from "../../assets/images/netflix.png";
import mercedes from "../../assets/images/mercedes.png";
import Layout from "../../Layout";
import { loginContent } from "../../constants/content";
import { login } from "../../service/authService"; 
import { useNavigate } from "react-router-dom"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUserRole } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await login(username, password); 
      localStorage.setItem("token", result.token); 
      localStorage.setItem("role", result.role); 
      localStorage.setItem("userId", result.id); 
      localStorage.setItem("isLoggedIn", "true"); 
      setUserRole(result.role); 

      if (result.role === "ADMIN") {
        navigate("/admin"); 
      } else if (result.role === "PROJECT_MANAGER") {
        navigate("/create-project"); 
        navigate("/add-task"); 
      }
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    }
  };
  
  

  return (
    <Layout>
      <>
        <Box sx={{ backgroundColor: "#0164ff", py: { xs: 10, sm: 15 } }}>
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                mb: { xs: 4, md: 0 },
                display: { xs: "none", md: "block" },
              }}
            >
              <Typography
                variant="h4"
                color="white"
                sx={{ fontWeight: "bold" }}
                gutterBottom
              >
                Project management <br /> made easy
              </Typography>
              <Typography variant="subtitle1" color="white" gutterBottom>
                Gain clarity, save time and take control - with less effort.
                <br /> Unlock your productivity potential with the modern-day
                Timesheet.
              </Typography>
              <img
                src={login_left}
                alt="Illustration"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
            </Box>
            <Paper elevation={3} sx={{ p: 4, maxWidth: "400px", mx: "auto" }}>
              <Typography variant="h4" align="center" gutterBottom>
                Login
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 3 }}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Box>
            </Paper>
          </Container>
        </Box>

        <Box sx={{ backgroundColor: "white", py: { xs: 5, sm: 8 } }}>
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src={login_photo1}
              alt="Example Image 1"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                marginBottom: { xs: "20px", md: "40px" },
              }}
            />
            <Box
              sx={{
                maxWidth: { xs: "100%", md: "50%" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h4" gutterBottom>
                Bring the big picture into view
              </Typography>
              <Typography>{loginContent.featureDescription}</Typography>
            </Box>
          </Container>
        </Box>

        <Box sx={{ backgroundColor: "white", py: { xs: 5, sm: 8 } }}>
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row-reverse" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src={login_photo2}
              alt="Example Image 2"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                marginBottom: { xs: "20px", md: "40px" },
              }}
            />
            <Box
              sx={{
                maxWidth: { xs: "100%", md: "50%" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h4" gutterBottom>
                Make work fun
              </Typography>
              <Typography>
                Every team is unique. Work the way you want with customizable
                backgrounds that showcase your personality.
              </Typography>
            </Box>
          </Container>
        </Box>

        <Box sx={{ backgroundColor: "white", py: { xs: 5, sm: 8 } }}>
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src={login_photo1}
              alt="Example Image 1"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                marginBottom: { xs: "20px", md: "40px" },
              }}
            />
            <Box
              sx={{
                maxWidth: { xs: "100%", md: "50%" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h4" gutterBottom>
                Bring the big picture into view
              </Typography>
              <Typography>{loginContent.featureDescription}</Typography>
            </Box>
          </Container>
        </Box>

        <Box
          sx={{
            backgroundColor: "#0164ff",
            py: { xs: 5, sm: 8 },
            textAlign: "center",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              color="white"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Move faster, build better
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#03a9f4",
                "&:hover": {
                  backgroundColor: "#029de0",
                },
                mt: 1,
              }}
            >
              Learn More
            </Button>
          </Container>
        </Box>

        <Box sx={{ py: { xs: 8, sm: 10 } }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              align="center"
              color="black"
              sx={{ fontWeight: "bold" }}
            >
              Trusted by over 250,000 customers world-wide
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                mt: 2,
              }}
            >
              <img
                src={hp}
                alt="hp"
                style={{ width: "auto", height: "50px", margin: "10px" }}
              />
              <img
                src={amazon}
                alt="amazon"
                style={{ width: "auto", height: "50px", margin: "10px" }}
              />
              <img
                src={netflix}
                alt="netlifx"
                style={{ width: "auto", height: "50px", margin: "10px" }}
              />
              <img
                src={lg}
                alt="lg"
                style={{ width: "auto", height: "50px", margin: "10px" }}
              />
              <img
                src={hepsi}
                alt="hepsi"
                style={{ width: "auto", height: "50px", margin: "10px" }}
              />
              <img
                src={mercedes}
                alt="mercedes"
                style={{ width: "auto", height: "50px", margin: "10px" }}
              />
            </Box>
          </Container>
        </Box>
      </>
    </Layout>
  );
}

export default Login;