import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Tooltip, Drawer, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MessageIcon from "@mui/icons-material/Message";
import WorkIcon from "@mui/icons-material/Work";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));

  const handleLogout = () => {
    localStorage.clear();  
    navigate("/"); 
    window.location.reload();  
  };

  const handleLogoClick = () => {
    navigate("/login");  
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "User", icon: <PersonIcon />, path: "/admin" },
    { text: "Projects", icon: <WorkIcon />, path: "/create-project" },
    { text: "Tasks", icon: <AssignmentIcon />, path: "/add-task" },
    { text: "Messages", icon: <MessageIcon />, path: "/message" },
    { text: "Update Profile", icon: <PersonIcon />, path: "/update-user" },  
  ];
  
  return (
    <>
      <AppBar
        position="static"
        color="default"
        sx={{ backgroundColor: "#ffffff", boxShadow: "none" }}
      >
        <Toolbar>
          {isLoggedIn && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer", ml: 2 }}
            onClick={handleLogoClick}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ height: "50px", width: "auto" }}
            />
            <Typography variant="h6" color="inherit" sx={{ ml: 2 }}>
              TimeSheet
            </Typography>
          </Box>

          <Box sx={{ ml: "auto" }}>
            {isLoggedIn && location.pathname !== "/" && (
              <Tooltip title="Çıkış Yap" arrow>
                <IconButton
                  color="primary"
                  onClick={handleLogout}
                  aria-label="logout"
                  sx={{
                    backgroundColor: "#e0e0e0",
                    "&:hover": {
                      backgroundColor: "#bdbdbd",
                    },
                    color: "black",
                    padding: 1,
                    borderRadius: "50%",
                  }}
                >
                  <LogoutIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {isLoggedIn && (
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            '& .MuiDrawer-paper': { width: 250, backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' },
          }}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {menuItems.map((item) => (
                <ListItem button key={item.text} onClick={() => navigate(item.path)}>
                  <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} sx={{ color: 'white' }} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      )}
    </>
  );
};

export default Header;
