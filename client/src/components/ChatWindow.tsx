import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

function formatAMPM(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
}

const ChatWindow = () => {
  const { messages } = useContext(ChatContext);

  return (
    <div>
      {messages.map((message, index) => (
        <p key={index}>{`[${formatAMPM(message.timestamp)}] ${
          message.text
        }`}</p>
      ))}
    </div>
  );
};

export default ChatWindow;
