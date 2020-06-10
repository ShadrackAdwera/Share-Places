import React from 'react';
import UsersList from '../components/UsersList';


const Users = () => {
  const USERS = [
    {
      id: Math.random().toString(),
      name: 'Adwesh',
      image:
        'https://images.unsplash.com/photo-1591641079589-be6c042ccdf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      places: 3,
    },
  ];

  return (
    <div>
      <UsersList users={USERS} />
    </div>
  );
};

export default Users;
