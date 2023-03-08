import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Buy, sell, exchange comics!</h1>
      <img src="../client/public/colin2.gif" alt="Business logo" width="200" height="200"></img>
      <input type="text" placeholder="Search.."></input>
    </header>
  );
}

export default Header;
