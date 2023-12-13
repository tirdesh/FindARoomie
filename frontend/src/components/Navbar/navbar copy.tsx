import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Icon for light theme (moon)
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Icon for dark theme (sun)
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import  { setUser, userSlice } from '../../redux/slices/user-slice';
interface ResponsiveAppBarProps {
  theme: string;
  toggleTheme: () => void;
}

function ResponsiveAppBar({ theme, toggleTheme }: ResponsiveAppBarProps) {
  const sessionUser = useSelector((state:RootState)=>state.user)
  const navigate = useNavigate();
  const isLogged = Boolean(sessionUser.userId);
  const dispatch = useDispatch<AppDispatch>();
  const logoutUser =(event:any) =>{
    dispatch(setUser(userSlice.getInitialState()))
  }
  return (
    <AppBar position="sticky" className={`navbar-app ${theme}`}>
      <Toolbar>
        <IconButton sx={{margin: 2}} onClick={(e)=>{navigate("/")}} size='large' edge="start" color='inherit' aria-label='logo'>
          <Diversity3Icon />
        </IconButton>

        <Typography sx={{marginLeft:2, flexGrow:1}} variant='h6' component='div'>
          Roomies
        </Typography>
        <Stack direction={'row'} spacing={3}>
          
          {/* Navigation Links and Buttons */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <Button color="inherit">About Us</Button>
          </Link>
          
          {/* Links that need user to login */}
          
          {(isLogged)?
            (
              <Stack direction={'row'} spacing={3}>
                <Link to="/listings" style={{ textDecoration: 'none' }}>
                  <Button color="inherit">Listings</Button>
                </Link>
                <Link to="/create-listing" style={{ textDecoration: 'none' }}>
                  <Button color="inherit">Post</Button>
                </Link>
                <Link to="/blogs">
                      <Button sx={{color: 'whitesmoke'}} color="secondary">Blogs</Button>
                </Link>
                <Link to="/chat" style={{ textDecoration: 'none' }}>
                  <Button color="inherit">Chat</Button>
                </Link>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button color="inherit" onClick={logoutUser}>Logout</Button>
                </Link>
                </Stack>
            ):(
              <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button color="inherit">Login / Sign Up</Button>
               </Link>
                )}
          <Typography sx={{marginLeft:2, flexGrow:1}} variant='h6' component='div'>
          {sessionUser.firstName}
        </Typography>

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