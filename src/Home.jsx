import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

import leafLogo from './assets/leaf-logo.png';
import weatherCard from './assets/weather-card.png';
import myCropsCard from './assets/my-crops-card.png';
import diseaseCard from './assets/disease-card.png';
import reminderCard from './assets/reminder-card.png';
import marketCard from './assets/market-card.png';

export default function Home() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const t = {
    English: {
      title: "AgroSmart",
      welcome: "Hello, Farmer!",
      subText: "Good morning! Let's make farming smarter today.",
      weather: "Weather Updates",
      crops: "My Crops",
      disease: "Disease Detection",
      reminder: "Farming Reminder",
      market: "Market Price",
      profileBtn: "User Profile"
    },
    Sinhala: {
      title: "ඇග්‍රෝ ස්මාර්ට්",
      welcome: "ආයුබෝවන්, ගොවි මහත්මයා!",
      subText: "සුභ උදෑසනක්! අද ඔබේ ගොවිතැන් කටයුතු වඩාත් ස්මාර්ට් කරමු.",
      weather: "කාලගුණ යාවත්කාලීන",
      crops: "මගේ වගා",
      disease: "පැලෑටි රෝග හඳුනාගැනීම",
      reminder: "ගොවිතැන් මතක් කිරීම්",
      market: "වෙළඳපළ මිල",
      profileBtn: "පරිශීලක පැතිකඩ"
    },
    Tamil: {
      title: "அக்ரோ-ஸ்மார்ட்",
      welcome: "வணக்கம், விவசாயியே!",
      subText: "காலை வணக்கம்! இன்று விவசாயத்தை மிகவும் ஸ்மார்ட்டாக செய்வோம்.",
      weather: "வானிலை நிலவரம்",
      crops: "எனது பயிர்கள்",
      disease: "நோய் கண்டறிதல்",
      reminder: "விவசாய நினைவூட்டல்",
      market: "சந்தை விலை",
      profileBtn: "பயனர் சுயவிவரம்"
    }
  };

  const currentText = t[language] || t.English;

  return (
    <div style={{ 
      padding: '10px 16px', 
      width: '100%', 
      boxSizing: 'border-box', 
      maxWidth: '480px', 
      margin: '0 auto',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      
      {/* Top Banner */}
      <div style={{
        backgroundColor: '#2e7d32',
        borderRadius: '14px',
        padding: '14px 16px',
        color: 'white',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '20px' }}>{currentText.title}</h2>
          <img src={leafLogo} alt="Logo" style={{ width: '32px', height: '32px' }} />
        </div>
        <p style={{ margin: '8px 0 3px 0', fontSize: '15px', fontWeight: 'bold' }}>{currentText.welcome}</p>
        <p style={{ margin: 0, fontSize: '12px', opacity: 0.9 }}>{currentText.subText}</p>
      </div>

      {/* Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        
        {/* Weather Updates */}
        <div 
          onClick={() => navigate('/weather')}
          style={{ backgroundColor: '#e3f2fd', padding: '12px', borderRadius: '12px', cursor: 'pointer', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <div style={{ backgroundColor: 'white', borderRadius: '50%', padding: '8px', marginBottom: '6px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <img src={weatherCard} alt="Weather" style={{ width: '32px', height: '32px', display: 'block' }} />
          </div>
          <h4 style={{ margin: 0, fontSize: '13px', color: '#333', fontWeight: '600' }}>{currentText.weather}</h4>
        </div>

        {/* My Crops */}
        <div 
          onClick={() => navigate('/my-crops')}
          style={{ backgroundColor: '#e8f5e9', padding: '12px', borderRadius: '12px', cursor: 'pointer', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <div style={{ backgroundColor: 'white', borderRadius: '50%', padding: '8px', marginBottom: '6px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <img src={myCropsCard} alt="Crops" style={{ width: '32px', height: '32px', display: 'block' }} />
          </div>
          <h4 style={{ margin: 0, fontSize: '13px', color: '#333', fontWeight: '600' }}>{currentText.crops}</h4>
        </div>

        {/* Disease Detection */}
        <div 
          onClick={() => navigate('/disease-detection')}
          style={{ backgroundColor: '#e0f2f1', padding: '12px', borderRadius: '12px', cursor: 'pointer', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <div style={{ backgroundColor: 'white', borderRadius: '50%', padding: '8px', marginBottom: '6px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <img src={diseaseCard} alt="Disease" style={{ width: '32px', height: '32px', display: 'block' }} />
          </div>
          <h4 style={{ margin: 0, fontSize: '13px', color: '#333', fontWeight: '600' }}>{currentText.disease}</h4>
        </div>

        
        {/* Farming Reminder */}
        <div 
          onClick={() => navigate('/farming-reminder')}
          style={{ backgroundColor: '#fffde7', padding: '12px', borderRadius: '12px', cursor: 'pointer', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <div style={{ backgroundColor: 'white', borderRadius: '50%', padding: '8px', marginBottom: '6px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <img src={reminderCard} alt="Reminder" style={{ width: '32px', height: '32px', display: 'block' }} />
          </div>
          <h4 style={{ margin: 0, fontSize: '13px', color: '#333', fontWeight: '600' }}>{currentText.reminder}</h4>
        </div>

        {/* Market Price */}
        <div 
          onClick={() => navigate('/market-prices')}
          style={{ gridColumn: 'span 2', width: '100%', boxSizing: 'border-box', backgroundColor: '#efebe9', padding: '12px', borderRadius: '12px', cursor: 'pointer', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <div style={{ backgroundColor: 'white', borderRadius: '50%', padding: '8px', marginBottom: '6px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <img src={marketCard} alt="Market" style={{ width: '32px', height: '32px', display: 'block' }} />
          </div>
          <h4 style={{ margin: 0, fontSize: '13px', color: '#333', fontWeight: '600' }}>{currentText.market}</h4>
        </div>

      </div>

      {/* User Profile Button */}
      <div 
        onClick={() => navigate('/profile')}
        style={{
          backgroundColor: '#2e7d32',
          color: 'white',
          padding: '12px',
          borderRadius: '12px',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '14px',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(46, 125, 50, 0.2)',
          marginBottom: '55px'
        }}
      >
        {currentText.profileBtn}
      </div>

    </div>
  );
}