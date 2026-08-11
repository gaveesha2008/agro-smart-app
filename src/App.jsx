import React, { useState } from 'react';
import WeatherUpdates from './WeatherUpdates';
import Signup from './Signup';
import Home from './Home';
import MyCrops from './MyCrops';

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');

  if (currentPage === 'weather') {
    return <WeatherUpdates onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'mycrops') {
    return <MyCrops onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'home') {
    return <Home onNavigate={(page) => setCurrentPage(page)} />;
  }

  if (currentPage === 'signup') {
    return <Signup onContinue={() => setCurrentPage('home')} />;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to AgroSmart</h1>
      <button 
        style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        onClick={() => setCurrentPage('home')}
      >
        Go to Home
      </button>
    </div>
  );
}

export default App;