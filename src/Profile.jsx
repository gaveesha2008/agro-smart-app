import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';
import './App.css';

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="profile-page">
      <div className="profile-container">
        
        {/* Top Banner */}
        <div className="profile-top-banner">
          <h1>Profile</h1>
        </div>

        {/* User Card */}
        <div className="profile-user-card">
          <div className="profile-avatar-box">
            <span className="profile-avatar-icon">👤</span>
          </div>
          <div className="profile-user-info">
            <h2>Kamal Perera</h2>
            <p>074 123 0247</p>
            <p className="profile-loc">Galle</p>
          </div>
          <span className="profile-arrow">&gt;</span>
        </div>

        {/* Menu Options List */}
        <div className="profile-menu-card">
          <div className="profile-menu-item">
            <span>Edit Profile</span>
            <span className="menu-arrow">&gt;</span>
          </div>

          <div className="profile-menu-item" onClick={() => navigate('/language')}>
            <span>Language</span>
            <span className="profile-menu-right">English &gt;</span>
          </div>

          <div className="profile-menu-item">
            <span>Notification Setting</span>
            <span className="menu-arrow">&gt;</span>
          </div>

          <div className="profile-menu-item">
            <span>About AgroSmart</span>
            <span className="menu-arrow">&gt;</span>
          </div>

          <div className="profile-menu-item logout" onClick={() => navigate('/login')}>
            <span className="logout-text">Logout</span>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNav />

      </div>
    </div>
  );
}

export default Profile;