import ChatInput from "./ChatInput";
import ChatWindow from "./ChatWindow";
import UserList from "./UserList";

// Create a new component
const ChatInterface = () => {
  return (
    <>
      <ChatWindow />
      <UserList />
      <ChatInput />
    </>
  );
};

// Use the new component
export default ChatInterface;
