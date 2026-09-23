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
    
    },
    Sinhala: {
      code: "404",
      title: "පිටුව හමු නොවීය",
      desc: "ඔබ සොයන පිටුව නොමැත හෝ එය වෙනත් තැනකට ගෙන ගොස් ඇත.",
    
    },
    Tamil: {
      code: "404",
      title: "பக்கம் கிடைக்கவில்லை",
      desc: "நீங்கள் தேடும் பக்கம் இல்லை அல்லது நகர்த்தப்பட்டுள்ளது.",
    
    }
  };

  const t = content[language] || content['English'];

  return (
    <div style={{ textAlign: 'center', padding: '80px 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '80px', color: '#1db954', margin: '0' }}>{t.code}</h1>
      <h2 style={{ color: '#333', marginTop: '10px' }}>{t.title}</h2>
      <p style={{ color: '#666', maxWidth: '400px', margin: '15px auto 30px auto' }}>{t.desc}</p>
      
    </div>
  );
}