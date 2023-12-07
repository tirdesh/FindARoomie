import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import RoomFiltersAxios from './pages/testPages/sample-apiconnector-axios';
import RoomFiltersFetch from './pages/testPages/sample-apiconnector-fetch';
import CreateListingForm from './pages/CreateListingPage/CreateListingForm';
import SummaryPage from './pages/CreateListingPage/SummaryPage';
import ImageUpload from './pages/testPages/imageUpload';
import FilteredMap from './pages/testPages/mapViewer';
import ChatPage from './pages/testPages/chatComponent';
import Navbar from './components/Navbar/navbar';
import Login from './pages/Login/login-page';
import ChatEntryPage from './pages/testPages/chatEntry';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path="/fetch" element={<RoomFiltersFetch />} />
          <Route path="/axios" element={<RoomFiltersAxios />} />
          <Route path="/test" element={<CreateListingForm />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/upload" element={<ImageUpload />} />
          <Route path="/map" element={<FilteredMap />} />
          <Route path="/chat" element={<ChatEntryPage />} />
          <Route path="/chat/:roomName/:username" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
