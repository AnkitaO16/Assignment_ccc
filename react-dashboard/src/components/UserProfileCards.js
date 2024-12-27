import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfileCards = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user data from the server
    fetch('http://localhost:5000/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
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
          <div className="col-md-3 mb-4" key={user.id}>
            <div
              className="card h-100 text-center"
              style={{ borderRadius: '8px', overflow: 'hidden' }}
            >
              <img
                src={user.profile.avatar}
                className="card-img-top"
                alt={`${user.name}'s avatar`}
                style={{ objectFit: 'cover', height: '150px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="card-text">
                  <strong>Age:</strong> {user.profile.age}
                </p>
                <p className="card-text">
                  <strong>Location:</strong> {user.profile.location}
                </p>
              </div>
              <div className="card-footer bg-white">
                <h6>Posts</h6>
                {user.posts.length > 0 ? (
                  <ul className="list-unstyled text-start">
                    {user.posts.map((post) => (
                      <li key={post.id}>
                        <strong>{post.title}</strong>: {post.body}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted">No posts available</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfileCards;
