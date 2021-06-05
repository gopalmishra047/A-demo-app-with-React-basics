import React, { useState } from 'react';
import AddUser from './compoments/Users/AddUser';
import UsersList from './compoments/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (name, age) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { id: Math.random().toString(), name: name, age: age },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
