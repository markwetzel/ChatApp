// src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './components/App'; 
import { ChatProvider } from './context/ChatContext'; // Import ChatProvider

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

// Wrap the App component with ChatProvider
root.render(
  <React.StrictMode>
    <ChatProvider>
      <App />
    </ChatProvider>
  </React.StrictMode>
);
