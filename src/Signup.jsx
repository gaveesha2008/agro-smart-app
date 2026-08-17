import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import agroLogo from './assets/agro.jpg';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleContinue = () => {
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address to continue.');
      return;
    }
    setError('');
    navigate('/home');
  };

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#f9f9f7', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Segoe UI, sans-serif',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      
      <div style={{ 
        width: '100%', 
        maxWidth: '450px', 
        backgroundColor: '#ffffff', 
        borderRadius: '24px',
        padding: '35px 30px',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        border: '1px solid #e0e0e0',
        boxSizing: 'border-box'
      }}>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img 
            src={agroLogo} 
            alt="AgroSmart Logo" 
            style={{ width: '120px', height: '120px', borderRadius: '20px', objectFit: 'cover' }} 
          />
        </div>

        <h2 style={{ fontSize: '18px', color: '#333', marginBottom: '20px' }}>Create an account</h2>

        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <input 
            type="email" 
            placeholder="email@domain.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '14px', 
              borderRadius: '10px', 
              border: error ? '1px solid #ff4d4f' : '1px solid #ccc', 
              boxSizing: 'border-box',
              outline: 'none'
            }} 
          />
          {error && <div style={{ color: '#ff4d4f', fontSize: '11px', marginTop: '5px' }}>{error}</div>}
        </div>

        <button 
          onClick={handleContinue}
          style={{ 
            width: '100%', 
            padding: '14px', 
            background: '#000', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '10px', 
            fontWeight: 'bold',
            cursor: 'pointer',
            marginBottom: '20px'
          }}
        >
          Continue
        </button>

        <div style={{ color: '#aaa', fontSize: '12px', marginBottom: '20px' }}>or connect with</div>

        <button 
          onClick={() => navigate('/home')}
          style={{ 
            width: '100%', 
            padding: '12px', 
            background: '#f5f5f5', 
            border: '1px solid #ddd', 
            borderRadius: '10px', 
            marginBottom: '10px', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            fontWeight: '500',
            color: '#333'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.18v3.14C3.15 21.36 7.22 24 12 24z"/>
            <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.62H1.18C.43 8.14 0 9.87 0 12s.43 3.86 1.18 5.38l4.09-3.14z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.22 0 3.15 2.64 1.18 6.62l4.09 3.14c.95-2.85 3.6-4.96 6.73-4.96z"/>
          </svg>
          Continue with Google
        </button>

        <button 
          onClick={() => navigate('/home')}
          style={{ 
            width: '100%', 
            padding: '12px', 
            background: '#f5f5f5', 
            border: '1px solid #ddd', 
            borderRadius: '10px', 
            marginBottom: '20px', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            fontWeight: '500',
            color: '#333'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 5.31c.65-.79 1.09-1.89.97-2.99-.96.04-2.13.64-2.82 1.43-.6.68-1.12 1.79-.98 2.87 1.08.08 2.18-.51 2.83-1.31z"/>
          </svg>
          Continue with Apple
        </button>

        <p style={{ fontSize: '10px', color: '#999', margin: 0 }}>
          🔒 Your data is encrypted and secure. By signing up, you agree to our <u>Terms</u> & <u>Privacy Policy</u>.
        </p>

      </div>
    </div>
  );
}