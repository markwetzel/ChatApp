import { useContext, useState, useEffect } from "react";
import { ChatContext } from "../context/ChatContext";
import ChatInput from "./ChatInput";
import ChatWindow from "./ChatWindow";
import UserList from "./UserList";
import UsernamePage from "./UsernamePage";

const App = () => {
  const { addUser } = useContext(ChatContext);
  const [username, setUsername] = useState("");
  const [isUserAdded, setIsUserAdded] = useState(false);

  useEffect(() => {
    if (username && !isUserAdded) {
      addUser(username);
      setIsUserAdded(true);
    }
  }, [username, isUserAdded, addUser]);

  if (!isUserAdded) {
    return <UsernamePage setUsername={setUsername} />;
  }

  return (
    <>
      <ChatWindow />
      <UserList />
      <ChatInput />
    </>
  );
};

export default App;
