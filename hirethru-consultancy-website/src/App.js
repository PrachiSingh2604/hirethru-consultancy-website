import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <img src="/assets/logo.png" alt="Hirethru Logo" style={{ height: 50 }} />
        </Toolbar>
      </AppBar>
      <HeroSection />
    </Box>
  );
}

export default App;