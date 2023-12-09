
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar/navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutUs from './pages/AboutUs/AboutUs';
import RoomFiltersAxios from './pages/testPages/sample-apiconnector-axios';
import RoomFiltersFetch from './pages/testPages/sample-apiconnector-fetch';
import CreateListingForm from './pages/CreateListingPage/CreateListingForm';
import SummaryPage from './pages/CreateListingPage/SummaryPage';
import ImageUpload from './pages/testPages/imageUpload';
import FilteredMap from './pages/testPages/mapViewer';
import ChatPage from './pages/testPages/chatComponent';
import ChatEntryPage from './pages/testPages/chatEntry';
import Login from './pages/Login/login-page';
import BlogPage from './pages/BlogPage/blogs';
import Footer from './components/Footer/Footer';

import './App.css';

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
        <Routes>
          <Route path="/" element={<LandingPage theme={theme} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/fetch" element={<RoomFiltersFetch />} />
          <Route path="/axios" element={<RoomFiltersAxios />} />
          <Route path="/create-listing" element={<CreateListingForm />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path='/blogs' element={<BlogPage />} />
          <Route path="/upload" element={<ImageUpload />} />
          <Route path="/map" element={<FilteredMap />} />
          <Route path="/chat" element={<ChatEntryPage />} />
          <Route path="/chat/:roomName/:username" element={<ChatPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer theme={theme} toggleTheme={toggleTheme} />
      </div>
    </Router>
  );
}

export default App;
