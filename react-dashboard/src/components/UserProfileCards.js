import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserProfileCards = () => {
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container sales-data">
      <div className="row my-2">
        <h3>Users</h3>
        {users.map((user) => (
    <div className="col-md-4 mb-4" key={user.id}>
      <div
        className="card h-100 text-center"
        style={{ borderRadius: '8px', overflow: 'hidden' }}
      >
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">
            <strong>Username:</strong> {user.username}
          </p>
          <p className="card-text">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="card-text">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="card-text">
            <strong>Website:</strong>{" "}
            <a href={`http://${user.website}`} target="_blank" rel="noreferrer">
              {user.website}
            </a>
          </p>
          <p className="card-text">
            <strong>Address:</strong> {`${user.address.street}, ${user.address.suite}, ${user.address.city} - ${user.address.zipcode}`}
          </p>
          <p className="card-text">
            <strong>Company:</strong> {user.company.name}
          </p>
          <p className="card-text">
            <strong>Catchphrase:</strong> {user.company.catchPhrase}
          </p>
        </div>
      </div>
    </div>
  ))}
      </div>
    </div>
  );
};

export default UserProfileCards;
