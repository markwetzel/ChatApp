import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const UserList = () => {
  const { users } = useContext(ChatContext);

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
