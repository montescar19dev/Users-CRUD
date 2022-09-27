import React from "react";
import avatar from "../assets/avatar-profile.jpg"

const UsersList = ({ users, deleteUser, selectUser }) => {
  return (
    <div>
      <h1>Users List</h1>
      <ul className="users-list">
        {users.map((user) => (
          <li className="usersCards" key={user.id}>
            <div>
              <img className="photo" src={avatar} alt="" />
            </div>
            <h3>{user.first_name} {user.last_name}</h3>
            <div>
              {<i class="fa-solid fa-envelope"></i>}{" "}
              <b>Email: </b>
              {user.email}
            </div>
            <div>
              {<i class="fa-solid fa-cake-candles"></i>}{" "}
              <b>Birthday: </b>
              {user.birthday}
            </div>
            <button className="UserButtons" onClick={() => deleteUser(user.id)}>Delete User</button>
            <button className="UserButtons" onClick={() => selectUser(user)}>Update info</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
