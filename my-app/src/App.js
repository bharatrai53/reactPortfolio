import './App.css';

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../src/pages/Home'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* <Routes>
            <Route path="/" element={<Home />} />
          </Routes>  */}
        </div>
      </div>
    </Router>
  );
}


export default App
