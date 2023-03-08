import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/pages/Home';
import Comic from './components/pages/Comic';
import Dashboard from './components/pages/Dashboard';
import About from './components/pages/About';

function App() {
      return (
        <>
          <Header />
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/comic" element={<Comic />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
            </Routes>
            </div>
    </>
  );
}

export default App;