import React from 'react';
import { Container, Typography, Box, TextField, Button, Paper } from '@mui/material';
import Layout from '../../Layout';

const ContactPage = () => {
  return (
    <Layout>
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#1976d2', textAlign: 'center' }}>
            Bize Ulaşın
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: '#555', textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            Sizden haber almak bizi çok mutlu eder! Hizmetlerimiz hakkında bir sorunuz mu var, destek mi gerekiyor, yoksa sadece geri bildirimde mi bulunmak istiyorsunuz? Lütfen bizimle iletişime geçin.
          </Typography>

          <Box sx={{ mt: 4, backgroundColor: '#f5f5f5', p: 3, borderRadius: 2, maxWidth: '800px', mx: 'auto' }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
              İletişim Bilgilerimiz:
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: '#555' }}>
              <strong>Email:</strong> support@timesheet.com
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: '#555' }}>
              <strong>Telefon:</strong> +1 (123) 456-7890
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: '#555' }}>
              <strong>Adres:</strong> 123 TimeSheet Ave, Suite 100, Project City, PC 12345
            </Typography>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#1976d2', textAlign: 'center' }}>
              Veya doğrudan bize mesaj gönderin:
            </Typography>
            <Paper elevation={3} sx={{ p: 3, backgroundColor: '#e3f2fd', borderRadius: 2 }}>
              <Box component="form" sx={{ mt: 2 }}>
                <TextField 
                  label="Adınız" 
                  fullWidth 
                  margin="normal" 
                  sx={{ backgroundColor: 'white', borderRadius: 1 }}
                />
                <TextField 
                  label="Email Adresiniz" 
                  fullWidth 
                  margin="normal" 
                  sx={{ backgroundColor: 'white', borderRadius: 1 }}
                />
                <TextField
                  label="Mesaj"
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
                  sx={{ mt: 2, backgroundColor: '#1976d2' }}>
                  Mesajı Gönder
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default ContactPage;
