// src/ManageCategories.tsx
import React, { useState } from 'react';
import { Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const ManageCategories: React.FC = () => {
  const [expenseCategories, setExpenseCategories] = useState<string[]>(['Groceries', 'Utilities']);
  const [newExpenseCategory, setNewExpenseCategory] = useState('');

  const handleAddExpenseCategory = () => {
    if (newExpenseCategory) {
      setExpenseCategories([...expenseCategories, newExpenseCategory]);
      setNewExpenseCategory('');
    }
  };

  return (
    <div>
      <Typography variant="h5">Manage Expense Categories</Typography>
      <List>
        {expenseCategories.map((category, index) => (
          <ListItem key={index}>
            <ListItemText primary={category} />
          </ListItem>
        ))}
      </List>
      <TextField
        variant="outlined"
        label="New Expense Category"
        value={newExpenseCategory}
        onChange={(e) => setNewExpenseCategory(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddExpenseCategory}>
        Add Expense Category
      </Button>
    </div>
  );
};

export default ManageCategories;