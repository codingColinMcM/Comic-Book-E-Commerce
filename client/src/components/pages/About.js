import React from 'react';
import logo from './logo2.gif';

export default function About() {
  return (
    <div className="container">
      <img src={logo} alt="logo" height="200" width="200"></img>
      <h1 className="shadow">About Us</h1>
      <p>
        We created this app for the purpose of offering a location for people to buy, sell, exchange comic books.
      </p>
    </div>
  );
}
