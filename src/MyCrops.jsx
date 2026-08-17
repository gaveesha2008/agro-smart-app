import React from 'react';
import { useLanguage } from './LanguageContext';
import { useNavigate } from 'react-router-dom';

export default function MyCrops() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    English: {
      title: "My Crop",
      cropName: "Tomato",
      status: "Healthy",
      planted: "Planted: 2026/07/28",
      location: "Location: Galle",
      field: "Field: 0.5 Acre",
      plants: "Plants: 350",
      age: "Age: 45 Days",
      stageTitle: "Crop Growth Stage",
      currentStage: "Current Stage: Flowering - 65%",
      irrigation: "Irrigation",
      irrigationVal: "Next: Tomorrow",
      nutrition: "Nutrition",
      nutritionVal: "Next: In 3 Days",
      health: "Health",
      healthVal: "No Issues",
      harvest: "Harvest",
      harvestVal: "In 24 Days",
      addCrop: "Add New Crop",
      edit: "Edit Details"
    },
    Sinhala: {
      title: "මගේ බෝගය",
      cropName: "තක්කාලි",
      status: " නිරෝගීයි",
      planted: "စိုက်ပျိုးသည့် දිනය: 2026/07/28",
      location: "ස්ථානය: ගාල්ල",
      field: "වපසරිය: අක්කර 0.5",
      plants: "පැළ ගණන: 350",
      age: "වයස: දින 45",
      stageTitle: "බෝග වර්ධන අවධිය",
      currentStage: "වත්මන් අවධිය: මල් පිපීම - 65%",
      irrigation: "ජලය සැපයීම",
      irrigationVal: "මීළඟට: හෙට",
      nutrition: "පෝෂණය",
      nutritionVal: "මීළඟට: දින 3 කින්",
      health: "සෞඛ්‍ය තත්ත්වය",
      healthVal: "ගැටලු නොමැත",
      harvest: "අස්වැන්න",
      harvestVal: "දින 24 කින්",
      addCrop: "අලුත් බෝගයක් එකතු කරන්න",
      edit: "විස්තර වෙනස් කරන්න"
    },
    Tamil: {
      title: "எனது பயிர்",
      cropName: "தக்காளி",
      status: "ஆரோக்கியமானது",
      planted: "நடப்பட்ட தேதி: 2026/07/28",
      location: "இடம்: காலி",
      field: "புலம்: 0.5 ஏக்கர்",
      plants: "செடிகள்: 350",
      age: "வயது: 45 நாட்கள்",
      stageTitle: "பயிர் வளர்ச்சி நிலை",
      currentStage: "தற்போதைய நிலை: பூக்கும் பருவம் - 65%",
      irrigation: "நீர்ப்பாசனம்",
      irrigationVal: "அடுத்து: நாளை",
      nutrition: "ஊட்டச்சத்து",
      nutritionVal: "அடுத்து: 3 நாட்களில்",
      health: "சுகாதாரம்",
      healthVal: "சிக்கல்கள் இல்லை",
      harvest: "அறுவடை",
      harvestVal: "24 நாட்களில்",
      addCrop: "புதிய பயிரைச் சேர்",
      edit: "விவரங்களைத் திருத்து"
    }
  };

  const t = content[language] || content['English'];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ background: '#2e7d32', color: 'white', padding: '15px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', color: 'white', fontSize: '18px', cursor: 'pointer' }}>←</button>
        <h2>{t.title}</h2>
      </div>

      <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px', marginTop: '20px', border: '1px solid #ddd' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3>{t.cropName}</h3>
            <p style={{ color: 'green', fontWeight: 'bold' }}>{t.status}</p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', margin: '15px 0', fontSize: '14px' }}>
          <div><p>{t.planted}</p><p>{t.location}</p></div>
          <div><p>{t.plants}</p><p>{t.field}</p></div>
          <div><p>{t.age}</p></div>
        </div>

        <hr style={{ border: '0.5px solid #eee', margin: '15px 0' }} />

        <h4>{t.stageTitle}</h4>
        <p style={{ fontSize: '14px', color: '#555' }}>{t.currentStage}</p>
        <div style={{ background: '#ddd', height: '8px', borderRadius: '4px', margin: '10px 0' }}>
          <div style={{ background: '#2e7d32', width: '65%', height: '100%', borderRadius: '4px' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px' }}>
          <div style={{ background: '#fff', padding: '10px', borderRadius: '8px', border: '1px solid #eee' }}>
            <strong>💧 {t.irrigation}</strong>
            <p style={{ fontSize: '13px', color: '#666' }}>{t.irrigationVal}</p>
          </div>
          <div style={{ background: '#fff', padding: '10px', borderRadius: '8px', border: '1px solid #eee' }}>
            <strong>🌱 {t.nutrition}</strong>
            <p style={{ fontSize: '13px', color: '#666' }}>{t.nutritionVal}</p>
          </div>
          <div style={{ background: '#fff', padding: '10px', borderRadius: '8px', border: '1px solid #eee' }}>
            <strong>❤️ {t.health}</strong>
            <p style={{ fontSize: '13px', color: '#666' }}>{t.healthVal}</p>
          </div>
          <div style={{ background: '#fff', padding: '10px', borderRadius: '8px', border: '1px solid #eee' }}>
            <strong>📦 {t.harvest}</strong>
            <p style={{ fontSize: '13px', color: '#666' }}>{t.harvestVal}</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button style={{ flex: 1, background: '#2e7d32', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>{t.addCrop}</button>
          <button style={{ flex: 1, background: '#fff', color: '#2e7d32', border: '1px solid #2e7d32', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>{t.edit}</button>
        </div>
      </div>
    </div>
  );
}