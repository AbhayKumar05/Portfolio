import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-left">
        <Link to="/watching" className="navbar-logo"> 
          <img
            src="https://fontmeme.com/permalink/250916/af5c7bd6608379fee8c91dbd87b5006b.png"
            alt="netflix-font"
            border="0"
          />
        </Link>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li><Link to="/watching">Home</Link></li> 
          <li><Link to="/projects">Projects</Link></li> 
          <li><Link to="/contact">Hire Me</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
