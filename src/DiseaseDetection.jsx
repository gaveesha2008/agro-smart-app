import React, { useRef } from 'react';
import { useLanguage } from './LanguageContext';
import { useNavigate } from 'react-router-dom';

export default function DiseaseDetection() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const fileInputRef = useRef(null); // කැමරාව ට්‍රිගර් කිරීමට ref එකක්

  const content = {
    English: {
      title: "Disease Detection",
      uploadTitle: "Upload Leaf Image",
      uploadSub: "Tap to upload or take a photo",
      takePhoto: "Take Photo",
      tip: "Tip: Make sure that leaf is clear and visible for accurate results."
    },
    Sinhala: {
      title: "රෝග හඳුනාගැනීම",
      uploadTitle: "පත්‍රයක පින්තූරයක් උඩුගත කරන්න",
      uploadSub: "උඩුගත කිරීමට හෝ ඡායාරූපයක් ගැනීමට තට්ටු කරන්න",
      takePhoto: "ඡායාරූපයක් ගන්න",
      tip: "ඉඟිය: නිවැරදි ප්‍රතිඵල සඳහා කොළය පැහැදිලිව පෙනෙන බවට වග බලා ගන්න."
    },
    Tamil: {
      title: "நோய் கண்டறிதல்",
      uploadTitle: "இலை படத்தைப் பதிவேற்றவும்",
      uploadSub: "பதிவேற்ற அல்லது புகைப்படம் எடுக்க தட்டவும்",
      takePhoto: "புகைப்படம் எடு",
      tip: "உதவிக்குறிப்பு: துல்லியமான முடிவுகளுக்கு இலை தெளிவாகத் தெரிவதை உறுதி செய்யவும்."
    }
  };

  const t = content[language] || content['English'];

  // කැමරාව විවෘත කිරීමට බටන් එක ක්ලික් කළ විට මෙය ක්‍රියාත්මක වේ
  const handleCaptureClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* රහසිගත input එක */}
      <input 
        type="file" 
        accept="image/*" 
        capture="environment" 
        ref={fileInputRef} 
        style={{ display: 'none' }} 
      />

      <div style={{ background: '#2e7d32', color: 'white', padding: '15px', borderRadius: '10px' }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
          &larr; {t.title}
        </button>
      </div>

      <div onClick={handleCaptureClick} style={{ border: '2px dashed #2e7d32', padding: '40px', textAlign: 'center', borderRadius: '10px', marginTop: '20px', cursor: 'pointer' }}>
        <div style={{ fontSize: '40px', color: '#2e7d32', marginBottom: '10px' }}>📸</div>
        <h3 style={{ margin: '0' }}>{t.uploadTitle}</h3>
        <p style={{ color: '#666', fontSize: '14px' }}>{t.uploadSub}</p>
      </div>

      <button 
        onClick={handleCaptureClick} // මෙතනදීත් handleCaptureClick එක දාන්න
        style={{ width: '100%', background: '#00b074', color: 'white', border: 'none', padding: '15px', marginTop: '20px', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}
      >
        📷 {t.takePhoto}
      </button>

      <div style={{ marginTop: '20px', padding: '12px', background: '#e8f5e9', borderRadius: '8px', fontSize: '14px', color: '#333' }}>
        🌿 {t.tip}
      </div>
    </div>
  );
}