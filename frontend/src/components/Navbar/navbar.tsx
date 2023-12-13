import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { resetUser } from '../../redux/slices/user-slice';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  Typography,
  MenuItem,
  Stack,
  Toolbar,
  Select,
  SelectChangeEvent,
  Grid,
} from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './navbar.css';

interface ResponsiveAppBarProps {
  theme: string;
  toggleTheme: () => void;
}

const ResponsiveAppBar: React.FC<ResponsiveAppBarProps> = ({ theme, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const sessionUser = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const isLogged = Boolean(sessionUser.userId);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleProfileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseProfileMenu = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    dispatch(resetUser());
    localStorage.removeItem("loggedUser");
    handleCloseProfileMenu();
    navigate('/login');
  };

  const changeLanguage = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value as string);
  };

  return (
    <AppBar position="sticky" className={`navbar-app ${theme}`}>
      <Toolbar>
        <IconButton
          sx={{ margin: 2 }}
          onClick={() => navigate("/")}
          size='large'
          edge="start"
          color='inherit'
          aria-label='logo'>
          <Diversity3Icon />
        </IconButton>
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1 }}>
          Roomies
        </Typography>

        <Stack direction={'row'} spacing={3}>
          {/* Navigation Links and Buttons */}
          <Grid
           container
           direction={'row'}
           alignItems={'center'}
           justifyContent={'flex-end'}
           gap={2}
          >
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <Button color="inherit">About Us</Button>
          </Link>
          
          {isLogged ? (
            <>
              
              {/* Logged in user navigation and profile menu */}
              <Link to="/fetch" style={{ textDecoration: 'none' }}>
                <Button color="inherit" sx={{verticalAlign:'middle'}}>Fetch API</Button>
              </Link>
              <Link to="/listings" style={{ textDecoration: 'none' }}>
                <Button color="inherit">Listings</Button>
              </Link>
              <Link to="/create-listing" style={{ textDecoration: 'none' }}>
                <Button color="inherit">Post</Button>
              </Link>
              <Link to="/mylistings" style={{ textDecoration: 'none' }}>
                <Button color="inherit">My Listings</Button>
              </Link>
              <Link to="/blogs" style={{ textDecoration: 'none' }}>
                <Button color="inherit">Blogs</Button>
              </Link>
              <Link to="/chat" style={{ textDecoration: 'none' }}>
                <Button color="inherit">Chat</Button>
              </Link>

              <Button
                sx={{ color: 'inherit', textTransform: 'none' }}
                onClick={handleProfileMenu}
              >
                {sessionUser.firstName}
              </Button>
              <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseProfileMenu}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={handleCloseProfileMenu} component={Link} to="/profile">Profile</MenuItem>
                <MenuItem onClick={handleCloseProfileMenu} component={Link} to="/mylistings">My Listings</MenuItem>
                <MenuItem onClick={logoutUser}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button color="inherit">Login / Sign Up</Button>
            </Link>
          )}

          {/* Language Dropdown */}
          <Select
            value={i18n.language}
            defaultValue='en'
            onChange={changeLanguage}
            sx={{ color: 'inherit', '&:before': { borderBottom: 'none' } }}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="tel">Telugu</MenuItem>
            <MenuItem value="es">Spanish</MenuItem>
          </Select>

          {/* Theme Toggle Button */}
          <IconButton
            sx={{ color: 'inherit' }}
            onClick={toggleTheme}
          >
            {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>

          </Grid>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveAppBar;
