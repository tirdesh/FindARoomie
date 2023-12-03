import {AppBar, Button, IconButton, Stack, Toolbar, Typography} from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import React from 'react';
import { Link } from 'react-router-dom';

function ResponsiveAppBar() {
 
  return (
    <AppBar>
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
                <Button sx={{color: 'whitesmoke'}}  color="secondary">Damn</Button>
              </Link>
              <Link to="/login">
              <Button sx={{color: 'whitesmoke'}} color="secondary">Login / Sign Up</Button>
              </Link>
            </Stack>

            
        </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
