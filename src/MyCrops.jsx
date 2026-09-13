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
      imageUrl: "data:image/jpeg;base64,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",
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
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrCDnloUq3padsGTRxEwMc0xZCwCHboNoOKAn5yPR6TQ&s=10",
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