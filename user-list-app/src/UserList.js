import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css"; // optional for styling

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    // Fetch users from JSONPlaceholder API
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []); // empty dependency = run once on mount

  return (
    <div className="user-list-container">
      <h1>List of Users</h1>
      <ul>
        {listOfUser.map((user) => (
          <li key={user.id} className="user-item">
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;