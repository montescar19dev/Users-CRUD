import React from "react";

const UsersList = ({ users, deleteUser, selectUser }) => {
  return (
    <div>
      <h1>Users List</h1>
      <ul className="users-list">
        {users.map((user) => (
          <li key={user.id}>
            <h3>{user.first_name} {user.last_name}</h3>
            <div>
              <b>Email: </b>
              {user.email}
            </div>
            <div>
              <b>Birthday: </b>
              {user.birthday}
            </div>
            <button onClick={() => deleteUser(user.id)}>Delete User</button>
            <button onClick={() => selectUser(user)}>Update info</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
