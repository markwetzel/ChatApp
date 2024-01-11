import { useContext, useState, useEffect } from "react";
import { ChatContext } from "../context/ChatContext";
import UsernameEntryPage from "./UsernameEntryPage";
import ChatInterface from "./ChatInterface";

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
    return <UsernameEntryPage setUsername={setUsername} />;
  }

  return <ChatInterface />;
};

export default App;
