// src/Navbar.tsx
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Adjust the import path as necessary
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  // State for menu anchor
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Handle opening and closing of the menu
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Expenses Tracker
        </Typography>
        {isSmallScreen ? (
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        ) : (
          <>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Home</Button>
            </Link>
            {user ? (
              <>
                <Button color="inherit" onClick={handleMenuClick}>
                  {user.email}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={() => { navigate('/profile'); handleMenuClose() }}>Profile</MenuItem>
                  <MenuItem onClick={() => { handleMenuClose(); logout(); }}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                <Button color="inherit">Login</Button>
              </Link>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;