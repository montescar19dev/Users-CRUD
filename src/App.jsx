import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import "./App.css";


function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  console.log(users);

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const addUser = (newUser) => {
    axios
      .post("https://users-crud1.herokuapp.com/users/", newUser)
      .then(() => getUsers())
      .catch((error) => console.log(error.response));
  };

  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  };

  const selectUser = (user) => {
    setUserSelected(user);
  };

  const deselectUser = () => setUserSelected(null);

  const updateUser = (newUser) => {
    axios
      .put(
        `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
        newUser
      )
      .then(() => getUsers())
      .catch((error) => console.log(error.response));
  };

  console.log(userSelected);

  return (
    <>
      <div className="bg">
        <div className="app">
          <div className="usersForm">
            <h1>Users CRUD</h1>
            <UsersForm
              addUser={addUser}
              userSelected={userSelected}
              updateUser={updateUser}
              deselectUser={deselectUser}
            />
          </div>
          <div className="usersList">
            <UsersList
              users={users}
              deleteUser={deleteUser}
              selectUser={selectUser}
            />
          </div>
        </div>
      </div>
      <ul className="glass">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
    </>
  );
}

export default App;
