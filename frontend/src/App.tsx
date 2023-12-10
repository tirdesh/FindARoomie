import React, { useState, useEffect, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';

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
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />

          {/* Routes that need user to get logged in */}
          <Route path="/fetch" element={<LoggedSession element={<RoomFiltersFetch/>} />} />

          <Route path="/axios" element={<LoggedSession element={<RoomFiltersAxios/>} />} />

          <Route path="/create-listing" element={<LoggedSession element={<CreateListingForm/>} />} />

          <Route path="/summary" element={<LoggedSession element={<SummaryPage/>} />} />

          <Route path='/blogs' element={<LoggedSession element={<BlogPage/>} />} />

          <Route path="/upload" element={<LoggedSession element={<ImageUpload/>} />} />

          <Route path="/map" element={<LoggedSession element={<FilteredMap/>} />} />

          <Route path="/chat" element={<LoggedSession element={<ChatEntryPage/>} />} />

          <Route path="/chat/:roomName/:username" element={<LoggedSession element={<ChatPage/>} />} />

          
        </Routes>
        <Footer theme={theme} toggleTheme={toggleTheme} />
      </div>
    </Router>
  );
}

function LoggedSession(props:any) {
  const sessionUser = useSelector((state: RootState) => state.user);

  if(!sessionUser._id){
    return <Navigate to={'/'} />
  }
  return props.element;
}
export default App;
