import React, { createContext, useState } from "react";

// Shape of our context state
interface ChatContextType {
  messages: string[];
  addMessage: (message: string) => void;
}

// We create the context with a default value
export const ChatContext = createContext<ChatContextType>({
  messages: [],
  addMessage: () => {},
});

interface ChatProviderProps {
  children: React.ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
