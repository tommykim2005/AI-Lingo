// src/main.jsx
import './index.css';  // <-- THIS IS REQUIRED
import App from './components/App.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
