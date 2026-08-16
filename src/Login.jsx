import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import leafLogo from './assets/leaf-logo.png';

function Login() {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="signup-page-wrapper">
      <div className="signup-card-container">
        
        <div className="signup-header-section">
          <img src={leafLogo} alt="Leaf Logo" className="signup-leaf-logo" />
          <h1 className="signup-title">AgroSmart</h1>
          <p className="signup-subtitle">Smart Farming Assistant</p>
        </div>

        <div className="signup-green-card">
          <h2 className="signup-account-title">Create an account</h2>
          <p className="signup-account-subtitle">Enter your email to sign up for this app</p>

          <form onSubmit={handleContinue} style={{ width: '100%' }}>
            <input 
              type="email" 
              placeholder="name@example.com" 
              className="signup-email-input"
              required
            />
            <button type="submit" className="signup-continue-btn">
              Continue
            </button>
          </form>

          <div className="signup-divider-row">
            <span>or</span>
          </div>

          <button className="signup-social-btn" onClick={() => navigate('/home')}>
            Continue with Google
          </button>
          
          <button className="signup-social-btn" onClick={() => navigate('/home')}>
            Continue with Apple
          </button>

          <p className="signup-policy-text">
            By clicking continue, you agree to our <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;