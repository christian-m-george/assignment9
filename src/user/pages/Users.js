import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Rowan Student',
      image:
        'http://elvis.rowan.edu/~burnse/assets/profs-logo.png',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
