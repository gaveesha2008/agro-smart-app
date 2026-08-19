import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase.js'; // firebase.js පාර නිවැරදිව තබා ගන්න
import { signInWithEmailAndPassword } from 'firebase/auth';
import './App.css';
import leafLogo from './assets/leaf-logo.png';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    // ඊමේල් හෝ පාස්වර්ඩ් හිස් නම් පරීක්ෂා කිරීම
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      setLoading(true);
      // Firebase හරහා ලොග් වීම
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (err) {
      console.error(err);
      setError('Failed to login. Please check your email and password.');
    } finally {
      setLoading(false);
    }
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
          <h2 className="signup-account-title">Login to your account</h2>
          <p className="signup-account-subtitle">Enter your email and password to sign in</p>

          {error && <p style={{ color: 'red', fontSize: '12px', marginBottom: '10px', textAlign: 'center' }}>{error}</p>}

          <form onSubmit={handleLogin} style={{ width: '100%' }}>
            <input 
              type="email" 
              placeholder="name@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signup-email-input"
              style={{ marginBottom: '10px' }}
              required
            />
            
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signup-email-input"
              style={{ marginBottom: '15px' }}
              required
            />

            <button type="submit" className="signup-continue-btn" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
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