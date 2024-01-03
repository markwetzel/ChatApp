import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { DateTime } from "luxon";

const ChatWindow = () => {
  const { messages } = useContext(ChatContext);

  return (
    <div>
      {messages.map((message, index) => {
        const localTime = DateTime.fromISO(
          message.timestamp.toISOString()
        ).toLocaleString(DateTime.TIME_WITH_SECONDS);
        return <p key={index}>{`[${localTime}] ${message.text}`}</p>;
      })}
    </div>
  );
};

export default ChatWindow;
