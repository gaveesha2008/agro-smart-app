import React from 'react';
import { useLanguage } from './LanguageContext';
import { useNavigate } from 'react-router-dom';
import welcomeBg from './assets/welcome-bg.jpg'; 

export default function GetStarted() {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  // භාෂාව අනුව බොත්තමේ පෙන්විය යුතු වචන
  const translations = {
    English: "GET STARTED >",
    Sinhala: "ආරම්භ කරන්න >",
    Tamil: "தொடங்க >",
    en: "GET STARTED >",
    si: "ආරම්භ කරන්න >",
    ta: "தொடங்க >"
  };

  const buttonText = translations[language] || translations.English;

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
        
        {/* GET STARTED Button */}
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
          {buttonText}
        </button>

        {/* Language Selection Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
          
          <button 
            onClick={() => setLanguage('Sinhala')}
            style={{ 
              padding: '14px 10px', 
              background: language === 'Sinhala' || language === 'si' ? '#e8f5e9' : '#ffffff', 
              color: language === 'Sinhala' || language === 'si' ? '#1db954' : '#222', 
              border: language === 'Sinhala' || language === 'si' ? '2px solid #1db954' : 'none', 
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
              background: language === 'English' || language === 'en' ? '#e8f5e9' : '#ffffff', 
              color: language === 'English' || language === 'en' ? '#1db954' : '#222', 
              border: language === 'English' || language === 'en' ? '2px solid #1db954' : 'none', 
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
              background: language === 'Tamil' || language === 'ta' ? '#e8f5e9' : '#ffffff', 
              color: language === 'Tamil' || language === 'ta' ? '#1db954' : '#222', 
              border: language === 'Tamil' || language === 'ta' ? '2px solid #1db954' : 'none', 
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