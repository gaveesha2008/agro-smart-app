import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. මෙය ඉම්පෝට් කර තිබිය යුතුය
import App from './App.jsx';
import { LanguageProvider } from './LanguageContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* 2. මෙලෙස Router එකෙන් මුළු ඇප් එකම වට කළ යුතුය */}
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);