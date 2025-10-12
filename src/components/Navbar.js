import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';

function Navbar() {
  const [theme, setTheme] = useState(() => {
    // Default to system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className="navbar">
      <div className="nav-left">My Portfolio</div>
      <div className="nav-right">
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/about">About</Link>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
