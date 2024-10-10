import React from 'react';

function UserList({ users, onUserSelect }) {
  return (
    <div>
      <h2>Select a user:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => onUserSelect(user)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
