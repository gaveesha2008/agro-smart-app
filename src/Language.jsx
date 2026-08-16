import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Language() {
  const [selectedLang, setSelectedLang] = useState('Sinhala');
  const navigate = useNavigate();

  const languages = ['Sinhala', 'Tamil', 'English'];

  return (
    <div className="lang-page">
      <div className="lang-container">
        <h1>Language</h1>
        <p className="lang-subtitle">Select Your Language</p>

        <div className="lang-options">
          {languages.map((lang) => (
            <div 
              key={lang} 
              className={`lang-card ${selectedLang === lang ? 'active' : ''}`}
              onClick={() => setSelectedLang(lang)}
            >
              <span>{lang}</span>
              <div className="radio-circle">
                {selectedLang === lang && <div className="inner-dot">✓</div>}
              </div>
            </div>
          ))}
        </div>

        <button className="save-btn" onClick={() => navigate('/profile')}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Language;