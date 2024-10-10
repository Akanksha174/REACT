import React from 'react';

function UserDetail({ user }) {
  return (
    <div>
      <h2>User Details:</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetail;
