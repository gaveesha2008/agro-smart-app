import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from './LanguageContext';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function MyCrops() {
  const { language } = useContext(LanguageContext); 
  const [cropData, setCropData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('list');

  const t = {
    myCropsTitle: { English: "My Crops", Sinhala: "මගේ බෝග", Tamil: "எனது பயிர்கள்" },
    viewDetails: { English: "View details", Sinhala: "විස්තර බලන්න", Tamil: "விவரங்களைக் காண்க" },
    backToCrops: { English: "← Back to My Crops", Sinhala: "← මගේ බෝග වෙත යන්න", Tamil: "← எனது பயிர்களுக்குத் திரும்பு" },
    origin: { English: "Origin & History", Sinhala: "උපත් සහ ඉතිහාසය", Tamil: "தோற்றம் & வரலாறு" },
    growthCultivation: { English: "Growth & Cultivation", Sinhala: "වර්ධනය සහ වගාව", Tamil: "வளர்ச்சி & சாகுபடி" },
    culinaryUses: { English: "Culinary Uses", Sinhala: "पाक භාවිත", Tamil: "சமையல் பயன்கள்" },
    nutritionalValue: { English: "Nutritional Value & Benefits", Sinhala: "පෝෂණ අගය සහ ප්‍රතිලාභ", Tamil: "ஊட்டச்சத்து மதிப்பு & நன்மைகள்" },
    category: { English: "Category", Sinhala: "ප්‍රවර්ගය", Tamil: "வகை" }
  };

  const getText = (key) => {
    const langKey = language === 'si' || language === 'Sinhala' ? 'Sinhala' : language === 'ta' || language === 'Tamil' ? 'Tamil' : 'English';
    return t[key]?.[langKey] || t[key]?.English || key;
  };

  useEffect(() => {
    async function fetchCropGuide() {
      try {
        const querySnapshot = await getDocs(collection(db, "cropGuides"));
        if (!querySnapshot.empty) {
          setCropData(querySnapshot.docs[0].data());
        }
        setLoading(false);
      } catch (error) {
        console.error("දත්ත ලබාගැනීමේ දෝෂයක්:", error);
        setLoading(false);
      }
    }
    fetchCropGuide();
  }, []);

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: '#F4F7F2', minHeight: '100vh', padding: '16px', paddingBottom: '90px', display: 'flex', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '400px' }}>
        
        {/* ================= 1. LIST VIEW ================= */}
        {viewMode === 'list' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '10px' }}>
            
            {/* Header Title */}
            <div style={{ backgroundColor: '#1b4332', color: '#ffffff', textAlign: 'center', fontSize: '18px', fontWeight: 'bold', padding: '14px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              {getText('myCropsTitle')}
            </div>

            {/* Main Center Card */}
            <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '1px solid #eaeaea', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }}>
              
              {/* Image Circle */}
              <div style={{ width: '90px', height: '90px', minWidth: '90px', minHeight: '90px', borderRadius: '50%', border: '2px solid #2d6a4f', padding: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundColor: '#fff' }}>
                <img 
                  src={cropData?.imageUrl || "https://images.unsplash.com/photo-1592924357228-91a4daadcfea"} 
                  alt="Tomato" 
                  style={{ width: '80px', height: '80px', minWidth: '80px', minHeight: '80px', borderRadius: '50%', objectFit: 'cover' }}
                />
              </div>

              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111', margin: '0 0 4px 0' }}>{cropData?.cropName || "Tomato"}</h2>
                <p style={{ fontSize: '12px', color: '#666', margin: '0' }}>({cropData?.category || "Vegetable / Fruit (Berry)"})</p>
              </div>

              {/* View Details Button */}
              <button 
                onClick={() => setViewMode('details')}
                style={{ width: '100%', backgroundColor: '#2d6a4f', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '14px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
              >
                {getText('viewDetails')}
              </button>

            </div>
          </div>
        )}

        {/* ================= 2. DETAILS VIEW ================= */}
        {viewMode === 'details' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '10px' }}>
            
            {/* Back Button */}
            <button 
              onClick={() => setViewMode('list')}
              style={{ backgroundColor: '#1b4332', color: '#ffffff', border: 'none', fontSize: '12px', fontWeight: 'bold', padding: '10px 16px', borderRadius: '12px', cursor: 'pointer', alignSelf: 'flex-start', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
            >
              {getText('backToCrops')}
            </button>

            {/* Top Details Card */}
            <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #eaeaea', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '60px', height: '60px', minWidth: '60px', minHeight: '60px', borderRadius: '50%', border: '2px solid #2d6a4f', padding: '2px', overflow: 'hidden', backgroundColor: '#fff' }}>
                <img 
                  src={cropData?.imageUrl || "https://images.unsplash.com/photo-1592924357228-91a4daadcfea"} 
                  alt="Tomato" 
                  style={{ width: '52px', height: '52px', minWidth: '52px', minHeight: '52px', borderRadius: '50%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '16px' }}>🍅</span>
                  <h2 style={{ fontSize: '16px', fontWeight: 'bold', color: '#111', margin: '0' }}>{cropData?.cropName || "Tomato"}</h2>
                </div>
                <p style={{ fontSize: '11px', color: '#666', margin: '4px 0 0 0' }}>
                  <strong>{getText('category')}:</strong> {cropData?.category || "Vegetable / Fruit (Berry)"}
                </p>
              </div>
            </div>

            {/* Details Content Card */}
            <div style={{ backgroundColor: '#ffffff', padding: '18px', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #eaeaea', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '12px' }}>
              
              <div>
                <p style={{ fontWeight: 'bold', color: '#2d6a4f', margin: '0 0 4px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>🌐</span> <span>{getText('origin')}</span>
                </p>
                <p style={{ color: '#555', margin: '0', paddingLeft: '22px', lineHeight: '1.4' }}>
                  {cropData?.origin || "Native to western South America (Andes region)"}
                </p>
              </div>

              <div>
                <p style={{ fontWeight: 'bold', color: '#2d6a4f', margin: '0 0 4px 0', display: 'flex', alignItems: 'center,', gap: '6px' }}>
                  <span>🌱</span> <span>{getText('growthCultivation')}</span>
                </p>
                <p style={{ color: '#555', margin: '0', paddingLeft: '22px', lineHeight: '1.4' }}>
                  {cropData?.growthStage || "The Seed -> Germination & Seedlings (5-10 days) -> Flowering -> Fruiting -> Ripening"}
                </p>
              </div>

              <div>
                <p style={{ fontWeight: 'bold', color: '#2d6a4f', margin: '0 0 4px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>🍲</span> <span>{getText('culinaryUses')}</span>
                </p>
                <p style={{ color: '#555', margin: '0', paddingLeft: '22px', lineHeight: '1.4' }}>
                  {cropData?.culinary || "Can be eaten raw in salads, cooked in curries/soups, or processed as ketchup and paste."}
                </p>
              </div>

              <div>
                <p style={{ fontWeight: 'bold', color: '#2d6a4f', margin: '0 0 4px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>💡</span> <span>{getText('nutritionalValue')}</span>
                </p>
                <p style={{ color: '#555', margin: '0', paddingLeft: '22px', lineHeight: '1.4' }}>
                  {cropData?.nutrition || "Rich in Lycopene (Antioxidant), Vitamin C, Vitamin K, Vitamin A, and Potassium."}
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}