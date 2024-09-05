import React from "react";
import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import '../footer/footer.css';
import { formatDate } from '../../utils/index';

const Footer = () => {
  return (
    <Box className="footer-root">
      <Container className="footer-container">
        <Stack className="footer-stack">
          <Typography variant="subtitle1" className="footer-title">
            TimeSheet
          </Typography>
          <Typography variant="body2" className="footer-description">
            Revolutionizing project management.
          </Typography>
        </Stack>

        <Stack className="footer-stack">
          <Typography variant="subtitle1" className="footer-title">
            Quick Links
          </Typography>
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
          <Link to="/services" className="footer-link">
            Services
          </Link>
          <Link to="/support" className="footer-link">
            Support
          </Link>
        </Stack>

        <Stack className="footer-icons" direction="row" spacing={2}>
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

        <Stack className="footer-stack">
          <Typography variant="body2" className="footer-copy">
          &copy; {formatDate(new Date())} TimeSheet
          </Typography>
          <Link href="#" className="footer-policy">
            Privacy Policy
          </Link>
          <Link href="#" className="footer-policy">
            Terms of Service
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

