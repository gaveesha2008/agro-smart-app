import React, { useContext, useState } from 'react';
import { LanguageContext } from './LanguageContext';

export default function MyCrops() {
  const { language } = useContext(LanguageContext); 
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [viewMode, setViewMode] = useState('list');

  const t = {
    myCropsTitle: { English: "My Crops", Sinhala: "මගේ බෝග", Tamil: "எனது பயிர்கள்" },
    viewDetails: { English: "View details", Sinhala: "විස්තර බලන්න", Tamil: "விவரங்களைக் காண்க" },
    backToCrops: { English: "← Back to My Crops", Sinhala: "← මගේ බෝග වෙත යන්න", Tamil: "← எனது பயிர்களுக்குத் திரும்பு" },
    origin: { English: "Origin & History", Sinhala: "උපත් සහ ඉතිහාසය", Tamil: "தோற்றம் & வரலாறு" },
    growthCultivation: { English: "Growth & Cultivation", Sinhala: "වර්ධනය සහ වගාව", Tamil: "வளர்ச்சி & சாகுபடி" },
    culinaryUses: { English: "Culinary Uses", Sinhala: "සූපශාස්ත්‍ර භාවිත", Tamil: "சமையல் பயன்கள்" },
    nutritionalValue: { English: "Nutritional Value & Benefits", Sinhala: "පෝෂණ ගුණය සහ ප්‍රතිලාභ", Tamil: "ஊட்டச்சத்து மதிப்பு & நன்மைகள்" },
    category: { English: "Category", Sinhala: "ප්‍රවර්ගය", Tamil: "வகை" }
  };

  const getText = (key) => {
    const langKey = language === 'si' || language === 'Sinhala' ? 'Sinhala' : language === 'ta' || language === 'Tamil' ? 'Tamil' : 'English';
    return t[key]?.[langKey] || t[key]?.English || key;
  };

  const cropsList = [
    {
      id: "tomato",
      cropName: "Tomato",
      category: "Vegetable / Fruit (Berry)",
      imageUrl: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200",
      origin: "Native to western South America (Andes region)",
      growthStage: "The Seed -> Germination & Seedlings (5-10 days) -> Flowering -> Fruiting -> Ripening",
      culinary: "Can be eaten raw in salads, cooked in curries/soups, or processed as ketchup and paste.",
      nutrition: "Rich in Lycopene (Antioxidant), Vitamin C, Vitamin K, Vitamin A, and Potassium."
    },
    {
      id: "carrot",
      cropName: "Carrot",
      category: "Root Vegetable",
      imageUrl: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=200",
      origin: "Native to southwestern Asia and Europe",
      growthStage: "Direct seeding -> Germination (10-21 days) -> Root development -> Harvesting (60-80 days)",
      culinary: "Eaten raw in salads, juiced, cooked in curries, or added to soups.",
      nutrition: "High in Beta-carotene (Vitamin A), fiber, vitamin K1, and potassium for eye health."
    },
    {
      id: "greenChilli",
      cropName: "Green Chilli",
      category: "Fruit / Spice",
      imageUrl: "https://images.unsplash.com/photo-1569050467409-766bde159817?w=200",
      origin: "Native to Central and South America",
      growthStage: "Nursery seedlings -> Transplanting -> Flowering -> Pod development (60-90 days)",
      culinary: "Used widely in cooking, curries, Sambol, and as a spicy seasoning.",
      nutrition: "Rich in Vitamin C, Vitamin A, and Capsaicin which boosts metabolism."
    },
    {
      id: "potato",
      cropName: "Potato",
      category: "Tuber Vegetable",
      imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=200",
      origin: "Native to the Andes region of South America",
      growthStage: "Planting seed tubers -> Sprouting -> Plant growth -> Tuber bulking (70-120 days)",
      culinary: "Boiled, fried, mashed, baked, or added to various curries.",
      nutrition: "Good source of carbohydrates, Vitamin C, Vitamin B6, and Potassium."
    },
    {
      id: "beans",
      cropName: "Beans",
      category: "Legume / Pod Vegetable",
      imageUrl: "https://images.unsplash.com/photo-1587735243615-c03f25cac12a?w=200",
      origin: "Native to Central and South America",
      growthStage: "Direct sowing -> Germination (7-14 days) -> Climbing/Bush growth -> Pod harvesting.",
      culinary: "Cooked as curries, stir-fried, or added to salads and soups.",
      nutrition: "Excellent source of plant-based protein, dietary fiber, iron, and folate."
    }
  ];

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

            {/* Crops Selection List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cropsList.map((crop) => (
                <div key={crop.id} style={{ backgroundColor: '#ffffff', padding: '14px 16px', borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '1px solid #eaeaea', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  
                  {/* Image Circle */}
                  <div style={{ width: '56px', height: '56px', minWidth: '56px', minHeight: '56px', borderRadius: '50%', border: '2px solid #2d6a4f', padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundColor: '#fff' }}>
                    <img 
                      src={crop.imageUrl} 
                      alt={crop.cropName} 
                      style={{ width: '48px', height: '48px', minWidth: '48px', minHeight: '48px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: '15px', fontWeight: 'bold', color: '#111', margin: '0 0 2px 0' }}>{crop.cropName}</h2>
                    <p style={{ fontSize: '11px', color: '#666', margin: '0' }}>({crop.category})</p>
                  </div>

                  {/* View Details Button */}
                  <button 
                    onClick={() => {
                      setSelectedCrop(crop);
                      setViewMode('details');
                    }}
                    style={{ backgroundColor: '#2d6a4f', color: '#ffffff', border: 'none', padding: '8px 12px', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                  >
                    {getText('viewDetails')}
                  </button>

                </div>
              ))}
            </div>

          </div>
        )}

        {/* ================= 2. DETAILS VIEW ================= */}
        {viewMode === 'details' && selectedCrop && (
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
                  src={selectedCrop.imageUrl} 
                  alt={selectedCrop.cropName} 
                  style={{ width: '52px', height: '52px', minWidth: '52px', minHeight: '52px', borderRadius: '50%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <h2 style={{ fontSize: '16px', fontWeight: 'bold', color: '#111', margin: '0' }}>{selectedCrop.cropName}</h2>
                </div>
                <p style={{ fontSize: '11px', color: '#666', margin: '4px 0 0 0' }}>
                  <strong>{getText('category')}:</strong> {selectedCrop.category}
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
                  {selectedCrop.origin}
                </p>
              </div>

              <div>
                <p style={{ fontWeight: 'bold', color: '#2d6a4f', margin: '0 0 4px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>🌱</span> <span>{getText('growthCultivation')}</span>
                </p>
                <p style={{ color: '#555', margin: '0', paddingLeft: '22px', lineHeight: '1.4' }}>
                  {selectedCrop.growthStage}
                </p>
              </div>

              <div>
                <p style={{ fontWeight: 'bold', color: '#2d6a4f', margin: '0 0 4px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>🍲</span> <span>{getText('culinaryUses')}</span>
                </p>
                <p style={{ color: '#555', margin: '0', paddingLeft: '22px', lineHeight: '1.4' }}>
                  {selectedCrop.culinary}
                </p>
              </div>

              <div>
                <p style={{ fontWeight: 'bold', color: '#2d6a4f', margin: '0 0 4px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>💡</span> <span>{getText('nutritionalValue')}</span>
                </p>
                <p style={{ color: '#555', margin: '0', paddingLeft: '22px', lineHeight: '1.4' }}>
                  {selectedCrop.nutrition}
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}