import React from 'react';

const Home = ({ onNavigate }) => {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.mobileCard}>
        
        {/* Top Status Bar */}
        <div style={styles.statusBar}>
          <span>9:41</span>
          <div style={styles.statusRight}>
            <span>5G</span>
            <div style={styles.batteryIcon}></div>
          </div>
        </div>

        {/* Header Banner */}
        <div style={styles.headerBanner}>
          <h1 style={styles.appTitle}>AgroSmart</h1>
        </div>

        {/* Welcome Section */}
        <div style={styles.welcomeSection}>
          <div>
            <h2 style={styles.greetingTitle}>Hello, Farmer !</h2>
            <p style={styles.greetingSubtitle}>
              Good morning ! Let's make<br />farming smarter today.
            </p>
          </div>
          <div style={styles.leafIconHeader}>🌿</div>
        </div>

        {/* Grid Menu (6 Feature Cards) */}
        <div style={styles.menuGrid}>
          
          {/* 1. Weather Updates Button */}
          <div 
            style={{ ...styles.gridCard, backgroundColor: '#c5e1a5' }} 
            onClick={() => onNavigate('weather')}
          >
            <div style={styles.cardIcon}>🌤️</div>
            <span style={styles.cardTitle}>Weather Updates</span>
          </div>

         {/* 2. My Crops */}
      <div 
        style={{ ...styles.gridCard, backgroundColor: '#dcedc8' }}
        onClick={() => onNavigate('mycrops')}
      >
        <div style={styles.cardIcon}>🌾</div>
        <span style={styles.cardTitle}>My Crops</span>
      </div>

          {/* 4. Crop Monitoring Tools */}
          <div style={{ ...styles.gridCard, backgroundColor: '#ffcc80' }}>
            <div style={styles.cardIcon}>📡</div>
            <span style={styles.cardTitle}>Crop Monitoring Tools</span>
          </div>

          {/* 5. Farming Reminder */}
          <div style={{ ...styles.gridCard, backgroundColor: '#d1c4e9' }}>
            <div style={styles.cardIcon}>🚜</div>
            <span style={styles.cardTitle}>Farming Reminder</span>
          </div>

          {/* 6. Market Price */}
          <div style={{ ...styles.gridCard, backgroundColor: '#f8bbd0' }}>
            <div style={styles.cardIcon}>📊</div>
            <span style={styles.cardTitle}>Market Price</span>
          </div>

        </div>

        {/* Bottom Alert Banner */}
        <div style={styles.alertBox}>
          <span style={styles.alertCloudIcon}>🌧️</span>
          <p style={styles.alertText}>
            Alert: Heavy rain expected tomorrow.<br />Protect your crops.
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
    fontFamily: 'sans-serif',
  },
  mobileCard: {
    width: '360px',
    height: '720px',
    backgroundColor: '#ffffff',
    borderRadius: '30px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    boxSizing: 'border-box',
    position: 'relative',
    justifyContent: 'space-between',
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
  headerBanner: {
    width: '100%',
    backgroundColor: '#2e7d32',
    borderRadius: '16px',
    padding: '12px 0',
    textAlign: 'center',
    marginTop: '8px',
  },
  appTitle: {
    margin: 0,
    color: '#ffffff',
    fontSize: '22px',
    fontWeight: 'bold',
  },
  welcomeSection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 8px 0 8px',
  },
  greetingTitle: {
    margin: 0,
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#111827',
  },
  greetingSubtitle: {
    margin: '4px 0 0 0',
    fontSize: '12px',
    color: '#4b5563',
    lineHeight: '1.3',
  },
  leafIconHeader: {
    fontSize: '32px',
  },
  menuGrid: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    margin: '10px 0',
  },
  gridCard: {
    borderRadius: '18px',
    padding: '16px 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  },
  cardIcon: {
    fontSize: '28px',
  },
  cardTitle: {
    fontSize: '11px',
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
  },
  alertBox: {
    width: '100%',
    backgroundColor: '#e8f5e9',
    border: '1px solid #c8e6c9',
    borderRadius: '14px',
    padding: '8px 12px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    boxSizing: 'border-box',
  },
  alertCloudIcon: {
    fontSize: '20px',
  },
  alertText: {
    margin: 0,
    fontSize: '10px',
    color: '#2e7d32',
    fontWeight: '500',
    lineHeight: '1.3',
  },
  homeIndicator: {
    width: '120px',
    height: '4px',
    backgroundColor: '#000',
    borderRadius: '2px',
    marginTop: '4px',
  },
};

export default Home;