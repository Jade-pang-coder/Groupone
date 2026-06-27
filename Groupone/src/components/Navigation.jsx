import React from 'react';
import { Link } from 'react-router-dom';
import '../Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">Group One</h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/welcome" className="nav-link">Welcome</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
