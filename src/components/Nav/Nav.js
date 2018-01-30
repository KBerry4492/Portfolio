import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <Link className="navbar-brand" to="/">
      Kevin Berry
    </Link>
    
    <div id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
