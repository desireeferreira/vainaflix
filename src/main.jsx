import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Seleciona o elemento com o id 'root' para renderizar o aplicativo React
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
