import React from "react";
import { Link } from "react-router-dom";
import "./Style/Navigation.css"; // Import your custom CSS file for navbar styling

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Navbar brand */}
        <Link className="navbar-brand" to="/"></Link>

        {/* Toggler button for collapsible content */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div
          className="collapse navbar-collapse"
          id="navbarToggleExternalContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Nav links */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/full-stack-development">
                Full Stack Development
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/data-science">
                Data Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cyber-security">
                Cyber Security
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/digitalmarketing">
                Digital Marketing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
