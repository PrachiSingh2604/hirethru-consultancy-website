import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(/assets/home_page_background_image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        textAlign: 'left',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          We help you land your dream tech job.
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Hirethru Consultancy - Bridging Talent and Opportunity
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 4, fontWeight: 'bold' }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
