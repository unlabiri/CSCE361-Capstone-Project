import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/index.css';  // This remains unchanged, as it's in the styles folder
import { BrowserRouter } from 'react-router-dom';
import App from './App';  // Updated to reflect that App is inside the pages folder

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
