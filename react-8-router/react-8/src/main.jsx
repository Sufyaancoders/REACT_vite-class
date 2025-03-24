import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* Wrap your app with BrowserRouter */}
    <App />
    <ToastContainer position="top-right" />
    {/* You can add more toast options here */}
    {/* Example: <ToastContainer autoClose={3000} /> */}
  </BrowserRouter>
);