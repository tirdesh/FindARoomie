import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Button, AppBar, Toolbar, Typography, Container } from '@mui/material';
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
import Navbar from './components/Navbar/navbar';
import Login from './pages/Login/login-page';
import BlogPage from './pages/BlogPage/blogs';

import './App.css'
function App() {
  const [theme,setTheme] = useState("dark")
  const changeTheme = (event: any) =>{
    if(theme=='dark'){
      setTheme("white")
    }else{
      setTheme('dark');
    }
  }
  return (
    <Router>
      
      <div className={`App-${theme}`}>
      <Navbar></Navbar>
      
        {/* Main Content Area */}
          <Routes>

            {/* <Route path="/landing" element={<LandingPage />} /> */}
            {/* Add route for About Us */}

            <Route path="/about" element={<AboutUs />} />
            <Route path='/login' element={<Login />} />
            <Route path='/blogs' element={<BlogPage />} />
            <Route path="/fetch" element={<RoomFiltersFetch />} />
            <Route path="/axios" element={<RoomFiltersAxios />} />
            <Route path="/test" element={<CreateListingForm />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/upload" element={<ImageUpload />} />
            <Route path="/map" element={<FilteredMap />} />
            <Route path="/chat" element={<ChatEntryPage />} />
            <Route path="/chat/:roomName/:username" element={<ChatPage />} />
            {/* Redirect to landing page as the default route */}
            <Route path="/" element={<LandingPage />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
