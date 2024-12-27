import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './asset/scss/App.scss';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import SalesData from './components/SalesData';
import UserProfileCards from './components/UserProfileCards';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <Router>
      <div className="app">
        {/* Navbar and Sidebar will be part of the header section */}
        <header className="header">
          <Navbar />
        </header>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sales" element={<SalesData />} />
            <Route path="/users" element={<UserProfileCards />} />

          </Routes>
        </div>

        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
