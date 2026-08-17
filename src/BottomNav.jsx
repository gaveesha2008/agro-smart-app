import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get Started සහ Sign (Login/Register) පිටුවලදී මෙම BottomNav එක පෙන්වීම වළක්වයි
  const hideInPages = ['/', '/login', '/register', '/get-started'];
  if (hideInPages.includes(location.pathname)) {
    return null;
  }

  const navItems = [
    { label: 'Home', icon: '🏠', path: '/home' },
    { label: 'Crops', icon: '🌱', path: '/my-crops' },
    { label: 'Scan', icon: '📷', path: '/disease-detection' },
    { label: 'Market', icon: '📊', path: '/market-prices' },
    { label: 'Profile', icon: '👤', path: '/profile' },
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: '480px',
      backgroundColor: '#ffffff',
      borderTop: '1px solid #e0e0e0',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingTop: '10px',
      paddingBottom: 'calc(10px + env(safe-area-inset-bottom))',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
      zIndex: 1000,
      boxSizing: 'border-box'
    }}>
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              color: isActive ? '#2e7d32' : '#757575',
              fontSize: '11px',
              fontWeight: isActive ? 'bold' : 'normal',
              flex: 1
            }}
          >
            <span style={{ fontSize: '18px' }}>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}