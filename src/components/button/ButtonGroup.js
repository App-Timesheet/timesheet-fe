import React from 'react';
import { Box, Button, AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ButtonGroupNav = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="relative" color="default" sx={{ backgroundColor: '#f8f9fa', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Button
            variant="text"
            color="primary"
            onClick={() => navigate("/admin")}
            sx={{ mx: 2 }}
          >
            USER
          </Button>
          <Button
            variant="text"
            color="primary"
            onClick={() => navigate("/create-project")}
            sx={{ mx: 2 }}
          >
            PROJECT
          </Button>
          <Button
            variant="text"
            color="primary"
            onClick={() => navigate("/add-task")}
            sx={{ mx: 2 }}
          >
            TASK
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

<<<<<<< HEAD
export default ButtonGroupNav;
=======
export default ButtonGroupNav;
>>>>>>> 6a1b418dc14ac35d5fe523f371ea4d6f327cb19c
