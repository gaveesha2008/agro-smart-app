import React from 'react';
import bgImage from './assets/welcome-bg.jpg';

function App() {
  return (
    <div style={styles.outerContainer}>
      <div style={{ ...styles.mobileCard, backgroundImage: `url(${bgImage})` }}>
        <div style={styles.overlay}>
          <div style={styles.actionSection}>
            <button 
              style={styles.getStartedBtn}
              onClick={() => alert("Dashboard page is coming soon!")}
            >
              GET STARTED &gt;
            </button>

            <div style={styles.langContainer}>
              <button style={styles.langBtn}>SINHALA</button>
              <button style={styles.langBtn}>ENGLISH</button>
              <button style={styles.langBtn}>TAMIL</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  outerContainer: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#111',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    margin: 0,
  },
  mobileCard: {
    width: '380px',
    height: '750px',
    borderRadius: '30px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
    overflow: 'hidden',
    position: 'relative',
    border: '4px solid #333',
  },
  overlay: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '25px 20px',
    boxSizing: 'border-box',
    background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.4) 100%)',
  },
  actionSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  getStartedBtn: {
    width: '100%',
    padding: '16px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#2e7d32',
    border: '2px solid #a5d6a7',
    borderRadius: '14px',
    cursor: 'pointer',
    letterSpacing: '1px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
  },
  langContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '8px',
  },
  langBtn: {
    flex: 1,
    padding: '10px 0',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#000000',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    border: '1px solid #ccc',
    borderRadius: '8px',
    cursor: 'pointer',
    backdropFilter: 'blur(4px)',
  },
};

export default App;