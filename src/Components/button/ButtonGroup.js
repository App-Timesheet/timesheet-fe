import React, { useContext, useState } from "react";
import { Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MessageIcon from "@mui/icons-material/Message";
import WorkIcon from "@mui/icons-material/Work";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";

const ButtonGroupNav = () => {
  const navigate = useNavigate();
  const { userRole } = useContext(AuthContext);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = () => {
    switch (userRole) {
      case "ADMIN":
        return [
          { text: "USER", icon: <PersonIcon />, path: "/admin" },
          { text: "PROJECT", icon: <WorkIcon />, path: "/create-project" },
          { text: "TASK", icon: <AssignmentIcon />, path: "/add-task" },
          { text: "MESSAGE", icon: <MessageIcon />, path: "/message" },
        ];
      case "PROJECT_MANAGER":
        return [
          { text: "My Projects", icon: <WorkIcon />, path: "/create-project" },
          { text: "TASK", icon: <AssignmentIcon />, path: "/add-task" },
        ];
      case "STANDARD_USER":
        return [
          { text: "My Projects", icon: <WorkIcon />, path: "/create-project" },
          { text: "TASK", icon: <AssignmentIcon />, path: "/add-task" },
          { text: "UPDATE PROFILE", icon: <PersonIcon />, path: "/update-user" },
        ];
      default:
        return [];
    }
  };

  return (
    <>
      <AppBar 
        position="relative" 
        color="primary" 
        elevation={0}
        sx={{ boxShadow: 'none' }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ 
          '& .MuiDrawer-paper': { 
            width: 250, 
            maxHeight: '80vh', 
            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
            backdropFilter: 'blur(5px)' 
          } 
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems().map((item) => (
              <ListItem button key={item.text} onClick={() => navigate(item.path)}>
                <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon> 
                <ListItemText primary={item.text} sx={{ color: 'white' }} /> 
              </ListItem>
            ))}
          </List>
          <Divider sx={{ backgroundColor: 'white' }} /> 
        </Box>
      </Drawer>
    </>
  );
};

export default ButtonGroupNav;
