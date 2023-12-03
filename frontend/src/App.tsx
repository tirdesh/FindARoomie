import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import RoomFiltersAxios from './pages/sample-apiconnector-axios';
import RoomFiltersFetch from './pages/sample-apiconnector-fetch';
import CreateListingForm from './pages/CreateListingPage/CreateListingForm';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/fetch">
                <Button variant="contained" color="primary">Fetch API</Button>
              </Link>
            </li>
            <li>
              <Link to="/axios">
                <Button variant="contained" color="primary">Axios</Button>
              </Link>
            </li>
            <li>
              <Link to="/test">
                <Button variant="contained" color="primary">Damn</Button>
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/fetch" element={<RoomFiltersFetch />} />
          <Route path="/axios" element={<RoomFiltersAxios />} />
          <Route path="/test" element={<CreateListingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
