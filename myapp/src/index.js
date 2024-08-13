import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' instead of 'react-dom'
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0Provider';
import { CartProvider } from './contexts/CartContext'; // Adjust the path as needed

// Create the root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Auth0ProviderWithHistory>
      <CartProvider>
        <App />
      </CartProvider>
    </Auth0ProviderWithHistory>
  </Router>
);