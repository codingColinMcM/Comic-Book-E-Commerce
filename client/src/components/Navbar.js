import React from 'react';
import {  Link } from "react-router-dom";
import "../styles/Navbar.css"

const Navbar= () =>{
  return (
  <nav className="nav">
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/comics">Comics</a>
      </li>
      <li>
        <a href="/dashboard">Dashboard</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
  </nav>
)
  }
  
export default Navbar;
