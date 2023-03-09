import React from 'react';
// import { Route, Routes } from "react-router-dom";
import Navbarr from './components/Navbar';
import Header from './components/Header';
// import Home from './components/pages/Home';
// import Comic from './components/pages/Comic';
// import Dashboard from './components/pages/Dashboard';
// import About from './components/pages/About';
import Cardgen from './components/pages/Cardgen'
import Cardspec from './components/pages/Cardspec'


function App() {
      return (
        <>
          <Header />
          <Navbarr />
          {/* <Home />
          <Comic />
          <About /> */}
          <Cardgen />
          <Cardspec />
          {/* <Dashboard />
          <Discount />
          <Login />
          <New />
          <Sell />
          <Signup /> */}
          <div className="container">
            {/* <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/comic" element={<Comic />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
            </Routes> */}
            </div>
    </>
  );
}

export default App;