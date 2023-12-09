import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Icon for light theme (moon)
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Icon for dark theme (sun)
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

interface ResponsiveAppBarProps {
  theme: string;
  toggleTheme: () => void;
}

function ResponsiveAppBar({ theme, toggleTheme }: ResponsiveAppBarProps) {
  return (
    <AppBar position="static" className={`navbar-app ${theme}`}>
      <Toolbar>
        <IconButton sx={{margin: 2}} size='large' edge="start" color='inherit' aria-label='logo'>
          <Diversity3Icon />
        </IconButton>

        <Typography sx={{marginLeft:2, flexGrow:1}} variant='h6' component='div'>
          Roomies
        </Typography>

        <Stack direction={'row'} spacing={3}>
          {/* Navigation Links and Buttons */}
          <Link to="/fetch" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Fetch API</Button>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <Button color="inherit">About Us</Button>
          </Link>
          <Link to="/axios" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Axios</Button>
          </Link>
          <Link to="/test" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Post</Button>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Login / Sign Up</Button>
          </Link>
          <Link to="/upload" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Upload</Button>
          </Link>
          <Link to="/map" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Map</Button>
          </Link>
          <Link to="/chat" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Chat</Button>
          </Link>
        </Stack>

        {/* Theme Toggle Button */}
        <IconButton
          sx={{ color: 'inherit' }}
          onClick={toggleTheme}
        >
          {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
