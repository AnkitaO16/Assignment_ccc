import React, { useState, useEffect } from 'react';
import { FaUsers, FaCogs, FaShoppingCart, FaBell } from 'react-icons/fa';
import { sampleUserData } from '../data/sample_user_data'; // Import sample data
import '../asset/scss/Dashboard.scss';

const Dashboard = () => {
  const [data, setData] = useState(null);

  // Fetching sample data (using the imported data)
  useEffect(() => {
    const fetchData = async () => {
      // Simulate a delay like an API call and set the sample data
      setTimeout(() => {
        setData(sampleUserData); // Set the data from the imported file
      }, 1000); // Simulate a delay of 1 second for fetching data
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  // Get total sales value
  const totalSales = data.salesData.reduce((acc, item) => acc + item.sales, 0);

  // Notifications
  const notifications = data.notifications.map((notification) => (
    <div key={notification.id} className="notification-item">
      <span>{notification.message}</span> <small>{notification.date}</small>
    </div>
  ));

  return (
    <div className="dashboard">
      {/* Header Section */}
      <div className="dashboard-header">
        <h2>Welcome to the Dashboard</h2>
      </div>

      {/* Summary Section */}
      <div className="summary">
        <div className="card">
          <FaUsers />
          <h3>{data.userStats.totalUsers}</h3>
          <p>Total Users</p>
        </div>
        <div className="card">
          <FaCogs />
          <h3>{data.userStats.activeUsers}</h3>
          <p>Active Users</p>
        </div>
        <div className="card">
          <FaShoppingCart />
          <h3>{totalSales}</h3>
          <p>Total Sales</p>
        </div>
        <div className="card">
          <FaBell />
          <h3>{data.notifications.length}</h3>
          <p>Notifications</p>
        </div>
      </div>

      {/* Sales Overview Section */}
      <div className="sales-overview">
        <h3>Sales Overview</h3>
        <div className="sales-bar">
          {data.salesData.map((item) => (
            <div key={item.month} className="sales-bar-item">
              <div className="sales-bar-label">{item.month}</div>
              <div
                className="sales-bar-progress"
                style={{ width: `${(item.sales / totalSales) * 100}%` }}
              ></div>
              <div className="sales-bar-value">₹{item.sales}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications Section */}
      <div className="notifications">
        <h3>Recent Notifications</h3>
        {notifications}
      </div>
    </div>
  );
};

export default Dashboard;
