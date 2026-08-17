import React from 'react';
import { useLanguage } from './LanguageContext';
import { useNavigate } from 'react-router-dom';
import welcomeBg from './assets/welcome-bg.jpg'; 

export default function GetStarted() {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  return (
    <div style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${welcomeBg})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: '45px',
      boxSizing: 'border-box',
      zIndex: 9999
    }}>
      
      {/* බොත්තම් අඩංගු ප්‍රධාන පෙට්ටිය */}
      <div style={{ width: '92%', maxWidth: '650px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        
        {/* GET STARTED Button - මෙහිදී /home වෙනුවට /signup වෙත යොමු කර ඇත */}
        <button 
          onClick={() => navigate('/signup')}
          style={{ 
            width: '100%', 
            padding: '16px', 
            background: '#1db954', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '12px', 
            fontSize: '18px', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
          }}
        >
          GET STARTED &gt;
        </button>

        {/* Language Selection Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
          
          <button 
            onClick={() => setLanguage('Sinhala')}
            style={{ 
              padding: '14px 10px', 
              background: language === 'Sinhala' ? '#e8f5e9' : '#ffffff', 
              color: language === 'Sinhala' ? '#1db954' : '#222', 
              border: language === 'Sinhala' ? '2px solid #1db954' : 'none', 
              borderRadius: '12px', 
              fontSize: '16px', 
              fontWeight: 'bold', 
              cursor: 'pointer',
              boxShadow: '0 3px 6px rgba(0,0,0,0.15)'
            }}
          >
            සිංහල
          </button>

          <button 
            onClick={() => setLanguage('English')}
            style={{ 
              padding: '14px 10px', 
              background: language === 'English' ? '#e8f5e9' : '#ffffff', 
              color: language === 'English' ? '#1db954' : '#222', 
              border: language === 'English' ? '2px solid #1db954' : 'none', 
              borderRadius: '12px', 
              fontSize: '16px', 
              fontWeight: 'bold', 
              cursor: 'pointer',
              boxShadow: '0 3px 6px rgba(0,0,0,0.15)'
            }}
          >
            ENGLISH
          </button>

          <button 
            onClick={() => setLanguage('Tamil')}
            style={{ 
              padding: '14px 10px', 
              background: language === 'Tamil' ? '#e8f5e9' : '#ffffff', 
              color: language === 'Tamil' ? '#1db954' : '#222', 
              border: language === 'Tamil' ? '2px solid #1db954' : 'none', 
              borderRadius: '12px', 
              fontSize: '16px', 
              fontWeight: 'bold', 
              cursor: 'pointer',
              boxShadow: '0 3px 6px rgba(0,0,0,0.15)'
            }}
          >
            தமிழ்
          </button>

        </div>

      </div>

    </div>
  );
}