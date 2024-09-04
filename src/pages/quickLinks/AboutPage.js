import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import Layout from "../../Layout";

const AboutPage = () => {
  return (
    <Layout>
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ color: "#1976d2" }}>
            About Us
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
            Welcome to TimeSheet! We are committed to revolutionizing project
            management with our innovative and easy-to-use time tracking
            solutions. Our team is passionate about helping you manage your
            projects efficiently and effectively.
          </Typography>

          <Box
            sx={{ my: 4, backgroundColor: "#f5f5f5", p: 3, borderRadius: 2 }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
              Our Story
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
              Founded in 2021, TimeSheet quickly became a trusted name in
              project management software. Our platform is used by thousands of
              teams worldwide, from small startups to large enterprises. We
              believe in the power of technology to simplify workflows, enhance
              collaboration, and achieve results.
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
              Our mission is to provide a tool that is both powerful and easy to
              use. We focus on user experience, ensuring our software is
              accessible to everyone, regardless of technical knowledge. We are
              committed to continuous improvement and regularly update our
              platform based on user feedback.
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
              At TimeSheet, we value our customers and strive to build lasting
              relationships. Our customer support team is always ready to assist
              you with any questions or issues you may encounter. We are not
              just a software provider; we are your partner in success.
            </Typography>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
              Our Core Values
            </Typography>
            <Stack
              spacing={4}
              direction={{ xs: "column", md: "row" }}
              sx={{ justifyContent: "space-between" }}
            >
              <Box sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#e3f2fd",
                    borderRadius: 2,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "#1976d2" }}
                    >
                      Innovation
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      We constantly strive to innovate and improve our platform.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#e3f2fd",
                    borderRadius: 2,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "#1976d2" }}
                    >
                      Customer Focus
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      Our customers are at the heart of everything we do. We
                      listen to your needs and provide tailored solutions.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#e3f2fd",
                    borderRadius: 2,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "#1976d2" }}
                    >
                      Integrity
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      We conduct our business with the highest standards of
                      honesty and transparency.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#e3f2fd",
                    borderRadius: 2,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "#1976d2" }}
                    >
                      Excellence
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      We aim for excellence in every aspect of our work.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Stack>
          </Box>

          <Box
            sx={{ my: 4, backgroundColor: "#f5f5f5", p: 3, borderRadius: 2 }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
              Meet Our Team
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
              Our team is made up of talented professionals from diverse
              backgrounds. We are passionate about what we do and are committed
              to delivering the best product to our customers.
            </Typography>
            <Stack
              spacing={4}
              direction={{ xs: "column", md: "row" }}
              sx={{ justifyContent: "space-between" }}
            >
              <Box sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#e3f2fd",
                    borderRadius: 2,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "#1976d2" }}
                    >
                      Yıldız Argun - CEO
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      Yıldız is the visionary leader of TimeSheet, guiding the
                      company with a focus on innovation and customer
                      satisfaction.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#e3f2fd",
                    borderRadius: 2,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "#1976d2" }}
                    >
                      İpek Tutku - CTO
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      İpek is the technical genius who keeps TimeSheet's
                      technological infrastructure cutting-edge.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#e3f2fd",
                    borderRadius: 2,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "#1976d2" }}
                    >
                      Kenan Şan - COO
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      Kenan manages operations and ensures everything runs
                      smoothly and efficiently.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Stack>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
              Why Choose Us?
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "#555", maxWidth: "800px", mx: "auto" }}
            >
              We know you have many options when it comes to project management
              software. Here's why TimeSheet stands out:
            </Typography>
            <Box
              component="ul"
              sx={{
                maxWidth: "800px",
                margin: "0 auto",
                color: "#555",
                textAlign: "left",
                paddingLeft: "20px",
              }}
            >
              <li>
                <Typography variant="body1">
                  <strong>Comprehensive Features:</strong> We offer a wide range
                  of features to help you manage your projects from start to
                  finish.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>User-Friendly Interface:</strong> Our platform is
                  designed with the user in mind, making it easy to navigate and
                  use.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Exceptional Support:</strong> Our support team is
                  always there for you, providing quick and effective help when
                  you need it.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Affordable Pricing:</strong> We offer competitive
                  pricing plans to suit businesses of all sizes.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Proven Track Record:</strong> Thousands of teams
                  around the world trust TimeSheet to manage their projects
                  effectively.
                </Typography>
              </li>
            </Box>
          </Box>

          <Box
            sx={{ my: 4, backgroundColor: "#f5f5f5", p: 3, borderRadius: 2 }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
              Our Commitment to Sustainability
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "#555", maxWidth: "800px", mx: "auto" }}
            >
              At TimeSheet, we believe in doing our part to protect the planet.
              We are committed to sustainable business practices and constantly
              seek ways to reduce our environmental impact.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#555", maxWidth: "800px", mx: "auto" }}
            >
              By promoting digital communication and documentation, we minimize
              paper usage. Our data centers are powered by renewable energy
              sources, and we are continuously working to reduce our carbon
              footprint.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default AboutPage;
