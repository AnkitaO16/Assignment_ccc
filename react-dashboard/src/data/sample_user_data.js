export const sampleUserData = {
    users: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        profile: {
          age: 30,
          location: 'New York',
          avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        posts: [
          {
            id: 101,
            title: 'React is awesome',
            body: 'React makes it easier to build interactive UIs.',
          },
          {
            id: 102,
            title: 'Understanding useState',
            body: 'The useState hook is one of the fundamental hooks in React.',
          },
        ],
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        profile: {
          age: 25,
          location: 'Los Angeles',
          avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        },
        posts: [
          {
            id: 103,
            title: 'JavaScript Tips',
            body: 'JavaScript is a versatile language for both front-end and back-end development.',
          },
        ],
      },
    ],
    userStats: {
      totalUsers: 5000,
      activeUsers: 4500,
    },
    salesData: [
      { month: 'January', sales: 1200 },
      { month: 'February', sales: 1500 },
      { month: 'March', sales: 1300 },
      { month: 'April', sales: 1600 },
    ],
    notifications: [
      { id: 1, message: 'New user registered', date: '2024-12-01' },
      { id: 2, message: 'Server maintenance scheduled', date: '2024-12-05' },
      { id: 3, message: 'New sales data available', date: '2024-12-10' },
    ],
  };
  