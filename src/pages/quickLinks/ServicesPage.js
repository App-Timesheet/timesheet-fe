import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import Layout from "../../Layout";

const ServicesPage = () => {
  return (
    <Layout>
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#1976d2", textAlign: "center" }}
          >
            Our Services
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              color: "#555",
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            At TimeSheet, we offer a comprehensive range of services to make
            your project management experience smooth and efficient. Below is a
            detailed summary of the services we provide:
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Paper
              elevation={3}
              sx={{ p: 3, mb: 4, backgroundColor: "#e3f2fd", borderRadius: 2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
                1. Time Tracking
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
                Our time tracking tool allows you to record your hours with
                precision and ease. Track your work in real time, assign hours
                to specific tasks, and get an overall view of where your time is
                going. This feature is perfect for billing clients, managing
                employee productivity, and ensuring projects stay on track.
              </Typography>
            </Paper>

            <Paper
              elevation={3}
              sx={{ p: 3, mb: 4, backgroundColor: "#e3f2fd", borderRadius: 2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
                2. Project Management
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
                Use our intuitive project management tools to manage your
                projects from start to finish. Create tasks, assign them to team
                members, set deadlines, and track progress. Our tools are
                designed to help keep everything organized and ensure that
                everyone on your team is aligned.
              </Typography>
            </Paper>

            <Paper
              elevation={3}
              sx={{ p: 3, mb: 4, backgroundColor: "#e3f2fd", borderRadius: 2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
                3. Task Assignment
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
                Easily assign tasks to the right team members. You can set
                priorities, add descriptions, and provide all the necessary
                details to ensure tasks are completed accurately and on time.
                Our platform makes reassigning tasks simple, offering flexibility
                and efficiency.
              </Typography>
            </Paper>

            <Paper
              elevation={3}
              sx={{ p: 3, mb: 4, backgroundColor: "#e3f2fd", borderRadius: 2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
                4. Detailed Reporting
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
                Gain insights into your projects with our detailed reporting
                tools. Generate reports on time spent, task completion, and
                project progress. These reports can be customized to meet your
                specific needs and provide valuable data for making informed
                decisions.
              </Typography>
            </Paper>

            <Paper
              elevation={3}
              sx={{ p: 3, mb: 4, backgroundColor: "#e3f2fd", borderRadius: 2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
                5. Collaboration Tools
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
                Foster collaboration within your team with our built-in
                communication tools. Share files, leave comments on tasks, and
                keep everyone updated. Our collaboration features are designed
                to enhance team communication and speed up workflow.
              </Typography>
            </Paper>

            <Paper
              elevation={3}
              sx={{ p: 3, backgroundColor: "#e3f2fd", borderRadius: 2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
                6. Custom Integrations
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
                We understand that every team has unique needs, which is why we
                offer custom integrations with other tools and platforms. Whether
                you need to connect with your CRM, billing software, or any other
                tool, we can help you set up seamless integrations to suit your
                business.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default ServicesPage;
