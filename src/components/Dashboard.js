import React, { useState, useEffect } from 'react';
import { FaUsers, FaCogs, FaShoppingCart, FaCity, FaBuilding, FaMapMarkedAlt } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../asset/scss/Dashboard.scss';

const Dashboard = () => {

  const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      // Fetch user data from the server
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch users");
          }
          return response.json();
        })
        .then((data) => {
          setUsers(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, []);

  const totalUsers = users.length;
  const uniqueCities = new Set(users.map((user) => user.address.city)).size;
  const uniqueCompanies = new Set(users.map((user) => user.company.name)).size;
  const usersWithGeo = users.filter(
    (user) => user.address.geo.lat && user.address.geo.lng
  ).length;

  // Bar Chart Data
  const cityDistribution = Object.values(
    users.reduce((acc, user) => {
      acc[user.address.city] = acc[user.address.city] || { city: user.address.city, count: 0 };
      acc[user.address.city].count += 1;
      return acc;
    }, {})
  );

  return (
  
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome to the Dashboard</h2>
      </div>

      {/* Summary Cards */}
      <div className="summary">
        <div className="card">
          <FaUsers />
          <h3>{totalUsers}</h3>
          <p>Total Users</p>
        </div>
        <div className="card">
          <FaCity />
          <h3>{uniqueCities}</h3>
          <p>Unique Cities</p>
        </div>
        <div className="card">
          <FaBuilding />
          <h3>{uniqueCompanies}</h3>
          <p>Unique Companies</p>
        </div>
        <div className="card">
          <FaMapMarkedAlt />
          <h3>{usersWithGeo}</h3>
          <p>Users with Geo Location</p>
        </div>
      </div>

      {/* Bar Chart Section */}
      <div className="sales-overview">
        <h3>User Distribution by City</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={cityDistribution}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="city" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#2980b9" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
