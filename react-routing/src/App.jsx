import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Missing import
import Home from './pages/Home';
import About from './pages/About'; // Ensure these files exist
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;