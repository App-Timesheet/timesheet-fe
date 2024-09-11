import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Tooltip } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout'; 
import logo from '../../assets/images/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = Boolean(localStorage.getItem('isLoggedIn'));

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token'); 
    navigate('/');
  };

  return (
    <AppBar position="static" color="default" sx={{ backgroundColor: '#ffffff', boxShadow: 'none' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
          <img src={logo} alt="Logo" style={{ height: '50px', width: 'auto' }} />
          <Typography variant="h6" color="inherit" sx={{ ml: 2 }}>
            TimeSheet
          </Typography>
        </Box>
        <Box sx={{ ml: 'auto' }}>
          {isLoggedIn && location.pathname !== '/' && (
            <Tooltip title="Çıkış Yap" arrow>
              <IconButton
                color="primary"
                onClick={handleLogout}
                aria-label="logout"
                sx={{
                  backgroundColor: '#e0e0e0',
                  '&:hover': {
                    backgroundColor: '#bdbdbd', 
                  },
                  color: 'black', 
                  padding: 1,
                  borderRadius: '50%', 
                }}
              >
                <LogoutIcon fontSize="medium" /> 
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
