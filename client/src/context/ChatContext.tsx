import React, { createContext, useState } from "react";

interface Message {
  text: string;
  timestamp: Date;
}

// Shape of our context state
interface ChatContextType {
  messages: Message[];
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
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (message: string) => {
    const newMessage: Message = {
      text: message,
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
