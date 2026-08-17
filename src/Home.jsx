import React from 'react';
import { useNavigate } from 'react-router-dom';

import leafLogo from './assets/leaf-logo.png';
import weatherCard from './assets/weather-card.png';
import myCropsCard from './assets/my-crops-card.png';
import diseaseCard from './assets/disease-card.png';
import monitoringCard from './assets/monitoring-card.png';
import reminderCard from './assets/reminder-card.png';
import marketCard from './assets/market-card.png';
import alertCloud from './assets/alert-cloud.png';

export default function Home() {
  const navigate = useNavigate();

  // Figma නිර්මාණයේ ඇති නිවැරදි වර්ණ
  const cardColors = {
    weather: '#99ccff',
    crops: '#b8cc99',
    disease: '#7fa67f',
    monitoring: '#ffd9b3',
    reminder: '#cca366',
    market: '#e6b8e6'
  };

  const buttonStyle = (bgColor) => ({
    background: bgColor,
    border: 'none',
    padding: '12px 8px',
    borderRadius: '12px',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    boxSizing: 'border-box',
    width: '100%',
    transition: 'transform 0.2s ease'
  });

  const iconStyle = { 
    width: '50px', 
    height: '50px', 
    objectFit: 'contain'
  };

  const textStyle = { 
    fontSize: '11px', 
    fontWeight: '700', 
    color: '#000', 
    margin: 0,
    fontFamily: 'serif'
  };

  return (
    <div style={{ 
      padding: '15px', 
      width: '100%', 
      maxWidth: '390px', 
      margin: '0 auto', 
      boxSizing: 'border-box', 
      backgroundColor: '#f7f9f2', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    }}>
      
      {/* Header Section */}
      <div style={{ 
        backgroundColor: '#20a444', 
        color: '#fff', 
        padding: '15px', 
        borderRadius: '15px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center'
      }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: '0 0 5px 0', fontSize: '22px' }}>AgroSmart</h2>
          <p style={{ margin: 0, fontSize: '12px' }}>Hello, Farmer!</p>
          <p style={{ margin: '5px 0 0 0', fontSize: '10px', opacity: 0.9 }}>Good morning! Let's make farming smarter today.</p>
        </div>
        <img src={leafLogo} alt="Logo" style={{ width: '50px', height: '50px' }} />
      </div>

      {/* Grid Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {[
          { path: '/weather', color: cardColors.weather, img: weatherCard, label: 'Weather Updates' },
          { path: '/my-crops', color: cardColors.crops, img: myCropsCard, label: 'My Crops' },
          { path: '/disease-detection', color: cardColors.disease, img: diseaseCard, label: 'Disease Detection' },
          { path: '/crop-monitoring', color: cardColors.monitoring, img: monitoringCard, label: 'Crop Monitoring' },
          { path: '/farming-reminder', color: cardColors.reminder, img: reminderCard, label: 'Farming Reminder' },
          { path: '/market-prices', color: cardColors.market, img: marketCard, label: 'Market Price' }
        ].map((item, index) => (
          <button 
            key={index}
            onClick={() => navigate(item.path)} 
            style={buttonStyle(item.color)}
          >
            <img src={item.img} alt={item.label} style={iconStyle} />
            <span style={textStyle}>{item.label}</span>
          </button>
        ))}
      </div>

      {/* User Profile Button */}
      <button 
        onClick={() => navigate('/profile')} 
        style={{ width: '100%', padding: '12px', background: '#455a64', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        User Profile
      </button>

      {/* Alert Box */}
      <div style={{ 
        backgroundColor: '#fff', 
        padding: '10px', 
        borderRadius: '10px', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px', 
        border: '1px solid #000' 
      }}>
        <img src={alertCloud} alt="Alert" style={{ width: '24px', height: '24px' }} />
        <p style={{ margin: 0, fontSize: '11px', fontWeight: 'bold', color: '#000' }}>
          Alert: Heavy rain expected tomorrow. Protect your crops.
        </p>
      </div>

    </div>
  );
}