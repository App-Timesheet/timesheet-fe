import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import logo from '../../assets/images/logo.png'; 


const Header = () => {
  return (
    <AppBar
      position="static"
      color="default"
      sx={{ backgroundColor: 'white', boxShadow: 'none' }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: '50px', width: 'auto' }}
          />
          <Typography variant="h6" color="inherit" sx={{ ml: 2 }}>
            TimeSheet
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
