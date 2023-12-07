import {AppBar, Button, IconButton, Stack, Toolbar, Typography} from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function ResponsiveAppBar() {
 
  return (
    <AppBar className='navbar-app'>
        <Toolbar>
            <IconButton sx={{margin: 2}} size='large' edge="start" color='inherit' aria-label='logo'>
               <Diversity3Icon/>
            </IconButton>

            <Typography sx={{marginLeft:2, flexGrow:1}} variant='h6' component='div'>
                Roomies
            </Typography>

            <Stack direction={'row'} spacing={3}>
              <Link to="/fetch">
                <Button sx={{color: 'whitesmoke'}} color="secondary">Fetch API</Button>
              </Link>
              <Link to="/axios">
                <Button sx={{color: 'whitesmoke'}}  color="secondary">Axios</Button>
              </Link>
              <Link to="/test">
                <Button sx={{color: 'whitesmoke'}}  color="secondary">Post</Button>
              </Link>
              <Link to="/login">
              <Button sx={{color: 'whitesmoke'}} color="secondary">Login / Sign Up</Button>
              </Link>
              <Link to="/upload">
              <Button sx={{color: 'whitesmoke'}} color="secondary">Upload</Button>
              </Link>
              <Link to="/map">
              <Button sx={{color: 'whitesmoke'}} color="secondary">Map</Button>
              </Link>
              <Link to="/chat">
              <Button sx={{color: 'whitesmoke'}} color="secondary">Chat</Button>
              </Link>
            </Stack>

            
        </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
