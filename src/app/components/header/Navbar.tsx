import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
// import "./Navbar.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-wrapper container">
        
        {/* Brand */}
        <div className="brand">Pearson Grant</div>

        {/* Mobile Toggle */}
        <div className="hamburger" onClick={() => setOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links desktop">
          <li>
            <NavLink to="/Home" className={({ isActive }) => isActive ? "active" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" className={({ isActive }) => isActive ? "active" : ""}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/ProjectsPage" className={({ isActive }) => isActive ? "active" : ""}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/ContactPage" className={({ isActive }) => isActive ? "active" : ""}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/ResumePage" className={({ isActive }) => isActive ? "active" : ""}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/HireMePage" className="hire-btn">
              Hire Me
            </NavLink>
          </li>
        </ul>


      </div>

      {/* CURTAIN MENU */}
      <div className={`curtain-menu ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          &times;
        </button>

        <ul>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/About">About</NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/ProjectsPage">Projects</NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/ContactPage">Contact</NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/ResumePage">Resume</NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/HireMePage" className="hire-btn">
              Hire Me
            </NavLink>
          </li>
        </ul>

      </div>

      {/* CURTAIN SHADOW BACKDROP */}
      {open && <div className="backdrop" onClick={() => setOpen(false)}></div>}
    </nav>
  );
}
