// src/Login.tsx
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import firebaseDb from '../../utils/firebaseDb';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth(); // Access login method from context
  const navigate = useNavigate();


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(firebaseDb.auth, email, password);
      // Successfully signed in
      console.log('User logged in:', userCredential.user);
      login(email);
      setEmail('');
      setPassword('');
      setError('');
      navigate('/');
      // Redirect or update UI as needed
    } catch (error: any) {
      // Handle Errors here.
      setError(error.message);
      setPassword('');
      console.error('Error logging in:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: 8 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;