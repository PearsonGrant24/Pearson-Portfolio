// components/Navbar/AppNavbar.jsx
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import './AppNavbar.scss';

const LOGO_SRC = '/mnt/data/2247e24b-e406-491f-a683-18a63a42519c.png';

export default function AppNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="pg-navbar" sticky="top">
      <Container>

        {/* Left Side Brand */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={LOGO_SRC}
            alt="Pearson Grant logo"
            className="pg-logo"
            width="44"
            height="44"
          />
          <span className="brand-text">Pearson Grant</span>
        </Navbar.Brand>

        {/* Mobile Menu Toggle */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Right Side Nav Items */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-lg-center nav-right">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

            <a href="/resume.pdf" className="resume-link" target="_blank" rel="noreferrer">
              Resume
            </a>

            <Button
              variant="primary"
              className="ms-lg-3 hire-btn"
              href="#contact"
            >
              Hire Me
            </Button>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
