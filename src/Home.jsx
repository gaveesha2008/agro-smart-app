import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import './App.css';

import logoBanner from './assets/logo-banner.jpg';
import weatherCard from './assets/weather-card.png';
import myCropsCard from './assets/my-crops-card.png';
import diseaseCard from './assets/disease-card.png';
import reminderCard from './assets/reminder-card.png';
import marketCard from './assets/market-card.png';

export default function Home() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [userName, setUserName] = useState(localStorage.getItem('userName') || 'Farmer');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const name = user.displayName || localStorage.getItem('userName') || user.email.split('@')[0];
        setUserName(name);
      }
    });
    return () => unsubscribe();
  }, []);

  const t = {
    English: {
      title: "AgroSmart",
      welcome: `Hello, ${userName}!`,
      subText: "Let's make farming smarter today.",
      weather: "Weather Updates",
      crops: "My Crops",
      disease: "Disease Detection",
      reminder: "Farming Reminder",
      market: "Market Price"
    },
    Sinhala: {
      title: "AgroSmart",
      welcome: `ආයුබෝවන්, ${userName}!`,
      subText: "අද ඔබේ ගොවිතැන් කටයුතු වඩාත් ස්මාර්ට් කරමු.",
      weather: "කාලගුණ යාවත්කාලීන",
      crops: "මගේ වගා",
      disease: "පැලෑටි රෝග හඳුනාගැනීම",
      reminder: "ගොවිතැන් මතක් කිරීම්",
      market: "වෙළඳපළ මිල"
    },
    Tamil: {
      title: "AgroSmart",
      welcome: `வணக்கம், ${userName}!`,
      subText: "இன்று விவசாயத்தை மிகவும் ஸ்மார்ட்டாக செய்வோம்.",
      weather: "வானிலை நிலவரம்",
      crops: "எனது பயிர்கள்",
      disease: "நோய் கண்டறிதல்",
      reminder: "விவசாய நினைவூட்டல்",
      market: "சந்தை விலை"
    }
  };

  const currentText = t[language] || t.English;

  return (
    <div style={{ 
      padding: '16px 20px', 
      width: '100%', 
      boxSizing: 'border-box', 
      maxWidth: '480px', 
      margin: '0 auto',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor: '#f9fbf8',
      paddingBottom: '90px'
    }}>
      
      {/* Top Banner */}
      <div style={{
        backgroundImage: `url(${logoBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '16px',
        padding: '24px 22px',
        color: 'white',
        boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
        marginBottom: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h2 style={{ margin: 0, fontSize: '28px', fontWeight: '800', lineHeight: '1.25', textShadow: '0 2px 5px rgba(0,0,0,0.6)' }}>
          {currentText.title}
        </h2>
        <p style={{ margin: '6px 0 3px 0', fontSize: '18px', fontWeight: '700', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
          {currentText.welcome}
        </p>
        <p style={{ margin: 0, fontSize: '14px', fontWeight: '500', opacity: 0.98, textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>
          {currentText.subText}
        </p>
      </div>

      {/* Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        
        {/* Weather Updates */}
        <div 
          onClick={() => navigate('/weather')}
          style={{ 
            backgroundColor: '#d0e8fd', 
            border: '1px solid #b3d9fc',
            padding: '14px 10px', 
            borderRadius: '16px', 
            cursor: 'pointer', 
            textAlign: 'center', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
          }}
        >
          <img src={weatherCard} alt="Weather" style={{ width: '100%', height: '70px', objectFit: 'contain', marginBottom: '8px', display: 'block', mixBlendMode: 'multiply' }} />
          <h4 style={{ margin: 0, fontSize: '13px', color: '#2c3e50', fontWeight: '700' }}>{currentText.weather}</h4>
        </div>

        {/* My Crops */}
        <div 
          onClick={() => navigate('/my-crops')}
          style={{ 
            backgroundColor: '#ccd8b9', 
            border: '1px solid #b8c7a2',
            padding: '14px 10px', 
            borderRadius: '16px', 
            cursor: 'pointer', 
            textAlign: 'center', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
          }}
        >
          <img src={myCropsCard} alt="Crops" style={{ width: '100%', height: '70px', objectFit: 'contain', marginBottom: '8px', display: 'block', mixBlendMode: 'multiply' }} />
          <h4 style={{ margin: 0, fontSize: '13px', color: '#2c3e50', fontWeight: '700' }}>{currentText.crops}</h4>
        </div>

        {/* Disease Detection */}
        <div 
          onClick={() => navigate('/disease-detection')}
          style={{ 
            backgroundColor: '#a8c3a6', 
            border: '1px solid #95b393',
            padding: '14px 10px', 
            borderRadius: '16px', 
            cursor: 'pointer', 
            textAlign: 'center', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
          }}
        >
          <img src={diseaseCard} alt="Disease" style={{ width: '100%', height: '70px', objectFit: 'contain', marginBottom: '8px', display: 'block', mixBlendMode: 'multiply' }} />
          <h4 style={{ margin: 0, fontSize: '13px', color: '#1e3321', fontWeight: '700' }}>{currentText.disease}</h4>
        </div>

        {/* Farming Reminder */}
        <div 
          onClick={() => navigate('/farming-reminder')}
          style={{ 
            backgroundColor: '#d8cca8', 
            border: '1px solid #c5b893',
            padding: '14px 10px', 
            borderRadius: '16px', 
            cursor: 'pointer', 
            textAlign: 'center', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
          }}
        >
          <img src={reminderCard} alt="Reminder" style={{ width: '100%', height: '70px', objectFit: 'contain', marginBottom: '8px', display: 'block', mixBlendMode: 'multiply' }} />
          <h4 style={{ margin: 0, fontSize: '13px', color: '#3d321e', fontWeight: '700' }}>{currentText.reminder}</h4>
        </div>

        {/* Market Price */}
        <div 
          onClick={() => navigate('/market-prices')}
          style={{ 
            gridColumn: 'span 2',
            backgroundColor: '#e5d1e8', 
            border: '1px solid #d4bcd8',
            padding: '14px 10px', 
            borderRadius: '16px', 
            cursor: 'pointer', 
            textAlign: 'center', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
          }}
        >
          <img src={marketCard} alt="Market" style={{ width: '100%', height: '75px', objectFit: 'contain', marginBottom: '8px', display: 'block', mixBlendMode: 'multiply' }} />
          <h4 style={{ margin: 0, fontSize: '13px', color: '#402444', fontWeight: '700' }}>{currentText.market}</h4>
        </div>

      </div>

    </div>
  );
}