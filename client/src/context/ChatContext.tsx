import React, { createContext, useState } from "react";
import { Message } from "../components/Message";
import { User } from "../components/User";

// Shape of our context state
interface ChatContextType {
  users: User[];
  addUser: (username: string) => void;
  messages: Message[];
  addMessage: (userId: string, message: string) => void;
}

// We create the context with a default value
export const ChatContext = createContext<ChatContextType>({
  users: [],
  addUser: () => {},
  messages: [],
  addMessage: () => {},
});

interface ChatProviderProps {
  children: React.ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  const addUser = (username: string) => {
    const newUser: User = { id: generateUniqueId(), username }; // Implement generateUniqueId function
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };
  const addMessage = (message: string) => {
    const newMessage: Message = {
      text: message,
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage, addUser, users }}>
      {children}
    </ChatContext.Provider>
  );
};
function generateUniqueId(): string {
  return Math.random().toString(36).substr(2, 9);
}
