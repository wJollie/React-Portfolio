import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li className={location.pathname === "/about-me" ? "active" : ""}>
          <Link to="/about-me">About Me</Link>
        </li>
        <li className={location.pathname === "/portfolio" ? "active" : ""}>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={location.pathname === "/resume" ? "active" : ""}>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
