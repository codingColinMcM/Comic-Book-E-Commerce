import React from 'react';
// import { Link } from "react-router-dom";
import "../styles/Navbar.css"

// function Navbar () {
//   return (
//   <nav className="nav">
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/comics">Comics</Link>
//       </li>
//       <li>
//         <Link to="/dashboard">Dashboard</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//     </ul>
//   </nav>
// )
//   }

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
