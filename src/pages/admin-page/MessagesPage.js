import React, { useEffect, useState, useContext } from 'react';
import { Container, Typography, Paper, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import apiClient from '../../interceptor'; 
import { AuthContext } from '../../AuthContext'; 
import Layout from '../../Layout';


const AdminMessagesPage = () => {
  const { userRole } = useContext(AuthContext); 
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await apiClient.get('/api/messages/getAllMessages');
        setMessages(response.data);
      } catch (err) {
        setError('Failed to fetch messages.');
      }
    };

    if (userRole === 'ADMIN') {
      fetchMessages();
    }
  }, [userRole]);

  if (userRole !== 'ADMIN') {
    return <Typography variant="h6">You do not have access to this page.</Typography>;
  }

  return (
    <Layout>
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#1976d2', textAlign: 'center' }}>
            Received Messages
          </Typography>

          {error ? (
            <Typography variant="body1" color="error" gutterBottom>
              {error}
            </Typography>
          ) : (
            <TableContainer component={Paper} elevation={3} sx={{ mt: 3 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', color: '#1976d2' }}>From</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: '#1976d2' }}>Message</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {messages.map((message) => (
                    <TableRow key={message.id} hover>
                      <TableCell>{message.email}</TableCell>
                      <TableCell>{message.content}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default AdminMessagesPage;
