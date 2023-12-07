// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Button, AppBar, Toolbar, Typography, Container } from '@mui/material';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutUs from './pages/AboutUs/AboutUs'; // Import the AboutUs component
import RoomFiltersAxios from './pages/sample-apiconnector-axios';
import RoomFiltersFetch from './pages/sample-apiconnector-fetch';
import CreateListingForm from './pages/CreateListingPage/CreateListingForm';
import SummaryPage from './pages/CreateListingPage/SummaryPage';

import Navbar from './components/Navbar/navbar';
import Login from './pages/Login/login-page';
function App() {
  return (
    <Router>
      <div className="App">
<<<<<<< HEAD
        {/* AppBar for Navigation */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Find a Roomie</Typography>
            <div style={{ marginLeft: 'auto' }}>
              <Button color="inherit" component={Link} to="/landing">
                Home
              </Button>
              {/* Add navigation to About Us */}
              <Button color="inherit" component={Link} to="/about">
                About Us
              </Button>
              <Button color="inherit" component={Link} to="/fetch">
                Fetch API
              </Button>
              <Button color="inherit" component={Link} to="/axios">
                Axios
              </Button>
              <Button color="inherit" component={Link} to="/test">
                Test
              </Button>
            </div>
          </Toolbar>
        </AppBar>

        {/* Main Content Area */}
        <Container style={{ marginTop: '20px' }}>
          <Routes>
            <Route path="/landing" element={<LandingPage />} />
            {/* Add route for About Us */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/fetch" element={<RoomFiltersFetch />} />
            <Route path="/axios" element={<RoomFiltersAxios />} />
            <Route path="/test" element={<CreateListingForm />} />
            {/* Redirect to landing page as the default route */}
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Container>
=======
        <Navbar></Navbar>

        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path="/fetch" element={<RoomFiltersFetch />} />
          <Route path="/axios" element={<RoomFiltersAxios />} />
          <Route path="/test" element={<CreateListingForm />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
>>>>>>> 5ca6e1ee0b8a1bf13b18c99f110c6a3e90c909e8
      </div>
    </Router>
  );
}

export default App;
