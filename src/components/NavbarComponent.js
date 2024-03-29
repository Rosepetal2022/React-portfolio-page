import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import '../style.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  Link
} from "react-router-dom";



function NavbarComponent() {
  
  return (
    <>
    <Navbar className="nav-bar font" expand="lg">
      <Container>
        <Navbar.Brand className="text-light py-4"  href="/about">Rachel Spears</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light" as={Link} to="/about">About</Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>  




  );
}

export default NavbarComponent;