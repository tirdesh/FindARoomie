// HomeRoutes.tsx
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import AboutUs from '../pages/AboutUs/AboutUs';
import Login from '../pages/Login/login-page';

const HomeRoutes: React.FC = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Update theme on the body element
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage theme={theme} />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      {/* Add other home-related routes */}
    </Routes>
  );
};

export default HomeRoutes;
