import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from './context/Productcontext';
import { FilterContextProvider } from './context/Filter_context';
import { CartProvider } from './context/Cart_context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Auth0Provider
        domain="dev-jo272c0wefp5je2m.us.auth0.com"
        clientId="Wxwp63Qh9Vbh72yu0jWxuUb6VFdTMJHm"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <AppProvider>
          <FilterContextProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterContextProvider>
        </AppProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

