import React, { useState } from 'react';
import GetStarted from './GetStarted';
import Login from './Login';
import Home from './Home';
import './App.css';
function App() {
  // Navigation State
  const [currentPage, setCurrentPage] = useState('get-started');

  return (
    <div className="main-app">
      {/* 1. Get Started Screen */}
      {currentPage === 'get-started' && (
        <GetStarted onNext={() => setCurrentPage('login')} />
      )}

      {/* 2. Login Screen */}
      {currentPage === 'login' && (
        <Login onLoginSuccess={() => setCurrentPage('home')} />
      )}

      {/* 3. Home Screen */}
      {currentPage === 'home' && (
        <Home />
      )}
    </div>
  );
}

export default App;