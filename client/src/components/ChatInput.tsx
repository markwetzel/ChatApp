import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";

const ChatInput = () => {
  const { addMessage } = useContext(ChatContext);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    addMessage(input);
    setInput("");
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatInput;
