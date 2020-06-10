import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: Math.random().toString(),
      name: 'deez nuts',
      image:
        'https://images.unsplash.com/photo-1591756625939-2981cb54a3b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80',
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
