import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function GetStarted() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div 
        className="get-started-page"
        style={{ backgroundImage: `url('/src/assets/welcome-bg.jpg')` }} 
      >
        <div className="get-started-overlay">
          <div className="action-section">
            
            <button 
              className="get-started-btn" 
              onClick={() => navigate('/login')}
            >
              GET STARTED &gt;
            </button>
            
            <div className="language-selector">
              <button className="lang-btn">සිංහල</button>
              <button className="lang-btn active">ENGLISH</button>
              <button className="lang-btn">தமிழ்</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;