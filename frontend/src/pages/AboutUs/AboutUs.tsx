// src/pages/AboutUs.tsx
import React from 'react';
import { Typography, Box, Container, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const AboutUs: React.FC = () => {
  const { t } = useTranslation(); // Hook to access translations

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} style={{ padding: '2em', marginTop: '3vh' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t('aboutUs.title')}
        </Typography>
        <Typography paragraph>
          {t('aboutUs.intro')}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {t('whyChooseUs.title')}
        </Typography>
        <Typography paragraph>
          {t('whyChooseUs.functionality')}
        </Typography>
        {/* ... More paragraphs for each section ... */}
        <Typography paragraph>
          {t('closing')}
        </Typography>
        {/* You can add more visual elements such as images, icons, or animations here */}
      </Paper>
    </Container>
  );
};

export default AboutUs;
