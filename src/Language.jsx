import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

export default function Language() {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const [selectedLang, setSelectedLang] = useState(language);

  // භාෂාව තෝරා Save කළ විට ක්‍රියාත්මක වන කොටස
  const handleSave = () => {
    setLanguage(selectedLang);
    navigate('/profile'); // Save වූ පසු නැවත Profile එකට යාමට
  };

  const languages = [
    { name: 'Sinhala', label: 'සිංහල' },
    { name: 'Tamil', label: 'தமிழ்' },
    { name: 'English', label: 'English' }
  ];

  return (
    <div style={{
      padding: '24px 20px',
      flex: 1,
      boxSizing: 'border-box',
      width: '100%',
      backgroundColor: '#fdfdfd',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Title */}
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        fontWeight: 'bold',
        color: '#111',
        marginBottom: '24px',
        marginTop: '10px'
      }}>
        Language
      </h2>

      {/* Card Container */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '18px',
        padding: '24px 20px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
        border: '1px solid #eaeaea',
        width: '100%',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px', fontWeight: '500' }}>
          Select Your Language
        </p>

        {languages.map((lang) => {
          const isSelected = selectedLang === lang.name;
          return (
            <div
              key={lang.name}
              onClick={() => setSelectedLang(lang.name)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '14px 16px',
                borderRadius: '12px',
                border: isSelected ? '2px solid #2e7d32' : '1px solid #eaeaea',
                backgroundColor: isSelected ? '#f1f8f2' : '#fafafa',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ fontSize: '16px', color: '#333', fontWeight: isSelected ? 'bold' : '500' }}>
                {lang.name}
              </span>
              <div style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                border: isSelected ? '2px solid #2e7d32' : '2px solid #ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isSelected ? '#2e7d32' : 'transparent',
                color: '#fff',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {isSelected ? '✓' : ''}
              </div>
            </div>
          );
        })}

        {/* Save Button */}
        <button
          onClick={handleSave}
          style={{
            marginTop: '20px',
            backgroundColor: '#2e7d32',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            padding: '14px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            textAlign: 'center',
            boxShadow: '0 4px 10px rgba(46, 125, 50, 0.2)'
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}