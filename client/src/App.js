import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/pages/Home';
import Comic from './components/pages/Comic';
import Dashboard from './components/pages/Dashboard';
import About from './components/pages/About';


function App() {
  let Component  
      switch (window.location.pathname) {
        case "/":
          Component = Home
          break
        case "/comics":
          Component = Comic
          break
        case "/dashboard":
          Component = Dashboard
          break
        case "/about":
          Component = About
          break
      }
      return (
        <div>
          <Header />
          <Navbar />
          <Component />
    </div>
  );
}

export default App;