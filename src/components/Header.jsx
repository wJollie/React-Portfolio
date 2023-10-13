import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>William Jollie</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
