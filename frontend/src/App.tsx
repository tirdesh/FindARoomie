import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import RoomFiltersAxios from './pages/sample-apiconnector-axios';
import RoomFiltersFetch from './pages/sample-apiconnector-fetch';
import CreateListingForm from './pages/CreateListingPage/CreateListingForm';
import SummaryPage from './pages/CreateListingPage/SummaryPage';

import Navbar from './components/Navbar/navbar';
// import Login from './pages/Login/login-page';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <Routes>
          {/* <Route path='/login' element={<Login />}></Route> */}
          <Route path="/fetch" element={<RoomFiltersFetch />} />
          <Route path="/axios" element={<RoomFiltersAxios />} />
          <Route path="/test" element={<CreateListingForm />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
