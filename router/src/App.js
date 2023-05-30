import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AlbumPage from './components/AlbumPage';
import PhotosPage from './components/PhotosPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="HomePage">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="HomePage" element={<HomePage />} />
          <Route path="/albums/:userId" element={<AlbumPage />} />
          <Route path="/photos/:albumId" element={<PhotosPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
