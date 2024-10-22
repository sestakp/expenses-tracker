// src/ManageIncome.tsx
import React, { useState } from 'react';
import { Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const ManageIncome: React.FC = () => {
  const [incomeAccounts, setIncomeAccounts] = useState<string[]>(['Salary', 'Freelance']);
  const [newIncomeAccount, setNewIncomeAccount] = useState('');

  const handleAddIncomeAccount = () => {
    if (newIncomeAccount) {
      setIncomeAccounts([...incomeAccounts, newIncomeAccount]);
      setNewIncomeAccount('');
    }
  };

  return (
    <div>
      <Typography variant="h5">Manage Income Accounts</Typography>
      <List>
        {incomeAccounts.map((account, index) => (
          <ListItem key={index}>
            <ListItemText primary={account} />
          </ListItem>
        ))}
      </List>
      <TextField
        variant="outlined"
        label="New Income Account"
        value={newIncomeAccount}
        onChange={(e) => setNewIncomeAccount(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddIncomeAccount}>
        Add Income Account
      </Button>
    </div>
  );
};

export default ManageIncome;