import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useLanguage } from './LanguageContext'; // 1. භාෂාව සඳහා මෙය ඉම්පෝර්ට් කරන්න
import './App.css';
import leafLogo from './assets/leaf-logo.png';

function Signup() {
  const navigate = useNavigate();
  const { language } = useLanguage(); // 2. භාෂාව ලබා ගැනීම
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // 3. භාෂාවට අනුව වෙනස් වන වචන (Text Translation)
  const getTexts = () => {
    switch (language) {
      case 'Sinhala':
        return {
          title: 'ගිණුමක් සාදන්න',
          subtitle: 'AgroSmart වෙත පිවිසීමට ඔබේ විස්තර ඇතුළත් කරන්න',
          emailLabel: 'ඊමේල් ලිපිනය',
          passLabel: 'මුරපදය',
          confirmPassLabel: 'මුරපදය තහවුරු කරන්න',
          createBtn: 'ගිණුම සාදන්න',
          orConnect: 'නැතහොත් සම්බන්ධ වන්න',
          google: 'ගූගල් හරහා පිවිසෙන්න',
          apple: 'ඇපල් හරහා පිවිසෙන්න'
        };
      case 'Tamil':
        return {
          title: 'கணக்கை உருவாக்கவும்',
          subtitle: 'AgroSmart-এ பதிவு செய்ய உங்கள் விவரங்களை உள்ளிடவும்',
          emailLabel: 'மின்னஞ்சல் முகவரி',
          passLabel: 'கடவுச்சொல்',
          confirmPassLabel: 'கடவுச்சொல்லை உறுதிப்படுத்தவும்',
          createBtn: 'கணக்கை உருவாக்கவும்',
          orConnect: 'அல்லது இணைக்கவும்',
          google: 'Google மூலம் தொடரவும்',
          apple: 'Apple மூலம் தொடரவும்'
        };
      default:
        return {
          title: 'Create an account',
          subtitle: 'Enter your details to sign up for AgroSmart',
          emailLabel: 'Email Address',
          passLabel: 'Password',
          confirmPassLabel: 'Confirm Password',
          createBtn: 'Create Account',
          orConnect: 'or connect with',
          google: 'Continue with Google',
          apple: 'Continue with Apple'
        };
    }
  };

  const t = getTexts();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password || !confirmPassword) {
      setError('لطفاً සියලුම කොටස් පුරවන්න (Please fill all fields).');
      return;
    }

    if (password !== confirmPassword) {
      setError('පාස්වර්ඩ් එක සමාන නැත (Passwords do not match).');
      return;
    }

    if (password.length < 6) {
      setError('පාස්වර්ඩ් එක අක්ෂර 6කට වඩා වැඩි විය යුතුය.');
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (err) {
      console.error(err);
      setError('ගිණුම සෑදීම අසාර්ථකයි. වෙනත් ඊමේල් එකක් උත්සාහ කරන්න.');
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

        <div className="signup-green-card" style={{ padding: '25px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
          <h2 className="signup-account-title">{t.title}</h2>
          <p className="signup-account-subtitle">{t.subtitle}</p>

          {error && (
            <div style={{ backgroundColor: '#ffebee', color: '#c62828', padding: '10px', borderRadius: '6px', fontSize: '13px', marginBottom: '15px', textAlign: 'center', border: '1px solid #ffcdd2' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSignup} style={{ width: '100%' }}>
            <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#333', display: 'block', marginBottom: '5px' }}>{t.emailLabel}</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signup-email-input"
              style={{ marginBottom: '12px' }}
              required
            />
            
            {/* Password Field */}
            <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#333', display: 'block', marginBottom: '5px' }}>{t.passLabel}</label>
            <div className="password-input-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="At least 6 characters" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="signup-email-input"
                style={{ marginBottom: '0', width: '100%', paddingRight: '45px' }}
                required
              />
              <button 
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                )}
              </button>
            </div>

            {/* Confirm Password Field */}
            <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#333', display: 'block', marginTop: '12px', marginBottom: '5px' }}>{t.confirmPassLabel}</label>
            <div className="password-input-wrapper" style={{ marginBottom: '20px' }}>
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="Re-enter your password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="signup-email-input"
                style={{ marginBottom: '0', width: '100%', paddingRight: '45px' }}
                required
              />
              <button 
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                )}
              </button>
            </div>

            <button type="submit" className="signup-continue-btn" disabled={loading} style={{ cursor: 'pointer' }}>
              {loading ? 'Creating Account...' : t.createBtn}
            </button>
          </form>

          <div className="signup-divider-row">
            <span>{t.orConnect}</span>
          </div>

          <button 
            className="signup-social-btn" 
            onClick={handleGoogleLogin} 
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '10px', cursor: 'pointer' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.15v3.14C3.15 21.32 7.23 24 12 24z"/>
              <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.62H1.15C.42 8.1 0 9.77 0 11.5s.42 3.4 1.15 4.88l4.12-3.14z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.23 0 3.15 2.68 1.15 6.62l4.12 3.14c.95-2.85 3.6-4.96 6.73-4.96z"/>
            </svg>
            {t.google}
          </button>
          
          <p className="signup-policy-text" style={{ marginTop: '15px' }}>
            Already have an account? <span onClick={() => navigate('/login')} style={{color: '#1db954', cursor: 'pointer', fontWeight: 'bold'}}>Login</span>
          </p>

          <p className="signup-policy-text" style={{ marginTop: '15px' }}>
            By clicking continue, you agree to our <span onClick={() => navigate('/terms')} style={{color: '#1db954', cursor: 'pointer'}}>Terms of Service</span> and <span onClick={() => navigate('/privacy')} style={{color: '#1db954', cursor: 'pointer'}}>Privacy Policy</span>.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Signup;