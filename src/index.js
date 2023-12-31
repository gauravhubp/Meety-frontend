import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SocketProvider } from './context/SocketProvider';
import Home from './Homepage/Home';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="gaurav3521.us.auth0.com"
  clientId="4sQUb2OgEh4UhGsZHkFktc54Gd0COkWI"
    redirectUri={window.location.origin}
>
  <React.StrictMode>
    <BrowserRouter>
    <SocketProvider>
    <Home/>
    </SocketProvider>
    </BrowserRouter>
  </React.StrictMode>
  </Auth0Provider>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
