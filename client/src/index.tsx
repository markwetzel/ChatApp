// src/index.tsx
import { createRoot } from 'react-dom/client'; 
import App from './components/App'; 

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container); 
root.render(<App />); // Use root.render instead of ReactDOM.render - React 18


