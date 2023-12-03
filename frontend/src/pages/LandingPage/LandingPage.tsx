import React from 'react';
import { Typography, Button, Box, Container, Paper, useMediaQuery, useTheme } from '@mui/material';
import CarouselItemImage from '../LandingPage/CarouselItem.jpg'; // Adjust the import path if necessary

// Define keyframes for the animations
const fadeInKeyframes = `@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}`;

const bounceKeyframes = `@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
}`;

const LandingPage: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Container maxWidth="lg">
      {/* Add global styles for animations */}
      <style>
        {fadeInKeyframes}
        {bounceKeyframes}
      </style>
      <Paper
        elevation={3}
        sx={{
          position: 'relative',
          marginTop: matches ? '5vh' : '2vh',
          padding: '2em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '60vh',
          backgroundImage: `url(${CarouselItemImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // This creates the opacity effect
            zIndex: 0,
          },
          '& > *': {
            position: 'relative',
            zIndex: 1,
          },
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom sx={{ animation: 'fadeIn 1s ease-out' }}>
          Find Your Perfect Space & Companion
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ animation: 'fadeIn 1.5s ease-out' }}>
          Effortlessly with Find a Roomie!
        </Typography>
        <Box mt={4} sx={{ '& button': { animation: 'bounce 1s ease' } }}>
          <Button variant="contained" color="primary" size="large">
            Find Room
          </Button>
          <Button variant="contained" color="secondary" size="large" sx={{ marginLeft: '1em' }}>
            Post a Room
          </Button>
        </Box>
      </Paper>
      {/* Additional content and layout goes here */}
    </Container>
  );
};

export default LandingPage;
