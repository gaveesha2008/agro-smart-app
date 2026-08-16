import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function DiseaseDetection() {
  const navigate = useNavigate();

  return (
    <div className="disease-page">
      <div className="disease-container">
        
        {/* Top Banner */}
        <div className="disease-top-banner">
          <button className="disease-back-btn" onClick={() => navigate(-1)}>←</button>
          <h1>Disease Detection</h1>
        </div>

        {/* Upload Box */}
        <div className="upload-box">
          <div className="upload-icon-area">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#1b8e5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
          </div>
          <h2>Upload Leaf Image</h2>
          <p>Tap to upload or take a photo</p>
        </div>

        {/* Take Photo Button */}
        <button className="take-photo-btn">
          📷 Take Photo
        </button>

        {/* Tip Box */}
        <div className="disease-tip-box">
          <span className="tip-icon">🌿</span>
          <p><strong>Tip:</strong> Make sure that leaf is clear and visible for accurate results</p>
        </div>

      </div>
    </div>
  );
}

export default DiseaseDetection;