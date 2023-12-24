import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const ChatWindow = () => {
  const { messages } = useContext(ChatContext);

  return (
    <div>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
};

export default ChatWindow;
