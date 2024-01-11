import React, { useState } from "react";

interface UsernamePageProps {
  setUsername: (username: string) => void;
}

const UsernamePage = ({ setUsername }: UsernamePageProps) => {
  const [tempUsername, setTempUsername] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setUsername(tempUsername);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Enter your username:</label>
        <input
          id='username'
          type='text'
          value={tempUsername}
          onChange={(e) => setTempUsername(e.target.value)}
          required
        />
        <button type='submit'>Join Chat</button>
      </form>
    </div>
  );
};

export default UsernamePage;
