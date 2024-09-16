import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Layout from "../../Layout";
import { supportContent } from "../../constants/content";

const SupportPage = () => {
  return (
    <Layout>
      <Container>
        <Box sx={{ my: 8, py: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            {supportContent.header.title}
          </Typography>
          <Typography variant="body1" gutterBottom align="center" sx={{ mb: 6 }}>
            {supportContent.header.description}
          </Typography>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              {supportContent.faq.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {supportContent.faq.description}
            </Typography>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              {supportContent.helpCenter.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {supportContent.helpCenter.description}
            </Typography>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              {supportContent.liveChat.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {supportContent.liveChat.description}
            </Typography>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              {supportContent.emailSupport.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {supportContent.emailSupport.description}
            </Typography>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              {supportContent.phoneSupport.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {supportContent.phoneSupport.description}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default SupportPage;
