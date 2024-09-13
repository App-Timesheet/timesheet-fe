import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Paper } from '@mui/material';
import Layout from '../../Layout';
import apiClient from '../../interceptor'; 

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await apiClient.put('/api/messages/newMessage', {
        content: formData.message,
        email: formData.email,
        userId: 0, 
      });

      if (response.status === 200) {
        setSuccessMessage('Message sent successfully!');
      }
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#1976d2', textAlign: 'center' }}>
            Contact Us
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: '#555', textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            We would love to hear from you! Do you have a question about our services, need support, or just want to give us some feedback? Please feel free to get in touch with us.
          </Typography>

          <Box sx={{ mt: 4, backgroundColor: '#f5f5f5', p: 3, borderRadius: 2, maxWidth: '800px', mx: 'auto' }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
              Our Contact Information:
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: '#555' }}>
              <strong>Email:</strong> support@timesheet.com
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: '#555' }}>
              <strong>Phone:</strong> +1 (123) 456-7890
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: '#555' }}>
              <strong>Address:</strong> 123 TimeSheet Ave, Suite 100, Project City, PC 12345
            </Typography>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#1976d2', textAlign: 'center' }}>
              Or send us a message directly:
            </Typography>
            <Paper elevation={3} sx={{ p: 3, backgroundColor: '#e3f2fd', borderRadius: 2 }}>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <TextField 
                  label="Your Name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth 
                  margin="normal" 
                  sx={{ backgroundColor: 'white', borderRadius: 1 }}
                />
                <TextField 
                  label="Your Email Address" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth 
                  margin="normal" 
                  sx={{ backgroundColor: 'white', borderRadius: 1 }}
                />
                <TextField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  sx={{ backgroundColor: 'white', borderRadius: 1 }}
                />
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  type="submit"
                  disabled={isSubmitting}
                  sx={{ mt: 2, backgroundColor: '#1976d2' }}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                {successMessage && (
                  <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
                    {successMessage}
                  </Typography>
                )}
                {errorMessage && (
                  <Typography variant="body2" color="error.main" sx={{ mt: 2 }}>
                    {errorMessage}
                  </Typography>
                )}
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default ContactPage;
