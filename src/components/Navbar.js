import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for active link highlighting
import { FaTachometerAlt, FaUsers, FaChartBar, FaBars, FaTimes } from 'react-icons/fa';
import '../asset/scss/Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <h1 className="navbar-title">Assignment</h1>
      
      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu - Visible when open */}
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              <FaTachometerAlt />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" activeClassName="active">
              <FaUsers />
              <span>Users</span>
            </NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
