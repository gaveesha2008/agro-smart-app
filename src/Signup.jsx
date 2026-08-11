import React from 'react';

const Signup = ({ onContinue }) => {
  return (
    <div style={styles.outerContainer}>
      {/* Mobile Screen Card */}
      <div style={styles.mobileCard}>
        
        {/* Top Status Bar */}
        <div style={styles.statusBar}>
          <span>9:41</span>
          <div style={styles.statusRight}>
            <span>5G</span>
            <div style={styles.batteryIcon}></div>
          </div>
        </div>

        {/* Inner Light Green Card */}
        <div style={styles.innerCard}>
          
          {/* Logo & Header */}
          <div style={styles.logoSection}>
            <div style={styles.logoCircle}>🌱</div>
            <h1 style={styles.appTitle}>AgroSmart</h1>
            <p style={styles.appSubtitle}>Smart Farming Assistant</p>
          </div>

          {/* Form Heading */}
          <div style={styles.headingSection}>
            <h2 style={styles.formTitle}>Create an account</h2>
            <p style={styles.formSubtitle}>Enter your email to sign up for this app</p>
          </div>

          {/* Input Field */}
          <div style={styles.inputContainer}>
            <input 
              type="email" 
              placeholder="email@domain.com" 
              style={styles.inputField}
            />
          </div>

          {/* Continue Button */}
          <button style={styles.continueBtn} onClick={onContinue}>
            Continue
          </button>

          {/* Divider */}
          <div style={styles.dividerContainer}>
            <div style={styles.dividerLine}></div>
            <span style={styles.dividerText}>or</span>
          </div>

          {/* Social Logins */}
          <button style={styles.socialBtn} onClick={onContinue}>
            <span style={styles.googleG}>G</span>
            <span style={styles.socialText}>Continue with Google</span>
          </button>

          <button style={styles.socialBtn} onClick={onContinue}>
            <span style={styles.appleIcon}></span>
            <span style={styles.socialText}>Continue with Apple</span>
          </button>

          {/* Terms */}
          <p style={styles.termsText}>
            By clicking continue, you agree to our <a href="#terms" style={styles.link}>Terms of Service</a> and <a href="#privacy" style={styles.link}>Privacy Policy</a>
          </p>

        </div>

        {/* Bottom Home Indicator */}
        <div style={styles.homeIndicator}></div>

      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f1f5f9',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  mobileCard: {
    width: '360px',
    height: '700px',
    backgroundColor: '#ffffff',
    borderRadius: '30px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    boxSizing: 'border-box',
    position: 'relative',
  },
  statusBar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#000',
    padding: '0 8px',
  },
  statusRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  batteryIcon: {
    width: '16px',
    height: '9px',
    backgroundColor: '#000',
    borderRadius: '2px',
  },
  innerCard: {
    width: '100%',
    backgroundColor: '#eaf4ea',
    borderRadius: '24px',
    padding: '24px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    margin: 'auto 0',
  },
  logoSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logoCircle: {
    fontSize: '28px',
    marginBottom: '4px',
  },
  appTitle: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2e7d32',
    letterSpacing: '0.5px',
  },
  appSubtitle: {
    margin: '2px 0 0 0',
    fontSize: '11px',
    color: '#4b5563',
  },
  headingSection: {
    textAlign: 'center',
    marginBottom: '16px',
  },
  formTitle: {
    margin: 0,
    fontSize: '16px',
    fontWeight: '600',
    color: '#111827',
  },
  formSubtitle: {
    margin: '4px 0 0 0',
    fontSize: '11px',
    color: '#6b7280',
  },
  inputContainer: {
    width: '100%',
    marginBottom: '12px',
  },
  inputField: {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '12px',
    border: '1px solid #d1d5db',
    backgroundColor: '#ffffff',
    fontSize: '13px',
    boxSizing: 'border-box',
    outline: 'none',
    color: '#374151',
  },
  continueBtn: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#111827',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    marginBottom: '12px',
  },
  dividerContainer: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '8px 0 16px 0',
  },
  dividerLine: {
    position: 'absolute',
    width: '100%',
    height: '1px',
    backgroundColor: '#d1d5db',
  },
  dividerText: {
    position: 'relative',
    backgroundColor: '#eaf4ea',
    padding: '0 8px',
    fontSize: '11px',
    color: '#6b7280',
  },
  socialBtn: {
    width: '100%',
    padding: '11px',
    backgroundColor: '#ffffff',
    border: '1px solid #d1d5db',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '10px',
    cursor: 'pointer',
  },
  googleG: {
    fontWeight: 'bold',
    fontSize: '15px',
    color: '#4285F4',
  },
  appleIcon: {
    fontSize: '16px',
    color: '#000',
  },
  socialText: {
    fontSize: '13px',
    fontWeight: '500',
    color: '#374151',
  },
  termsText: {
    fontSize: '10px',
    color: '#6b7280',
    textAlign: 'center',
    marginTop: '6px',
    lineHeight: '1.4',
  },
  link: {
    color: '#111827',
    textDecoration: 'underline',
  },
  homeIndicator: {
    width: '120px',
    height: '4px',
    backgroundColor: '#000',
    borderRadius: '2px',
    marginBottom: '4px',
  },
};

export default Signup;