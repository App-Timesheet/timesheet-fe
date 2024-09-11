import React, { useContext } from 'react';
import { Box, Button, AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const ButtonGroupNav = () => {
  const navigate = useNavigate();
  const { userRole } = useContext(AuthContext);

  return (
    <AppBar 
      position="relative" 
      color="default" 
      sx={{ 
        backgroundColor: userRole === 'STANDARD_USER' ? 'transparent' : '#f8f9fa', 
        boxShadow: 'none', 
        borderBottom: userRole === 'STANDARD_USER' ? 'none' : '1px solid #e0e0e0' 
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          {userRole === 'ADMIN' && (
            <>
              <Button variant="text" color="primary" onClick={() => navigate("/admin")} sx={{ mx: 2 }}>
                USER
              </Button>
              <Button variant="text" color="primary" onClick={() => navigate("/create-project")} sx={{ mx: 2 }}>
                PROJECT
              </Button>
              <Button variant="text" color="primary" onClick={() => navigate("/add-task")} sx={{ mx: 2 }}>
                TASK
              </Button>
            </>
          )}

          {userRole === 'PROJECT_MANAGER' && (
            <>
              <Button variant="text" color="primary" onClick={() => navigate("/create-project")} sx={{ mx: 2 }}>
                PROJECT
              </Button>
              <Button variant="text" color="primary" onClick={() => navigate("/add-task")} sx={{ mx: 2 }}>
                TASK
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ButtonGroupNav;
