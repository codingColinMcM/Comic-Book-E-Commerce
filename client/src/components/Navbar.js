import React from 'react';
// import { Link } from "react-router-dom";
import "../styles/Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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

// const Navbar= () =>{
//     return (
//     <nav className="nav">
//       <ul>
//         <li>
//           <a href="/">Home</a>
//         </li>
//         <li>
//           <a href="/comics">Comics</a>
//         </li>
//         <li>
//           <a href="/dashboard">Dashboard</a>
//         </li>
//         <li>
//           <a href="/about">About</a>
//         </li>
//       </ul>
//     </nav>
//   )
//     }


  
function Navbarr() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <NavDropdown title="Comics" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Browse</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                New
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Discounted</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sell</NavDropdown.Item>
            </NavDropdown>
           <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
  
export default Navbarr;
