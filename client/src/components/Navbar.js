import React from 'react';
import {  Link } from "react-router-dom";
import "../styles/Navbar.css"

const Navbar= () =>{
  return (
  <nav className="nav">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/comics">Comics</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
)
  }
  
export default Navbar;
