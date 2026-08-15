import React from 'react';
import './App.css';
import welcomeBg from './assets/welcome-bg.jpg';

function GetStarted({ onNext }) {
  return (
    <div className="page-container">
      <div 
        className="get-started-page" 
        style={{ backgroundImage: `url(${welcomeBg})` }}
      >
        <div className="get-started-overlay">
          <div className="action-section">
            <button className="get-started-btn" onClick={onNext}>
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