import React, { useState, useEffect, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer1';

import './App.css';
import AuthRoutes from './routes/AuthRoutes';
import HomeRoutes from './routes/HomeRoutes';


function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Update theme on body element
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between light and dark themes
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <ResponsiveAppBar theme={theme} toggleTheme={toggleTheme} />
        <HomeRoutes />
        <AuthRoutes />
        <Footer theme={theme} toggleTheme={toggleTheme} />
      </div>
    </Router>
  );
}

export default App;
