import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { db } from './firebase.js'; // Firebase සම්බන්ධ කිරීම සඳහා
import { doc, getDoc } from 'firebase/firestore';

export default function MarketPrices() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const [selectedCenter, setSelectedCenter] = useState('Peliyagoda Manning Economic Center');
  const [searchTerm, setSearchTerm] = useState('');
  const [firebaseCrops, setFirebaseCrops] = useState(null);
  const [loading, setLoading] = useState(false);

  // භාෂා පරිවර්තන
  const t = {
    English: {
      title: "Market Prices",
      searchPlaceholder: "Search crop (e.g., Paddy, Chilli, Potato)...",
      centerLabel: "Economic Center:",
      cropHeader: "Crop",
      priceHeader: "Today's Price",
      changeHeader: "Change",
      footerNote: "Prices fluctuate daily. Updated with live market database."
    },
    Sinhala: {
      title: "වෙළඳපළ මිල",
      searchPlaceholder: "බෝගයක් සොයන්න (උදා: වී, මිරිස්, අර්තාපල්)...",
      centerLabel: "ආර්ථික මධ්‍යස්ථානය:",
      cropHeader: "බෝගය",
      priceHeader: "අද මිල",
      changeHeader: "වෙනස",
      footerNote: "මිල ගණන් දිනපතා වෙනස් වේ. සජීවී දත්ත සමුදායක් සමඟ යාවත්කාලීන වේ."
    },
    Tamil: {
      title: "சந்தை விலை",
      searchPlaceholder: "பயிரைத் தேடுங்கள்...",
      centerLabel: "பொருளாதார மையம்:",
      cropHeader: "பயிர்",
      priceHeader: "இன்றைய விலை",
      changeHeader: "மாற்றம்",
      footerNote: "விலைகள் தினமும் மாறுபடும். நேரலை தரவுத்தளத்துடன் புதுப்பிக்கப்பட்டது."
    }
  };

  const currentText = t[language] || t.English;

  // ස්ථාවර දත්ත (Fallback Data - Firebase එකෙන් ඩේටා නොමැති නම් හෝ ළෝඩ් වීමේදී පෙන්වීමට)
  const allCenterPrices = {
    "Peliyagoda Manning Economic Center": [
      { id: 1, name: { English: 'Paddy', Sinhala: 'වී', Tamil: 'நெல்' }, price: 'Rs. 122.04/kg', change: '+2.04', isUp: true, icon: '🌾' },
      { id: 2, name: { English: 'Red Onion', Sinhala: 'රතු ළූණු', Tamil: 'சின்ன வெங்காயம்' }, price: 'Rs. 234.75/kg', change: '-15.25', isUp: false, icon: '🧅' },
      { id: 3, name: { English: 'Big Onion', Sinhala: 'බී ළූණු', Tamil: 'வெங்காயம்' }, price: 'Rs. 280.00/kg', change: '+10.50', isUp: true, icon: '🧅' },
      { id: 4, name: { English: 'Tomato', Sinhala: 'තක්කාලි', Tamil: 'தக்காளி' }, price: 'Rs. 151.38/kg', change: '-28.62', isUp: false, icon: '🍅' },
      { id: 5, name: { English: 'Carrot', Sinhala: 'කැරට්', Tamil: 'கஜரட்' }, price: 'Rs. 120.30/kg', change: '-29.70', isUp: false, icon: '🥕' },
      { id: 6, name: { English: 'Cabbage', Sinhala: 'ගෝවා', Tamil: 'முட்டைகோஸ்' }, price: 'Rs. 208.40/kg', change: '+8.40', isUp: true, icon: '🥬' },
      { id: 7, name: { English: 'Potato', Sinhala: 'අර්තාපල්', Tamil: 'உருளைக்கிழங்கு' }, price: 'Rs. 195.00/kg', change: '+5.50', isUp: true, icon: '🥔' },
      { id: 8, name: { English: 'Green Chilli', Sinhala: 'අමු මිරිස්', Tamil: 'பச்சை மிளகாய்' }, price: 'Rs. 450.00/kg', change: '+25.00', isUp: true, icon: '🌶️' },
      { id: 9, name: { English: 'Beans', Sinhala: 'බෝංචි', Tamil: 'பீன்ஸ்' }, price: 'Rs. 240.00/kg', change: '-12.00', isUp: false, icon: '🌿' },
      { id: 10, name: { English: 'Pumpkin', Sinhala: 'වට්ටක්කා', Tamil: 'பூசணிக்காய்' }, price: 'Rs. 110.00/kg', change: '+4.00', isUp: true, icon: '🎃' },
      { id: 11, name: { English: 'Brinjal', Sinhala: 'වම්බටු', Tamil: 'கத்தரிக்காய்' }, price: 'Rs. 175.00/kg', change: '-8.50', isUp: false, icon: '🍆' },
      { id: 12, name: { English: 'Ladies Finger', Sinhala: 'බණ්ඩක්කා', Tamil: 'வெண்டைக்காய்' }, price: 'Rs. 160.00/kg', change: '+6.00', isUp: true, icon: '🥒' }
    ],
    "Dambulla Dedicated Economic Center": [
      { id: 1, name: { English: 'Paddy', Sinhala: 'වී', Tamil: 'நெல்' }, price: 'Rs. 118.00/kg', change: '+1.00', isUp: true, icon: '🌾' },
      { id: 2, name: { English: 'Red Onion', Sinhala: 'රතු ළූණු', Tamil: 'சின்ன வெங்காயம்' }, price: 'Rs. 220.00/kg', change: '-10.00', isUp: false, icon: '🧅' },
      { id: 3, name: { English: 'Big Onion', Sinhala: 'බී ළූණු', Tamil: 'வெங்காயம்' }, price: 'Rs. 265.00/kg', change: '+5.00', isUp: true, icon: '🧅' },
      { id: 4, name: { English: 'Tomato', Sinhala: 'තක්කාලි', Tamil: 'தக்காளி' }, price: 'Rs. 130.00/kg', change: '-20.00', isUp: false, icon: '🍅' },
      { id: 5, name: { English: 'Carrot', Sinhala: 'කැරට්', Tamil: 'கஜரட்' }, price: 'Rs. 110.00/kg', change: '-15.00', isUp: false, icon: '🥕' },
      { id: 6, name: { English: 'Cabbage', Sinhala: 'ගෝවා', Tamil: 'முட்டைகோஸ்' }, price: 'Rs. 190.00/kg', change: '+4.00', isUp: true, icon: '🥬' },
      { id: 7, name: { English: 'Potato', Sinhala: 'අර්තාපල්', Tamil: 'உருளைக்கிழங்கு' }, price: 'Rs. 180.00/kg', change: '+2.00', isUp: true, icon: '🥔' },
      { id: 8, name: { English: 'Green Chilli', Sinhala: 'අමු මිරිස්', Tamil: 'பச்சை மிளகாய்' }, price: 'Rs. 420.00/kg', change: '+15.00', isUp: true, icon: '🌶️' },
      { id: 9, name: { English: 'Beans', Sinhala: 'බෝංචි', Tamil: 'பீன்ஸ்' }, price: 'Rs. 220.00/kg', change: '-8.00', isUp: false, icon: '🌿' },
      { id: 10, name: { English: 'Pumpkin', Sinhala: 'වට්ටක්කා', Tamil: 'பூசணிக்காய்' }, price: 'Rs. 95.00/kg', change: '+2.00', isUp: true, icon: '🎃' },
      { id: 11, name: { English: 'Brinjal', Sinhala: 'වම්බටු', Tamil: 'கத்தரிக்காய்' }, price: 'Rs. 150.00/kg', change: '-5.00', isUp: false, icon: '🍆' },
      { id: 12, name: { English: 'Ladies Finger', Sinhala: 'බණ්ඩක්කා', Tamil: 'வெண்டைக்காய்' }, price: 'Rs. 140.00/kg', change: '+3.00', isUp: true, icon: '🥒' }
    ],
    "Narahenpita Economic Center": [
      { id: 1, name: { English: 'Paddy', Sinhala: 'වී', Tamil: 'நெல்' }, price: 'Rs. 125.00/kg', change: '+3.00', isUp: true, icon: '🌾' },
      { id: 2, name: { English: 'Red Onion', Sinhala: 'රතු ළූණු', Tamil: 'சின்ன வெங்காயம்' }, price: 'Rs. 250.00/kg', change: '-5.00', isUp: false, icon: '🧅' },
      { id: 3, name: { English: 'Big Onion', Sinhala: 'බී ළූණු', Tamil: 'வெங்காயம்' }, price: 'Rs. 295.00/kg', change: '+12.00', isUp: true, icon: '🧅' },
      { id: 4, name: { English: 'Tomato', Sinhala: 'තක්කාලි', Tamil: 'தக்காளி' }, price: 'Rs. 170.00/kg', change: '-10.00', isUp: false, icon: '🍅' },
      { id: 5, name: { English: 'Carrot', Sinhala: 'කැරට්', Tamil: 'கஜரட்' }, price: 'Rs. 135.00/kg', change: '-10.00', isUp: false, icon: '🥕' },
      { id: 6, name: { English: 'Cabbage', Sinhala: 'ගෝවා', Tamil: 'முட்டைகோஸ்' }, price: 'Rs. 220.00/kg', change: '+10.00', isUp: true, icon: '🥬' },
      { id: 7, name: { English: 'Potato', Sinhala: 'අර්තාපල්', Tamil: 'உருளைக்கிழங்கு' }, price: 'Rs. 210.00/kg', change: '+8.00', isUp: true, icon: '🥔' },
      { id: 8, name: { English: 'Green Chilli', Sinhala: 'අමු මිරිස්', Tamil: 'பச்சை மிளகாய்' }, price: 'Rs. 480.00/kg', change: '+30.00', isUp: true, icon: '🌶️' },
      { id: 9, name: { English: 'Beans', Sinhala: 'බෝංචි', Tamil: 'பீன்ஸ்' }, price: 'Rs. 260.00/kg', change: '-5.00', isUp: false, icon: '🌿' },
      { id: 10, name: { English: 'Pumpkin', Sinhala: 'වට්ටක්කා', Tamil: 'பூசணிக்காய்' }, price: 'Rs. 125.00/kg', change: '+6.00', isUp: true, icon: '🎃' },
      { id: 11, name: { English: 'Brinjal', Sinhala: 'වම්බටු', Tamil: 'கத்தரிக்காய்' }, price: 'Rs. 190.00/kg', change: '-4.00', isUp: false, icon: '🍆' },
      { id: 12, name: { English: 'Ladies Finger', Sinhala: 'බණ්ඩක්කා', Tamil: 'வெண்டைக்காய்' }, price: 'Rs. 175.00/kg', change: '+8.00', isUp: true, icon: '🥒' }
    ]
  };

  // මධ්‍යස්ථාන ලැයිස්තුව
  const centers = Object.keys(allCenterPrices);

  // Firebase එකෙන් දත්ත ලබා ගැනීම (Real-time Fetching)
  useEffect(() => {
    const fetchMarketPricesFromFirebase = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, 'marketPrices', selectedCenter);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data && data.crops) {
            setFirebaseCrops(data.crops);
          } else {
            setFirebaseCrops(null);
          }
        } else {
          setFirebaseCrops(null);
        }
      } catch (error) {
        console.error('Error fetching from Firebase: ', error);
        setFirebaseCrops(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketPricesFromFirebase();
  }, [selectedCenter]);

  // Firebase ඩේටා තිබේ නම් ඒවා පෙන්වීම, නැතහොත් ස්ථාවර දත්ත (allCenterPrices) පෙන්වීම
  const marketData = firebaseCrops || allCenterPrices[selectedCenter] || allCenterPrices["Peliyagoda Manning Economic Center"];

  // සෙවුම් පහසුකම සඳහා පෙරහන් කිරීම
  const filteredData = marketData.filter(item => {
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

  const currentDate = new Date().toISOString().split('T')[0];

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

        {/* Location & Date Filter Bar */}
        <div style={{ backgroundColor: 'white', padding: '10px 12px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', marginBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '11px', color: '#666', fontWeight: 'bold' }}>📍 {currentText.centerLabel}</span>
            <span style={{ fontSize: '11px', color: '#2e7d32', fontWeight: 'bold' }}>📅 {currentDate}</span>
          </div>
          <select 
            value={selectedCenter} 
            onChange={(e) => setSelectedCenter(e.target.value)}
            style={{ width: '100%', padding: '6px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '12px', backgroundColor: '#fff', outline: 'none' }}
          >
            {centers.map((center, index) => (
              <option key={index} value={center}>{center}</option>
            ))}
          </select>
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
              No crops found!
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