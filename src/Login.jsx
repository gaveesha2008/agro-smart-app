import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase.js'; // firebase.js පාර නිවැරදිව තබා ගන්න
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';
import './App.css';
import leafLogo from './assets/leaf-logo.png';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    // ඊමේල් හෝ පාස්වර්ඩ් හිස් නම් පරීක්ෂා කිරීම
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      setLoading(true);
      // Firebase හරහා ලොග් වීම
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('userEmail', email); // Save email for unique account storage
      navigate('/home');
    } catch (err) {
      console.error(err);
      setError('Failed to login. Please check your email and password.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Please enter your email address first to reset the password.');
      return;
    }
    try {
      setError('');
      setMessage('');
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent! Check your inbox.');
    } catch (err) {
      console.error(err);
      setError('Failed to send password reset email.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem('userEmail', result.user.email);
      navigate('/home');
    } catch (err) {
      console.error(err);
      setError('Failed to login with Google.');
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
          {message && <p style={{ color: 'green', fontSize: '12px', marginBottom: '10px', textAlign: 'center' }}>{message}</p>}

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
              style={{ marginBottom: '10px' }}
              required
            />
            
            <div style={{ textAlign: 'right', marginBottom: '15px' }}>
              <span onClick={handleForgotPassword} style={{ color: '#1db954', fontSize: '12px', cursor: 'pointer', fontWeight: 'bold' }}>
                Forgot Password?
              </span>
            </div>

            <button type="submit" className="signup-continue-btn" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="signup-divider-row">
            <span>or</span>
          </div>

          <button className="signup-social-btn" onClick={handleGoogleLogin}>
            Continue with Google
          </button>
          
          <p className="signup-policy-text" style={{ marginTop: '15px' }}>
            Don't have an account? <span onClick={() => navigate('/signup')} style={{color: '#1db954', cursor: 'pointer', fontWeight: 'bold'}}>Sign up</span>
          </p>

          <p className="signup-policy-text">
            By clicking continue, you agree to our <span onClick={() => navigate('/terms')} style={{color: '#1db954', cursor: 'pointer'}}>Terms of Service</span> and <span onClick={() => navigate('/privacy')} style={{color: '#1db954', cursor: 'pointer'}}>Privacy Policy</span>.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;// Trigger HMR update
