import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from './Navigation';

function Header() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Navigation />
      <ul className="nav-links">
        <li>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/resume" className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`}>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
