import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import leafLogo from './assets/leaf-logo.png';

export default function About() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const content = {
    English: {
      back: "Back",
      version: "Version 1.0.0",
      description1: "AgroSmart is a comprehensive smart farming assistant designed to empower farmers with modern technology. Our application provides real-time weather updates, market prices, disease detection capabilities, and farming reminders to help you optimize your agricultural practices.",
      description2: "Our mission is to make smart farming accessible to everyone, promoting sustainable agriculture and increasing crop yields through data-driven insights.",
      rights: "All rights reserved."
    },
    Sinhala: {
      back: "ආපසු",
      version: "පිටපත 1.0.0",
      description1: "AgroSmart යනු නවීන තාක්ෂණයෙන් ගොවීන් සවිබල ගැන්වීම සඳහා නිර්මාණය කරන ලද පුළුල් ස්මාර්ට් ගොවිතැන් සහායකයෙකි. අපගේ යෙදුම මඟින් ඔබේ කෘෂිකාර්මික කටයුතු ප්‍රශස්ත කර ගැනීමට උපකාර කිරීම සඳහා තත්‍ය කාලීන කාලගුණ යාවත්කාලීන කිරීම්, වෙළඳපල මිල ගණන්, රෝග හඳුනාගැනීමේ හැකියාවන් සහ ගොවිතැන් මතක් කිරීම් සපයයි.",
      description2: "දත්ත මත පදනම් වූ තීක්ෂ්ණ බුද්ධිය හරහා තිරසාර කෘෂිකාර්මික ක්‍රම ප්‍රවර්ධනය කරමින් සහ බෝග අස්වැන්න වැඩි කරමින්, සැමට ස්මාර්ට් ගොවිතැන් පහසුවෙන් ළඟා කර දීම අපගේ මෙහෙවරයි.",
      rights: "සියලුම හිමිකම් ඇවිරිණි."
    },
    Tamil: {
      back: "பின்னால்",
      version: "பதிப்பு 1.0.0",
      description1: "AgroSmart என்பது நவீன தொழில்நுட்பத்துடன் விவசாயிகளை மேம்படுத்துவதற்காக வடிவமைக்கப்பட்ட ஒரு விரிவான ஸ்மார்ட் விவசாய உதவியாளர் ஆகும். உங்கள் விவசாய நடைமுறைகளை உகந்ததாக்க உதவும் வகையில், எங்கள் பயன்பாடு உண்மையான நேர வானிலை புதுப்பிப்புகள், சந்தை விலைகள், நோய் கண்டறிதல் மற்றும் விவசாய நினைவூட்டல்களை வழங்குகிறது.",
      description2: "தரவு சார்ந்த நுண்ணறிவு மூலம் நிலையான விவசாயத்தை மேம்படுத்துவதும், பயிர் விளைச்சலை அதிகரிப்பதும், ஸ்மார்ட் விவசாயத்தை அனைவரின் எளிதில் அணுகக்கூடியதாக மாற்றுவதும் எங்கள் நோக்கமாகும்.",
      rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    }
  };

  const t = content[language] || content['English'];

  return (
    <div style={{
      padding: '24px 20px',
      flex: 1,
      boxSizing: 'border-box',
      width: '100%',
      backgroundColor: '#fdfdfd',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <button 
          onClick={() => navigate(-1)} 
          style={{ 
            marginBottom: '20px', 
            padding: '8px 12px', 
            backgroundColor: 'transparent', 
            border: 'none', 
            color: '#1db954', 
            fontSize: '16px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          &larr; {t.back}
        </button>

        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '18px',
          padding: '40px 28px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
          border: '1px solid #eaeaea',
          textAlign: 'center'
        }}>
          <img src={leafLogo} alt="AgroSmart Logo" style={{ width: '80px', marginBottom: '20px' }} />
          
          <h1 style={{ color: '#2c3e50', fontSize: '24px', marginBottom: '10px' }}>AgroSmart</h1>
          <p style={{ color: '#7f8c8d', fontSize: '14px', marginBottom: '24px' }}>{t.version}</p>
          
          <p style={{ color: '#34495e', lineHeight: '1.6', fontSize: '15px', marginBottom: '20px', textAlign: 'justify' }}>
            {t.description1}
          </p>
          
          <p style={{ color: '#34495e', lineHeight: '1.6', fontSize: '15px', textAlign: 'justify' }}>
            {t.description2}
          </p>

          <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eaeaea' }}>
            <p style={{ color: '#95a5a6', fontSize: '12px' }}>
              &copy; {new Date().getFullYear()} AgroSmart. {t.rights}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}