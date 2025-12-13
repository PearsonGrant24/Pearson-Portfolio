import React, { useState, useEffect } from "react";
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
          <li><a href="Home" className="active">Home</a></li>
          <li><a href="About">About</a></li>
          <li><a href="ProjectsPage">Projects</a></li>
          <li><a href="ContactPage">Contact</a></li>
          <li><a href="/resume.pdf">Resume</a></li>
          <li><a className="hire-btn" href="#hire">Hire Me</a></li>
        </ul>
      </div>

      {/* CURTAIN MENU */}
      <div className={`curtain-menu ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          &times;
        </button>

        <ul>
          <li onClick={() => setOpen(false)}><a href="#home">Home</a></li>
          <li onClick={() => setOpen(false)}><a href="#about">About</a></li>
          <li onClick={() => setOpen(false)}><a href="#projects">Projects</a></li>
          <li onClick={() => setOpen(false)}><a href="#contact">Contact</a></li>
          <li onClick={() => setOpen(false)}><a href="/resume.pdf">Resume</a></li>
          <li onClick={() => setOpen(false)}><a className="hire-btn" href="#hire">Hire Me</a></li>
        </ul>
      </div>

      {/* CURTAIN SHADOW BACKDROP */}
      {open && <div className="backdrop" onClick={() => setOpen(false)}></div>}
    </nav>
  );
}
