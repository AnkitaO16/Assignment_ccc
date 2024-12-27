import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaTachometerAlt, FaUsers, FaCog, FaEnvelope, FaBell, FaBars, FaTimes, FaChartBar } from 'react-icons/fa';
import '../asset/scss/Navbar.scss';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="navbar">
      <h1 className="navbar-title">Dashboard</h1>
      
      <div className={`menu ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/users">
              <FaUsers />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <FaChartBar />
              <span>Sales</span>
            </Link>
          </li>
       
          <li>
            <Link to="/notifications">
              <FaBell />
              <span>Notifications</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
