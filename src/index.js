// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importar o BrowserRouter do react-router-dom
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Envolva todo o <App /> dentro de <BrowserRouter> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
