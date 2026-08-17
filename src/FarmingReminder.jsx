import React from 'react';
import { useLanguage } from './LanguageContext';
import { useNavigate } from 'react-router-dom';

export default function FarmingReminder() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    English: {
      title: "Farming Reminder",
      cropName: "Tomato",
      planted: "Planted on: 2026/07/28",
      field: "Field: Field 1",
      all: "All",
      upcoming: "Upcoming",
      completed: "Completed",
      watering: "Watering",
      fertilizer: "Fertilizer",
      pesticide: "Pesticide",
      harvest: "Harvest",
      statusCompleted: "Completed",
      statusUpcoming: "Upcoming"
    },
    Sinhala: {
      title: "ගොවිතැන් මතක් කිරීම්",
      cropName: "තක්කාලි",
      planted: "စိုက်ပျိုးသည့် දිනය: 2026/07/28",
      field: "වපසරිය: ක්ෂේත්‍රය 1",
      all: "සියල්ල",
      upcoming: "ඉදිරියට ඇති",
      completed: "නිම කරන ලද",
      watering: "ජලය සැපයීම",
      fertilizer: "පොහොර යෙදීම",
      pesticide: "පළිබෝධනාශක",
      harvest: "අස්වනු නෙළීම",
      statusCompleted: "සම්පූර්ණයි",
      statusUpcoming: "ඉදිරියට ඇත"
    },
    Tamil: {
      title: "விவசாய நினைவூட்டல்",
      cropName: "தக்காளி",
      planted: "நடப்பட்ட தேதி: 2026/07/28",
      field: "புலம்: களம் 1",
      all: "அனைத்தும்",
      upcoming: "வரவிருக்கும்",
      completed: "முடிந்தது",
      watering: "தண்ணீர் பாய்ச்சுதல்",
      fertilizer: "உரம்",
      pesticide: "பூச்சிக்கொல்லி",
      harvest: "அறுவடை",
      statusCompleted: "முடிந்தது",
      statusUpcoming: "வரவிருக்கிறது"
    }
  };

  const t = content[language] || content['English'];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ background: '#2e7d32', color: 'white', padding: '15px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', color: 'white', fontSize: '18px', cursor: 'pointer' }}>←</button>
        <h2>{t.title}</h2>
      </div>

      <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '10px', marginTop: '20px', border: '1px solid #ddd' }}>
        <h3>{t.cropName}</h3>
        <p style={{ fontSize: '13px', color: '#666' }}>{t.planted} | {t.field}</p>
      </div>

      <div style={{ display: 'flex', gap: '20px', margin: '20px 0', borderBottom: '1px solid #ccc', paddingBottom: '10px', fontWeight: 'bold' }}>
        <span style={{ color: '#2e7d32', cursor: 'pointer' }}>{t.all}</span>
        <span style={{ color: '#666', cursor: 'pointer' }}>{t.upcoming}</span>
        <span style={{ color: '#666', cursor: 'pointer' }}>{t.completed}</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f5f5f5', borderRadius: '6px' }}>
          <div><strong>{t.watering}</strong><br/><small>2026-07-30</small></div>
          <span style={{ color: 'green', fontWeight: 'bold' }}>{t.statusCompleted}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f5f5f5', borderRadius: '6px' }}>
          <div><strong>{t.fertilizer}</strong><br/><small>2026-08-02</small></div>
          <span style={{ color: '#e65100', fontWeight: 'bold' }}>{t.statusUpcoming}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f5f5f5', borderRadius: '6px' }}>
          <div><strong>{t.pesticide}</strong><br/><small>2026-08-05</small></div>
          <span style={{ color: '#e65100', fontWeight: 'bold' }}>{t.statusUpcoming}</span>
        </div>
      </div>
    </div>
  );
}