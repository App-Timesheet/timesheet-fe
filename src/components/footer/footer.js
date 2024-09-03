import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: "#242424", py: { xs: 4, sm: 6 }, color: "white" }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: { xs: "center", sm: "flex-start" },
        }}
      >
        <Stack
          spacing={1}
          sx={{ mb: { xs: 4, sm: 0 }, textAlign: { xs: "center", sm: "left" } }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#f0f0f0" }}
          >
            TimeSheet
          </Typography>
          <Typography variant="body2" sx={{ color: "#888" }}>
            Revolutionizing project management.
          </Typography>
        </Stack>

        <Stack
          spacing={1}
          alignItems="center"
          sx={{ mb: { xs: 4, sm: 0 }, textAlign: { xs: "center", sm: "left" } }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#f0f0f0" }}
          >
            Quick Links
          </Typography>
          <Link
            href="#"
            color="inherit"
            sx={{ color: "#bbb", textDecoration: "none" }}
          >
            About
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ color: "#bbb", textDecoration: "none" }}
          >
            Contact
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ color: "#bbb", textDecoration: "none" }}
          >
            Services
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ color: "#bbb", textDecoration: "none" }}
          >
            Support
          </Link>
        </Stack>

        <Stack spacing={2} direction="row" sx={{ mb: { xs: 4, sm: 0 } }}>
          <IconButton color="inherit" href="https://facebook.com">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" href="https://linkedin.com">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" href="https://instagram.com">
            <InstagramIcon />
          </IconButton>
        </Stack>

        <Stack
          spacing={1}
          alignItems="center"
          sx={{ textAlign: { xs: "center", sm: "right" } }}
        >
          <Typography variant="body2" sx={{ color: "#aaa" }}>
            &copy; {new Date().getFullYear()} TimeSheet
          </Typography>
          <Link href="#" sx={{ color: "#777", textDecoration: "none" }}>
            Privacy Policy
          </Link>
          <Link href="#" sx={{ color: "#777", textDecoration: "none" }}>
            Terms of Service
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
