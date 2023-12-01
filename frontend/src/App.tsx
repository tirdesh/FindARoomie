import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import RoomFiltersAxios from './pages/sample-apiconnector-axios';
import RoomFiltersFetch from './pages/sample-apiconnector-fetch';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/fetch">Fetch API</Link>
            </li>
            <li>
              <Link to="/axios">Axios</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/fetch" element={<RoomFiltersFetch />} />
          <Route path="/axios" element={<RoomFiltersAxios />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;