import React from 'react';
import './App.css';
import leafLogo from './assets/leaf-logo.png'; // ඔබේ Logo Path එක

function Login({ onLoginSuccess }) {
  return (
    <div className="signup-page-wrapper">
      <div className="signup-card-container">
        
        {/* Header Section */}
        <div className="signup-header-section">
          <img src={leafLogo} alt="AgroSmart Logo" className="signup-leaf-logo" />
          <h1 className="signup-title">AgroSmart</h1>
          <p className="signup-subtitle">Smart Farming Assistant</p>
        </div>

        {/* Green Form Card */}
        <div className="signup-green-card">
          <h2 className="signup-account-title">Create an account</h2>
          <p className="signup-account-subtitle">Enter your email to sign up for this app</p>

          <input 
            type="email" 
            placeholder="email@domain.com" 
            className="signup-email-input" 
          />

          <button className="signup-continue-btn" onClick={onLoginSuccess}>
            Continue
          </button>

          <div className="signup-divider-row">
            <span>or</span>
          </div>

          {/* Google Button */}
          <button className="signup-social-btn">
            <svg className="social-icon" viewBox="0 0 24 24" width="18" height="18">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            Continue with Google
          </button>

          {/* Apple Original Logo Button */}
          <button className="signup-social-btn">
            <svg className="social-icon" viewBox="0 0 170 170" width="18" height="18" fill="currentColor">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.16-1.9-14.49-6.1-3.35-2.64-7.23-7.25-11.66-13.83-6.43-9.53-11.45-19.98-15.06-31.35-3.61-11.37-5.42-22.3-5.42-32.78 0-14.52 3.65-26.47 10.95-35.86 7.3-9.39 16.51-14.17 27.63-14.34 4.88 0 10.05 1.14 15.51 3.42 5.46 2.28 9.3 3.42 11.52 3.42 1.95 0 5.86-1.19 11.73-3.56 5.87-2.37 10.87-3.48 15.01-3.33 10.63.53 19.34 4.41 26.13 11.64 1.15 1.25 2.06 2.37 2.73 3.37-11.45 6.91-17.1 16.63-16.94 29.17.15 9.77 3.84 17.82 11.07 24.16 7.23 6.34 15.8 9.77 25.7 10.29-1.28 4.67-3.23 9.92-5.85 15.75zM119.22 31.64c0-6.84 2.5-13.39 7.5-19.65 5-6.26 11.37-9.98 19.11-11.16.2 1.15.3 2.12.3 2.92 0 6.94-2.58 13.57-7.75 19.89-5.17 6.32-11.58 10.05-19.23 11.19-.07-.74-.11-1.8-.11-3.19z"/>
            </svg>
            Continue with Apple
          </button>

          <p className="signup-policy-text">
            By clicking continue, you agree to our <a href="#terms">Terms of Service</a><br />
            and <a href="#privacy">Privacy Policy</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;