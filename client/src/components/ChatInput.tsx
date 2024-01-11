import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import styles from "./ChatInput.module.css";

const ChatInput = () => {
  const { addMessage } = useContext(ChatContext);
  const [input, setInput] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  const isDisabled = input.trim() === "";

  const sendMessage = () => {
    if (input.trim() === "") return;

    addMessage("12345", input);
    setInput("");
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button disabled={isDisabled} onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;
