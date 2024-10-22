// src/Home.tsx
import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Your Expense Tracker
      </Typography>
      <Typography variant="body1" paragraph>
        Keep track of your expenses easily and efficiently. Our application helps you manage your finances by providing insightful analytics and easy-to-use features.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" component="h2">
              Total Expenses
            </Typography>
            <Typography variant="h6" color="textSecondary">
              $1,500
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" component="h2">
              Monthly Budget
            </Typography>
            <Typography variant="h6" color="textSecondary">
              $2,000
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" component="h2">
              Savings
            </Typography>
            <Typography variant="h6" color="textSecondary">
              $500
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="body1" paragraph sx={{ marginTop: 4 }}>
        Start tracking your expenses today and take control of your financial future!
      </Typography>
    </Container>
  );
};

export default Home;