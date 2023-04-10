import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUserList(res.data);
    });
  }, []);
  return (
    <div>
      {userList.map((e) => (
        <h2>
          {e.name}
          <br />
          {e.id}
        </h2>
      ))}
    </div>
  );
};

export default UserList;
