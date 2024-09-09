import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ButtonGroup = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/create-project")}
        sx={{ mx: 2 }}
      >
        Proje Oluştur
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate("/add-task")}
        sx={{ mx: 2 }}
      >
        Task Ekle
      </Button>
    </Box>
  );
};

export default ButtonGroup;
