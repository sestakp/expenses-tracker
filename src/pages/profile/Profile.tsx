// src/Profile.tsx
import React, { useState } from 'react';
import { Container, Typography, Tab, Tabs, Box, Paper } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import ManageIncome from '../../components/manageIncomes/ManageIncomes';
import ManageCategories from '../../components/managecategories/ManageCategories';
const Profile: React.FC = () => {
  const { user } = useAuth(); // Get user info from AuthContext
  const [tabIndex, setTabIndex] = useState(0); // State for tab index

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Container component="main" maxWidth="md" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          User Profile
        </Typography>
        <Typography variant="h6" component="h2">
          Welcome, {user?.email}
        </Typography>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabIndex} onChange={handleTabChange} aria-label="Profile Tabs">
            <Tab label="Manage Income" />
            <Tab label="Manage Categories" />
          </Tabs>
        </Box>

        {/* Tab Content */}
        {tabIndex === 0 && (
          <Box sx={{ marginTop: 2 }}>
            <ManageIncome /> {/* Render ManageIncome component */}
          </Box>
        )}

        {tabIndex === 1 && (
          <Box sx={{ marginTop: 2 }}>
            <ManageCategories /> {/* Render ManageCategories component */}
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Profile;