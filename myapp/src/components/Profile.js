import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    (isAuthenticated || storedUser) && (
      <div>
        <img src={storedUser?.picture} alt={storedUser?.name} />
        <h2>{storedUser?.name}</h2>
        <p>{storedUser?.email}</p>
      </div>
    )
  );
};

export default Profile;
