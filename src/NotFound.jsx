import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

export default function NotFound() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const content = {
    English: {
      code: "404",
      title: "Page Not Found",
      desc: "The page you are looking for does not exist or has been moved.",
      back: "Back to Home"
    },
    Sinhala: {
      code: "404",
      title: "පිටුව හමු නොවීය",
      desc: "ඔබ සොයන පිටුව නොමැත හෝ එය වෙනත් තැනකට ගෙන ගොස් ඇත.",
      back: "මුල් පිටුවට යන්න"
    },
    Tamil: {
      code: "404",
      title: "பக்கம் கிடைக்கவில்லை",
      desc: "நீங்கள் தேடும் பக்கம் இல்லை அல்லது நகர்த்தப்பட்டுள்ளது.",
      back: "முகப்புக்குச் செல்லவும்"
    }
  };

  const t = content[language] || content['English'];

  return (
    <div style={{ textAlign: 'center', padding: '80px 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '80px', color: '#1db954', margin: '0' }}>{t.code}</h1>
      <h2 style={{ color: '#333', marginTop: '10px' }}>{t.title}</h2>
      <p style={{ color: '#666', maxWidth: '400px', margin: '15px auto 30px auto' }}>{t.desc}</p>
      <button 
        onClick={() => navigate('/home')}
        style={{ padding: '12px 24px', background: '#1db954', color: '#fff', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px' }}
      >
        {t.back}
      </button>
    </div>
  );
}