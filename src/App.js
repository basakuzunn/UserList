import React from "react";
import UserListInput from "./components/UserListInput/UserListInput";
import { useState } from "react";
import UserList from "./components/UserList/UserList";
function App() {
  const [listUsers, setListUsers] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setListUsers((prevUsers) => {
      const updatedUsers = [...prevUsers, { name: uName, age: uAge, id: Math.random().toString() }];
      return updatedUsers;
    });
  };

  return (
    <div>
      <UserListInput onAddUser={addUserHandler} />
      <UserList users={listUsers} />
    </div>
  );
}

export default App;
