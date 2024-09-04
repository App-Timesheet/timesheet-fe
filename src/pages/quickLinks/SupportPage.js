import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Layout from "../../Layout";

const SupportPage = () => {
  return (
    <Layout>
      <Container>
        <Box sx={{ my: 8, py: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            Support
          </Typography>
          <Typography variant="body1" gutterBottom align="center" sx={{ mb: 6 }}>
            At TimeSheet, we are committed to providing exceptional support to
            ensure that you have the best experience with our platform. Whether
            you’re a new user or a seasoned professional, our support team is
            here to help you every step of the way.
          </Typography>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" gutterBottom>
              Browse through our FAQs to find answers to common questions. We’ve
              compiled a list of the most frequently asked questions about our
              platform, including setup, billing, and troubleshooting tips.
            </Typography>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              Help Center
            </Typography>
            <Typography variant="body1" gutterBottom>
              Visit our Help Center for in-depth articles and guides on how to use
              TimeSheet effectively. Whether you’re looking for a tutorial on a
              specific feature or need help with advanced configurations, our Help
              Center has you covered.
            </Typography>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              Live Chat Support
            </Typography>
            <Typography variant="body1" gutterBottom>
              Need immediate assistance? Use our live chat feature to connect with
              a support representative in real-time. Our team is available 24/7 to
              answer your questions and resolve any issues you may encounter.
            </Typography>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              Email Support
            </Typography>
            <Typography variant="body1" gutterBottom>
              For less urgent matters, feel free to email our support team at
              support@timesheet.com. We aim to respond to all inquiries within 24
              hours.
            </Typography>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              Phone Support
            </Typography>
            <Typography variant="body1" gutterBottom>
              Prefer to speak with someone directly? Give us a call at +1 (123)
              456-7890. Our support team is available Monday through Friday, from
              9 AM to 6 PM, to assist you with any issues.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default SupportPage;
