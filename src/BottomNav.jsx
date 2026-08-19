import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; // 1. භාෂාව සඳහා මෙය ඉම්පෝර්ට් කර ඇත

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguage(); // 2. භාෂාව ලබා ගැනීම

  // Get Started සහ Sign (Login/Register) පිටුවලදී මෙම BottomNav එක පෙන්වීම වළක්වයි
  const hideInPages = ['/', '/login', '/register', '/get-started', '/signup'];
  if (hideInPages.includes(location.pathname)) {
    return null;
  }

  // 3. භාෂාවට අනුව යට නම වෙනස් වීමට (Texts Translation)
  const getNavTexts = () => {
    switch (language) {
      case 'Sinhala':
        return {
          home: 'මුල් පිටුව',
          crops: 'බෝග',
          scan: 'ස්කෑන්',
          market: 'වෙළඳපොළ',
          profile: 'පැතිකඩ'
        };
      case 'Tamil':
        return {
          home: 'முகப்பு',
          crops: 'பயிர்கள்',
          scan: 'ஸ்கேன்',
          market: 'சந்தை',
          profile: 'சுயவிவரம்'
        };
      default:
        return {
          home: 'Home',
          crops: 'Crops',
          scan: 'Scan',
          market: 'Market',
          profile: 'Profile'
        };
    }
  };

  const t = getNavTexts();

  const navItems = [
    { label: t.home, icon: '🏠', path: '/home' },
    { label: t.crops, icon: '🌱', path: '/my-crops' },
    { label: t.scan, icon: '📷', path: '/disease-detection' },
    { label: t.market, icon: '📊', path: '/market-prices' },
    { label: t.profile, icon: '👤', path: '/profile' },
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