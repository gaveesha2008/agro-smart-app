import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bottom-nav-bar">
      <div 
        className={`bottom-nav-item ${isActive('/home') ? 'active' : ''}`}
        onClick={() => navigate('/home')}
      >
        <span className="bottom-nav-icon">🏠</span>
        <span className="bottom-nav-text">Home</span>
      </div>

      <div 
        className={`bottom-nav-item ${isActive('/my-crops') ? 'active' : ''}`}
        onClick={() => navigate('/my-crops')}
      >
        <span className="bottom-nav-icon">🌱</span>
        <span className="bottom-nav-text">Crops</span>
      </div>

      <div 
        className={`bottom-nav-item ${isActive('/disease-detection') ? 'active' : ''}`}
        onClick={() => navigate('/disease-detection')}
      >
        <span className="bottom-nav-icon">📷</span>
        <span className="bottom-nav-text">Scan</span>
      </div>

      <div 
        className={`bottom-nav-item ${isActive('/market-prices') ? 'active' : ''}`}
        onClick={() => navigate('/market-prices')}
      >
        <span className="bottom-nav-icon">📊</span>
        <span className="bottom-nav-text">Market</span>
      </div>

      <div 
        className={`bottom-nav-item ${isActive('/profile') ? 'active' : ''}`}
        onClick={() => navigate('/profile')}
      >
        <span className="bottom-nav-icon">👤</span>
        <span className="bottom-nav-text">Profile</span>
      </div>
    </div>
  );
}

export default BottomNav;