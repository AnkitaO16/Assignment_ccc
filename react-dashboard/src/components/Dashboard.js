import React, { useState, useEffect } from 'react';
import { FaUsers, FaCogs, FaShoppingCart } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../asset/scss/Dashboard.scss';

const Dashboard = () => {
  const [salesData, setSalesData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:5000/sales'),
      fetch('http://localhost:5000/products'),
      fetch('http://localhost:5000/users') 
    ])
      .then(([salesResponse, productsResponse, usersResponse]) =>
        Promise.all([salesResponse.json(), productsResponse.json(), usersResponse.json()])
      )
      .then(([sales, products, users]) => {
        setSalesData(sales);
        setProductsData(products);
        setUsersData(users);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  const totalSales = salesData.reduce((acc, sale) => acc + sale.Quantity, 0);

  const totalStock = productsData.reduce((acc, product) => acc + product.Stock, 0);

  const totalUsers = usersData.length;

  const chartData = salesData.map(item => ({
    month: item.month,
    sales: item.Quantity,
  }));

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome to the Dashboard</h2>
      </div>

      <div className="summary">
        <div className="card">
          <FaUsers />
          <h3>{totalUsers}</h3>
          <p>Total Users</p>
        </div>
        <div className="card">
          <FaShoppingCart />
          <h3>{totalSales}</h3>
          <p>Total Sales</p>
        </div>
        <div className="card">
          <FaCogs />
          <h3>{totalStock}</h3>
          <p>Total Stock</p>
        </div>
      </div>

      {/* Sales Overview Section with Bar Chart */}
      <div className="sales-overview">
        <h3>Sales Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#2980b9" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
