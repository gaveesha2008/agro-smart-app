import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import tomatoImg from './assets/tomato.jpg'; // ඔබේ රූපය ඇති ස්ථානය අනුව මෙය වෙනස් කරගන්න

function MyCrops() {
  const navigate = useNavigate();

  return (
    <div className="my-crops-page">
      <div className="my-crops-container">
        
        {/* Banner */}
        <div className="crops-top-banner">
          <button className="crops-back-btn" onClick={() => navigate(-1)}>←</button>
          <h1>My Crop</h1>
        </div>

        {/* Top Info Card - Attractive Design */}
        <div className="crop-main-card attractive-card">
          <div className="crop-header-row">
            <img src={tomatoImg} alt="Tomato" className="crop-tomato-img" />
            <div className="crop-title-area">
              <h2>Tomato</h2>
              <p className="crop-status-badge">Healthy</p>
            </div>
          </div>
          <div className="crop-details-grid">
            <div><strong>Planted:</strong> 2026/07/28</div>
            <div><strong>Location:</strong> Galle</div>
            <div><strong>Field:</strong> 0.5 Acre</div>
            <div><strong>Plants:</strong> 350</div>
            <div><strong>Age:</strong> 45 Days</div>
            <div><strong>ID:</strong> Field 1</div>
          </div>
        </div>

        {/* Growth Stage - Visualized */}
        <div className="growth-stage-card">
          <h3>Crop Growth Stage</h3>
          <div className="progress-container">
            <div className="progress-bar-fill"></div>
          </div>
          <div className="growth-status-text">Current Stage: Flowering - 65%</div>
        </div>

        {/* Sub Details Grid */}
        <div className="sub-cards-grid">
          <div className="sub-info-card"><h4>💧 Irrigation</h4><p>Next: Tomorrow</p></div>
          <div className="sub-info-card"><h4>🥗 Nutrition</h4><p>Next: In 3 Days</p></div>
          <div className="sub-info-card"><h4>❤️ Health</h4><p>No Issues</p></div>
          <div className="sub-info-card"><h4>🧺 Harvest</h4><p>In 24 Days</p></div>
        </div>

        {/* Buttons */}
        <div className="crop-action-buttons">
          <button className="add-crop-btn">Add New Crop</button>
          <button className="edit-crop-btn">Edit Details</button>
        </div>

      </div>
    </div>
  );
}

export default MyCrops;