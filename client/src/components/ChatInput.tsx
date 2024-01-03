import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";

const ChatInput = () => {
  const { addMessage } = useContext(ChatContext);
  const [input, setInput] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (input.trim() === "") return;

    addMessage(input);
    setInput("");
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatInput;
