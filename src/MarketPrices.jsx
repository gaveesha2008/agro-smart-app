import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { db } from './firebase.js'; // Firebase සම්බන්ධ කිරීම සඳහා
import { doc, getDoc } from 'firebase/firestore';

export default function MarketPrices() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const [searchTerm, setSearchTerm] = useState('');
  const [firebaseCrops, setFirebaseCrops] = useState([]);
  const [loading, setLoading] = useState(false);

  // භාෂා පරිවර්තන
  const t = {
    English: {
      title: "Market Prices",
      searchPlaceholder: "Search crop (e.g., Paddy, Chilli, Potato)...",
      cropHeader: "Crop",
      priceHeader: "Today's Price",
      changeHeader: "Change",
      footerNote: "Prices fluctuate daily. Updated with live market database."
    },
    Sinhala: {
      title: "වෙළඳපළ මිල",
      searchPlaceholder: "බෝගයක් සොයන්න (උදා: වී, මිරිස්, අර්තාපල්)...",
      cropHeader: "බෝගය",
      priceHeader: "අද මිල",
      changeHeader: "වෙනස",
      footerNote: "මිල ගණන් දිනපතා වෙනස් වේ. සජීවී දත්ත සමුදායක් සමඟ යාවත්කාලීන වේ."
    },
    Tamil: {
      title: "சந்தை விலை",
      searchPlaceholder: "பயிரைத் தேடுங்கள்...",
      cropHeader: "பயிர்",
      priceHeader: "இன்றைய விலை",
      changeHeader: "மாற்றம்",
      footerNote: "விலைகள் தினமும் மாறுபடும். நேரலை தரவுத்தளத்துடன் புதுப்பிக்கப்பட்டது."
    }
  };

  const currentText = t[language] || t.English;

  // Firebase එකෙන් ලයිව් දත්ත පමණක් ලබා ගැනීම
  useEffect(() => {
    const fetchMarketPricesFromFirebase = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, 'marketPrices', 'allCrops');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data && data.crops) {
            setFirebaseCrops(data.crops);
          } else {
            setFirebaseCrops([]);
          }
        } else {
          setFirebaseCrops([]);
        }
      } catch (error) {
        console.error('Error fetching from Firebase: ', error);
        setFirebaseCrops([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketPricesFromFirebase();
  }, []);

  // සෙවුම් පහසුකම සඳහා පෙරහන් කිරීම (සජීවී දත්ත මත පමණක් ක්‍රියාත්මක වේ)
  const filteredData = firebaseCrops.filter(item => {
    const nameObj = item.name || {};
    const enName = typeof nameObj === 'string' ? nameObj : (nameObj.English || nameObj.en || '');
    const siName = typeof nameObj === 'object' ? (nameObj.Sinhala || nameObj.si || '') : '';
    const taName = typeof nameObj === 'object' ? (nameObj.Tamil || nameObj.ta || '') : '';

    return (
      enName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      siName.includes(searchTerm) ||
      taName.includes(searchTerm)
    );
  });

  return (
    <div style={{ 
      padding: '10px 16px', 
      width: '100%', 
      boxSizing: 'border-box', 
      maxWidth: '480px', 
      margin: '0 auto',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#f9fbf9'
    }}>
      
      <div>
        {/* Top Header Banner */}
        <div style={{
          backgroundColor: '#2e7d32',
          borderRadius: '14px',
          padding: '14px 16px',
          color: 'white',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <button 
            onClick={() => navigate('/home')}
            style={{ background: 'none', border: 'none', color: 'white', fontSize: '18px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            ←
          </button>
          <h2 style={{ margin: 0, fontSize: '18px' }}>{currentText.title}</h2>
          <span style={{ fontSize: '12px', backgroundColor: 'rgba(255,255,255,0.2)', padding: '4px 8px', borderRadius: '6px' }}>Live</span>
        </div>
       
        {/* Search Box */}
        <div style={{ marginBottom: '12px' }}>
          <input 
            type="text"
            placeholder={currentText.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '10px 12px', 
              borderRadius: '10px', 
              border: '1px solid #ddd', 
              boxSizing: 'border-box',
              fontSize: '12px',
              outline: 'none',
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
            }}
          />
        </div>

        {/* Price Table / Cards List */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', overflow: 'hidden', marginBottom: '40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1.2fr', backgroundColor: '#e8f5e9', padding: '10px 12px', fontSize: '11px', fontWeight: 'bold', color: '#2e7d32' }}>
            <span>{currentText.cropHeader}</span>
            <span>{currentText.priceHeader}</span>
            <span style={{ textAlign: 'right' }}>{currentText.changeHeader}</span>
          </div>

          {loading ? (
            <div style={{ padding: '25px', textAlign: 'center', color: '#2e7d32', fontSize: '12px', fontWeight: '600' }}>
              Loading live prices from Firebase...
            </div>
          ) : filteredData.length > 0 ? (
            filteredData.map((item, index) => {
              const nameData = item.name || {};
              const displayName = typeof nameData === 'string' 
                ? nameData 
                : (nameData[language] || nameData.English || nameData.en || 'Crop');

              return (
                <div key={item.id || index} style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '2fr 2fr 1.2fr', 
                  padding: '10px 12px', 
                  alignItems: 'center', 
                  borderBottom: '1px solid #f0f0f0',
                  fontSize: '12px'
                }}>
                  <span style={{ fontWeight: '600', color: '#333', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '16px' }}>{item.icon || '🌾'}</span>
                    {displayName}
                  </span>
                  <span style={{ color: '#444', fontWeight: '500' }}>{item.price}</span>
                  <span style={{ 
                    textAlign: 'right', 
                    fontWeight: 'bold', 
                    color: item.isUp ? '#2e7d32' : '#d32f2f',
                    backgroundColor: item.isUp ? '#e8f5e9' : '#ffebee',
                    padding: '3px 6px',
                    borderRadius: '6px',
                    fontSize: '11px'
                  }}>
                    {item.isUp ? '▲' : '▼'} {item.change}
                  </span>
                </div>
              );
            })
          ) : (
            <div style={{ padding: '20px', textAlign: 'center', color: '#777', fontSize: '12px' }}>
              No live crops found in database! Please run your scraper.
            </div>
          )}
        </div>
      </div>

      {/* Footer Note */}
      <div style={{ textAlign: 'center', fontSize: '10px', color: '#888', margin: '15px 0 30px 0' }}>
        {currentText.footerNote}
      </div>

    </div>
  );
}