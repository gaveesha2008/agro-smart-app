import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function TermsOfService() {
  const navigate = useNavigate();

  return (
    <div className="signup-page-wrapper" style={{ display: 'flex', flexDirection: 'column', padding: '20px', minHeight: '100vh', backgroundColor: '#f0f4f0' }}>
      <button onClick={() => navigate(-1)} style={{ alignSelf: 'flex-start', marginBottom: '20px', padding: '10px 15px', backgroundColor: '#1db954', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        &larr; Back
      </button>
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', maxWidth: '800px', width: '100%', margin: '0 auto' }}>
        <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>Terms of Service</h1>
        <p style={{ color: '#7f8c8d', marginBottom: '15px', lineHeight: '1.6' }}>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 style={{ color: '#2c3e50', marginTop: '20px', marginBottom: '10px' }}>1. Acceptance of Terms</h2>
        <p style={{ color: '#34495e', marginBottom: '15px', lineHeight: '1.6' }}>
          By accessing or using the AgroSmart application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
        </p>
        
        <h2 style={{ color: '#2c3e50', marginTop: '20px', marginBottom: '10px' }}>2. Use of Service</h2>
        <p style={{ color: '#34495e', marginBottom: '15px', lineHeight: '1.6' }}>
          AgroSmart provides smart farming assistance. The information provided (such as weather, market prices, and disease detection) is for reference purposes. We do not guarantee the absolute accuracy of the data.
        </p>

        <h2 style={{ color: '#2c3e50', marginTop: '20px', marginBottom: '10px' }}>3. User Accounts</h2>
        <p style={{ color: '#34495e', marginBottom: '15px', lineHeight: '1.6' }}>
          You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
        </p>

        <h2 style={{ color: '#2c3e50', marginTop: '20px', marginBottom: '10px' }}>4. Changes to Terms</h2>
        <p style={{ color: '#34495e', marginBottom: '15px', lineHeight: '1.6' }}>
          We reserve the right to modify or replace these Terms at any time. We will try to provide at least 30 days notice prior to any new terms taking effect.
        </p>
      </div>
    </div>
  );
}

export default TermsOfService;
