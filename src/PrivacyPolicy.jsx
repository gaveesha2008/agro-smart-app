import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="signup-page-wrapper" style={{ display: 'flex', flexDirection: 'column', padding: '20px', minHeight: '100vh', backgroundColor: '#f0f4f0' }}>
      <button onClick={() => navigate(-1)} style={{ alignSelf: 'flex-start', marginBottom: '20px', padding: '10px 15px', backgroundColor: '#1db954', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        &larr; Back
      </button>
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', maxWidth: '800px', width: '100%', margin: '0 auto' }}>
        <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>Privacy Policy</h1>
        <p style={{ color: '#7f8c8d', marginBottom: '15px', lineHeight: '1.6' }}>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 style={{ color: '#2c3e50', marginTop: '20px', marginBottom: '10px' }}>1. Information We Collect</h2>
        <p style={{ color: '#34495e', marginBottom: '15px', lineHeight: '1.6' }}>
          When you register for an account, we collect personal information such as your email address and profile details. We may also collect usage data to improve our services.
        </p>
        
        <h2 style={{ color: '#2c3e50', marginTop: '20px', marginBottom: '10px' }}>2. How We Use Your Information</h2>
        <p style={{ color: '#34495e', marginBottom: '15px', lineHeight: '1.6' }}>
          We use the information we collect to provide, maintain, and improve the AgroSmart application, as well as to communicate with you regarding updates and relevant features.
        </p>

        <h2 style={{ color: '#2c3e50', marginTop: '20px', marginBottom: '10px' }}>3. Data Security</h2>
        <p style={{ color: '#34495e', marginBottom: '15px', lineHeight: '1.6' }}>
          We implement appropriate technical and organizational security measures to protect your personal information. However, please be aware that no method of transmission over the internet is 100% secure.
        </p>

        <h2 style={{ color: '#2c3e50', marginTop: '20px', marginBottom: '10px' }}>4. Sharing of Information</h2>
        <p style={{ color: '#34495e', marginBottom: '15px', lineHeight: '1.6' }}>
          We do not share your personal information with third parties except as necessary to provide our services or when required by law.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
