import React from 'react';
import { useNavigate } from 'react-router-dom';
import leafLogo from './assets/leaf-logo.png';

export default function About() {
  const navigate = useNavigate();

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
          &larr; Back
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
          <p style={{ color: '#7f8c8d', fontSize: '14px', marginBottom: '24px' }}>Version 1.0.0</p>
          
          <p style={{ color: '#34495e', lineHeight: '1.6', fontSize: '15px', marginBottom: '20px', textAlign: 'justify' }}>
            AgroSmart is a comprehensive smart farming assistant designed to empower farmers with modern technology. Our application provides real-time weather updates, market prices, disease detection capabilities, and farming reminders to help you optimize your agricultural practices.
          </p>
          
          <p style={{ color: '#34495e', lineHeight: '1.6', fontSize: '15px', textAlign: 'justify' }}>
            Our mission is to make smart farming accessible to everyone, promoting sustainable agriculture and increasing crop yields through data-driven insights.
          </p>

          <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eaeaea' }}>
            <p style={{ color: '#95a5a6', fontSize: '12px' }}>
              &copy; {new Date().getFullYear()} AgroSmart. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
