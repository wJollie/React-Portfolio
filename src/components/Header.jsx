import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  // Get the current route location
  const location = useLocation();

  return (
    <header>
      <h1>William Jollie</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about-me" className={location.pathname === '/about-me' ? 'active' : ''}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact Me
            </Link>
          </li>
          <li>
            <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
