import React, { useState } from 'react';
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

function App() {
  const [theme, setTheme] = useState('light'); // State to manage theme

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <ResponsiveAppBar theme={theme} toggleTheme={toggleTheme} />
        {/* Main Content Area */}
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path='/login' element={<Login />} />
          <Route path="/fetch" element={<RoomFiltersFetch />} />
          <Route path="/axios" element={<RoomFiltersAxios />} />
          <Route path="/test" element={<CreateListingForm />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/upload" element={<ImageUpload />} />
          <Route path="/map" element={<FilteredMap />} />
          <Route path="/chat" element={<ChatEntryPage />} />
          <Route path="/chat/:roomName/:username" element={<ChatPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;