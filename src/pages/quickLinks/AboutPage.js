import React from "react";
import { Container, Typography, Box, Card, CardContent, Stack } from "@mui/material";
import Layout from "../../Layout";
import { aboutContent } from "../../Constants/content";

const AboutPage = () => {
  return (
    <Layout>
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ color: "#1976d2" }}>
            {aboutContent.header.title}
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
            {aboutContent.header.description}
          </Typography>

          <Box sx={{ my: 4, backgroundColor: "#f5f5f5", p: 3, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
              {aboutContent.ourStory.title}
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
              {aboutContent.ourStory.description}
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
              {aboutContent.ourStory.mission}
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
              {aboutContent.ourStory.customers}
            </Typography>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
              {aboutContent.coreValues.title}
            </Typography>
            <Stack spacing={4} direction={{ xs: "column", md: "row" }} sx={{ justifyContent: "space-between" }}>
              {Object.keys(aboutContent.coreValues).map((key, index) => {
                if (key !== "title") {
                  return (
                    <Box key={index} sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
                      <Card sx={{ height: "100%", backgroundColor: "#e3f2fd", borderRadius: 2 }}>
                        <CardContent>
                          <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
                            {aboutContent.coreValues[key].title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#555" }}>
                            {aboutContent.coreValues[key].description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  );
                }
                return null;
              })}
            </Stack>
          </Box>

          <Box sx={{ my: 4, backgroundColor: "#f5f5f5", p: 3, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
              {aboutContent.team.title}
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
              {aboutContent.team.description}
            </Typography>
            <Stack spacing={4} direction={{ xs: "column", md: "row" }} sx={{ justifyContent: "space-between" }}>
              {Object.keys(aboutContent.team.members).map((key, index) => (
                <Box key={index} sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
                  <Card sx={{ height: "100%", backgroundColor: "#e3f2fd", borderRadius: 2 }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
                        {aboutContent.team.members[key].name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#555" }}>
                        {aboutContent.team.members[key].description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Stack>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
              {aboutContent.whyChooseUs.title}
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "#555", maxWidth: "800px", mx: "auto" }}>
              {aboutContent.whyChooseUs.description}
            </Typography>
            <Box component="ul" sx={{ maxWidth: "800px", margin: "0 auto", color: "#555", textAlign: "left", paddingLeft: "20px" }}>
              {aboutContent.whyChooseUs.points.map((point, index) => (
                <li key={index}>
                  <Typography variant="body1">{point}</Typography>
                </li>
              ))}
            </Box>
          </Box>

          <Box sx={{ my: 4, backgroundColor: "#f5f5f5", p: 3, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
              {aboutContent.sustainability.title}
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "#555", maxWidth: "800px", mx: "auto" }}>
              {aboutContent.sustainability.description}
            </Typography>
            <Typography variant="body1" sx={{ color: "#555", maxWidth: "800px", mx: "auto" }}>
              {aboutContent.sustainability.initiatives}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default AboutPage;
