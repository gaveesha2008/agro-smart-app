import React from 'react';
import { useLanguage } from './LanguageContext';
import { useNavigate } from 'react-router-dom';

export default function CropMonitoring() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    English: {
      title: "Crop Monitoring Tools",
      sub: "Use smart tools to monitor your crops, track health, and take the right actions at the right time.",
      leaf: "Leaf Scanner",
      leafDesc: "Scan leaves to detect disease and get recommendations.",
      irrigation: "Irrigation Monitor",
      irrigationDesc: "Track soil moisture and get smart watering suggestions.",
      fertilizer: "Fertilizer Adviser",
      fertilizerDesc: "Get fertilizer recommendations based on crop needs.",
      pest: "Pest Detector",
      pestDesc: "Identify pests and get effective control solutions.",
      growth: "Growth Tracker",
      task: "Task Manager"
    },
    Sinhala: {
      title: "බෝග නිරීක්ෂණ මෙවලම්",
      sub: "ඔබේ බෝග නිරීක්ෂණය කිරීමට, සෞඛ්‍යය නිරීක්ෂණය කිරීමට සහ නිවැරදි වේලාවට නිවැරදි ක්‍රියාමාර්ග ගැනීමට ස්මාර්ට් මෙවලම් භාවිතා කරන්න.",
      leaf: "පත් ස්කෑනරය",
      leafDesc: "රෝග හඳුනා ගැනීමට සහ නිර්දේශ ලබා ගැනීමට කොළ ස්කෑන් කරන්න.",
      irrigation: "ජල කළමනාකරණ නිරීක්ෂකය",
      irrigationDesc: "පස්වල තෙතමනය නිරීක්ෂණය කර ජලය සැපයීමේ උපදෙස් ලබා ගන්න.",
      fertilizer: "පෝර උපදේශක",
      fertilizerDesc: "බෝග අවශ්‍යතා මත පදනම්ව පොහොර නිර්දේශ ලබා ගන්න.",
      pest: "පළිබෝධ නාශක හඳුනාගැනීම",
      pestDesc: "පළිබෝධකයන් හඳුනාගෙන ඵලදායී පාලන ක්‍රම ලබා ගන්න.",
      growth: "වර්ධන ට්‍රැකර්",
      task: "කාර්ය කළමනාකරු"
    },
    Tamil: {
      title: "பயிர் கண்காணிப்பு கருவிகள்",
      sub: "உங்கள் பயிர்களைக் கண்காணிக்கவும், ஆரோக்கியத்தைக் கண்காணிக்கவும் ஸ்மார்ட் கருவிகளைப் பயன்படுத்தவும்.",
      leaf: "இலை ஸ்கேனர்",
      leafDesc: "நோயைக் கண்டறிந்து பரிந்துரைகளைப் பெற இலைகளை ஸ்கேன் செய்யவும்.",
      irrigation: "நீர்ப்பாசன கண்காணிப்பு",
      irrigationDesc: "மண் ஈரப்பதத்தைக் கண்காணித்து ஸ்மார்ட் நீர்ப்பாசன பரிந்துரைகளைப் பெறவும்.",
      fertilizer: "உர ஆலோசகர்",
      fertilizerDesc: "பயிர் தேவைகளின் அடிப்படையில் உரப் பரிந்துரைகளைப் பெறவும்.",
      pest: "பூச்சி கண்டறிதல்",
      pestDesc: "பூச்சிகளைக் கண்டறிந்து பயனுள்ள கட்டுப்பாட்டு தீர்வுகளைப் பெறவும்.",
      growth: "வளர்ச்சி கண்காணிப்பு",
      task: "பணி மேலாளர்"
    }
  };

  const t = content[language] || content['English'];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ background: '#2e7d32', color: 'white', padding: '15px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', color: 'white', fontSize: '18px', cursor: 'pointer' }}>←</button>
        <h2>{t.title}</h2>
      </div>

      <p style={{ margin: '15px 0', fontSize: '14px', color: '#666' }}>{t.sub}</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <h4>🌿 {t.leaf}</h4>
          <p style={{ fontSize: '12px', color: '#666' }}>{t.leafDesc}</p>
        </div>
        <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <h4>💧 {t.irrigation}</h4>
          <p style={{ fontSize: '12px', color: '#666' }}>{t.irrigationDesc}</p>
        </div>
        <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <h4>🧪 {t.fertilizer}</h4>
          <p style={{ fontSize: '12px', color: '#666' }}>{t.fertilizerDesc}</p>
        </div>
        <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <h4>🐞 {t.pest}</h4>
          <p style={{ fontSize: '12px', color: '#666' }}>{t.pestDesc}</p>
        </div>
      </div>
    </div>
  );
}