import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/upload" className="navbar-link">Upload</Link>
        </div>
        <div className="navbar-right">
          <img src={require('../images/logoshrimp.png')} alt="Logo" className="logo-image" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
