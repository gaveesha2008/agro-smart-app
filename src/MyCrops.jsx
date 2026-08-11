import React from 'react';

const MyCrops = ({ onBack }) => {
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

        {/* Top Green Bar */}
        <div style={styles.headerBar}>
          <button style={styles.backBtn} onClick={onBack}>←</button>
          <h1 style={styles.headerTitle}>My Crop</h1>
        </div>

        {/* Content Scrollable Area */}
        <div style={styles.contentArea}>
          
          {/* Crop Profile Header */}
          <div style={styles.cropHeaderCard}>
            <div style={styles.tomatoCircle}>🍅</div>
            <div style={styles.cropInfo}>
              <div style={styles.cropTitleRow}>
                <h2 style={styles.cropName}>Tomato</h2>
                <span style={styles.checkMark}>✔</span>
              </div>
              <div style={styles.cropDetailsGrid}>
                <span>📅 Planted: 2026/07/28</span>
                <span>📍 Galle</span>
                <span>📏 0.5 Acre</span>
                <span>🌱 Plants: 350</span>
                <span>⏳ Age: 45 Days</span>
                <span># Field ID: 1</span>
              </div>
            </div>
          </div>

          {/* Crop Growth Stage */}
          <div style={styles.sectionCard}>
            <h3 style={styles.sectionTitle}>Crop Growth Stage</h3>
            <div style={styles.stageTracker}>
              <div style={styles.stageItem}>🌱<br/><span style={styles.stageText}>Seeding</span></div>
              <div style={styles.stageItem}>🌿<br/><span style={styles.stageText}>Vegetative</span></div>
              <div style={{ ...styles.stageItem, ...styles.activeStage }}>🌼<br/><span style={styles.stageText}>Flowering</span></div>
              <div style={styles.stageItem}>🍅<br/><span style={styles.stageText}>Fruit</span></div>
              <div style={styles.stageItem}>🧺<br/><span style={styles.stageText}>Harvest</span></div>
            </div>
            <div style={styles.progressBarBg}>
              <div style={styles.progressBarFill}></div>
            </div>
            <p style={styles.progressText}>Current Stage: Flowering - 65%</p>
          </div>

          {/* Status Grid Cards */}
          <div style={styles.infoGrid}>
            
            {/* Irrigation */}
            <div style={styles.infoBox}>
              <h4 style={styles.infoBoxTitle}>💧 Irrigation Status</h4>
              <p style={styles.infoBoxSub}>Last Watered: 2026-08-08</p>
              <p style={styles.infoBoxSub}>Frequency: Every 2 days</p>
            </div>

            {/* Nutrition */}
            <div style={styles.infoBox}>
              <h4 style={styles.infoBoxTitle}>🌱 Nutrition Management</h4>
              <p style={styles.infoBoxSub}>Fertilizer: NPK 12:12:17</p>
              <p style={styles.infoBoxSub}>Next Due: In 3 days</p>
            </div>

            {/* Health Monitor */}
            <div style={styles.infoBox}>
              <h4 style={styles.infoBoxTitle}>🍃 Plant Health Monitor</h4>
              <p style={styles.infoBoxSub}>Health Status: Good</p>
              <p style={styles.infoBoxSub}>Pest Risk: Low</p>
            </div>

            {/* Harvest Estimation */}
            <div style={styles.infoBox}>
              <h4 style={styles.infoBoxTitle}>🧺 Harvest Estimation</h4>
              <p style={styles.infoBoxSub}>Expected: 2026-10-05</p>
              <p style={styles.infoBoxSub}>Est. Yield: 900 - 1000 kg</p>
            </div>

          </div>

          {/* Add New Crop Button */}
          <button style={styles.addCropBtn}>+ Add New Crop</button>

        </div>

        {/* Home Indicator */}
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
  headerBar: {
    width: '100%',
    backgroundColor: '#2e7d32',
    borderRadius: '16px',
    padding: '10px 16px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '6px',
    boxSizing: 'border-box',
  },
  backBtn: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginRight: '12px',
  },
  headerTitle: {
    margin: 0,
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  contentArea: {
    width: '100%',
    flex: 1,
    overflowY: 'auto',
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    paddingRight: '2px',
  },
  cropHeaderCard: {
    backgroundColor: '#f0fdf4',
    border: '1px solid #bbf7d0',
    borderRadius: '16px',
    padding: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  tomatoCircle: {
    fontSize: '40px',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
  },
  cropInfo: {
    flex: 1,
  },
  cropTitleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  cropName: {
    margin: 0,
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#166534',
  },
  checkMark: {
    color: '#22c55e',
    fontWeight: 'bold',
    fontSize: '12px',
  },
  cropDetailsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4px',
    fontSize: '10px',
    color: '#374151',
    marginTop: '6px',
  },
  sectionCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '16px',
    padding: '12px',
  },
  sectionTitle: {
    margin: '0 0 8px 0',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#1f2937',
  },
  stageTracker: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginBottom: '8px',
  },
  stageItem: {
    fontSize: '16px',
    opacity: 0.5,
  },
  activeStage: {
    opacity: 1,
    transform: 'scale(1.15)',
  },
  stageText: {
    fontSize: '8px',
    color: '#374151',
  },
  progressBarBg: {
    width: '100%',
    height: '6px',
    backgroundColor: '#e5e7eb',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  progressBarFill: {
    width: '65%',
    height: '100%',
    backgroundColor: '#22c55e',
  },
  progressText: {
    margin: '6px 0 0 0',
    fontSize: '10px',
    color: '#15803d',
    fontWeight: '600',
    textAlign: 'center',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px',
  },
  infoBox: {
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '8px',
  },
  infoBoxTitle: {
    margin: '0 0 4px 0',
    fontSize: '10px',
    fontWeight: 'bold',
    color: '#1e293b',
  },
  infoBoxSub: {
    margin: 0,
    fontSize: '9px',
    color: '#64748b',
    lineHeight: '1.3',
  },
  addCropBtn: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#2e7d32',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '13px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '4px',
  },
  homeIndicator: {
    width: '120px',
    height: '4px',
    backgroundColor: '#000',
    borderRadius: '2px',
    marginTop: '4px',
  },
};

export default MyCrops;