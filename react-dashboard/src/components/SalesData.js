import React, { useState, useEffect } from 'react';
import '../asset/scss/SalesData.scss'; // Optional: Add styling

const SalesData = () => {
  const [salesData, setSalesData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:5000/sales'),
      fetch('http://localhost:5000/products')
    ])
      .then(([salesResponse, productsResponse]) => Promise.all([salesResponse.json(), productsResponse.json()]))
      .then(([sales, products]) => {
        setSalesData(sales);
        setProductsData(products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const salesWithProductNames = salesData.map((sale) => {
    const product = productsData.find((product) => product.ProductId === sale.ProductId);
    return {
      ...sale,
      ProductName: product ? product.ProductName : 'Unknown',
      Stock: product ? product.Stock : 'N/A'
    };
  });
  const handleDelete = (SaleId) => {
    fetch(`http://localhost:5000/sales/${SaleId}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedSales = salesData.filter(sale => sale.SaleId !== SaleId);
        setSalesData(updatedSales);
      })
      .catch((error) => {
        console.error('Error deleting sale:', error);
      });
  };


  return (
    <div className="container sales-data">
      <h3>Sales Data</h3>
      <table className="sales-table">
        <thead>
        <tr>
            <th>Sale ID</th>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {salesWithProductNames.map((sale) => (
            <tr key={sale.SaleId}>
              <td>{sale.SaleId}</td>
              <td>{sale.OrderId}</td>
              <td>{sale.ProductName}</td>
              <td>{sale.Quantity}</td>
              <td>{sale.Stock}</td>
              <td>
                <button onClick={() => handleDelete(sale.SaleId)} className="delete-btn">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesData;
