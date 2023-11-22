// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/cart" className="nav-link">Cart</Link>
    </nav>
  );
};

export default Navbar;
