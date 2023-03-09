import React from 'react';
// import { Route, Routes } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbarr from './components/Navbar';
import Header from './components/Header';
import Home from './components/pages/Home';
// import Comic from './components/pages/Comic';
import Browse from './components/pages/Browse'
import Dashboard from './components/pages/Dashboard';
import About from './components/pages/About';
import Cardgen from './components/pages/Cardgen'
import Cardspec from './components/pages/Cardspec'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import Sell from './components/pages/Sell'
// import Comic from './components/pages/Comic'


function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/dashboard":
      Component = Dashboard
      break
    case "/about":
      Component = About
      break
    case "/sell":
        Component = Sell
        break
    case "/login":
        Component = Login
        break
    case "/signup":
        Component = Signup
        break
    case "/dashboard":
          Component = Dashboard
          break
    case "/cardgen":
            Component = Cardgen
            break
    case "/cardspec":
            Component = Cardspec
            break
    case "/browse":
            Component = Browse
            break
  }
      return (
        <>
          <Header />
          <Navbarr /> 
          <Component />         
          {/* <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/comic" element={<Comic />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
            </Routes>
            </div> */}
    </>
  );
}

export default App;