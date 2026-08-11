import React from 'react';

const WeatherUpdates = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <span style={styles.backArrow}>←</span>
        <h2 style={styles.headerTitle}>Weather Updates</h2>
      </div>

      <div style={styles.content}>
        {/* Main Weather Card */}
        <div style={styles.mainCard}>
          <div style={styles.locationRow}>
            <span style={styles.locationIcon}>📍</span>
            <span style={styles.locationName}>Galle</span>
          </div>

          <div style={styles.tempRow}>
            <div>
              <h1 style={styles.temperature}>29° C</h1>
              <p style={styles.weatherCondition}>Partly Rainy</p>
            </div>

            {/* පින්තූර නොමැතිව සාදාගත් Sun + Cloud Combo එක */}
            <div style={styles.weatherIllustration}>
              <div style={styles.sunCloudWrapper}>
                <span style={styles.sunIcon}>☀️</span>
                <span style={styles.cloudIcon}>🌧️</span>
              </div>
            </div>
          </div>

          {/* Weather Stats */}
          <div style={styles.statsContainer}>
            <div style={styles.statBox}>
              <span style={styles.statLabel}>Humidity</span>
              <span style={styles.statValue}>78%</span>
            </div>
            <div style={styles.divider} />
            <div style={styles.statBox}>
              <span style={styles.statLabel}>Rain Probability</span>
              <span style={styles.statValue}>80%</span>
            </div>
            <div style={styles.divider} />
            <div style={styles.statBox}>
              <span style={styles.statLabel}>Wind Speed</span>
              <span style={styles.statValue}>12km/h</span>
            </div>
          </div>
        </div>

        {/* 5 Day Forecast */}
        <div style={styles.forecastSection}>
          <h3 style={styles.sectionTitle}>5 Day Forecast</h3>
          
          <div style={styles.forecastGrid}>
            <div style={styles.forecastDay}>
              <span style={styles.dayText}>Today</span>
              <span style={styles.forecastIcon}>⛅</span>
              <span style={styles.highTemp}>29°</span>
              <span style={styles.lowTemp}>22°</span>
            </div>

            <div style={styles.forecastDay}>
              <span style={styles.dayText}>Wed</span>
              <span style={styles.forecastIcon}>☁️</span>
              <span style={styles.highTemp}>28°</span>
              <span style={styles.lowTemp}>21°</span>
            </div>

            <div style={styles.forecastDay}>
              <span style={styles.dayText}>Thu</span>
              <span style={styles.forecastIcon}>🌧️</span>
              <span style={styles.highTemp}>27°</span>
              <span style={styles.lowTemp}>21°</span>
            </div>

            <div style={styles.forecastDay}>
              <span style={styles.dayText}>Fri</span>
              <span style={styles.forecastIcon}>⛅</span>
              <span style={styles.highTemp}>29°</span>
              <span style={styles.lowTemp}>22°</span>
            </div>

            <div style={styles.forecastDay}>
              <span style={styles.dayText}>Sat</span>
              <span style={styles.forecastIcon}>☀️</span>
              <span style={styles.highTemp}>30°</span>
              <span style={styles.lowTemp}>23°</span>
            </div>
          </div>
        </div>

        {/* Alert Banner */}
        <div style={styles.alertCard}>
          <div style={styles.alertIcon}>⚠️</div>
          <div>
            <h4 style={styles.alertTitle}>Alert</h4>
            <p style={styles.alertMessage}>
              Tomorrow heavy rain expected. Protect your crops.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: '#f8faf9',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
  },
  header: {
    backgroundColor: '#2e7d32',
    color: '#fff',
    padding: '15px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  backArrow: {
    fontSize: '20px',
    cursor: 'pointer',
  },
  headerTitle: {
    margin: 0,
    fontSize: '20px',
  },
  content: {
    padding: '20px',
  },
  mainCard: {
    backgroundColor: '#81d4fa',
    borderRadius: '16px',
    padding: '20px',
    color: '#1a237e',
  },
  locationRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  tempRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '15px 0',
  },
  temperature: {
    fontSize: '36px',
    margin: 0,
  },
  weatherCondition: {
    margin: '5px 0 0 0',
    fontSize: '16px',
  },
  weatherIllustration: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '10px',
  },
  sunCloudWrapper: {
    position: 'relative',
    width: '70px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sunIcon: {
    fontSize: '40px',
    position: 'absolute',
    top: '0',
    right: '5px',
    filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.15))',
  },
  cloudIcon: {
    fontSize: '42px',
    position: 'absolute',
    bottom: '0',
    left: '0',
    filter: 'drop-shadow(0px 3px 5px rgba(0,0,0,0.2))',
  },
  statsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '12px',
    padding: '12px 10px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statLabel: {
    fontSize: '11px',
    color: '#333',
    textAlign: 'center',
  },
  statValue: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#000',
    marginTop: '4px',
  },
  divider: {
    width: '1px',
    height: '25px',
    backgroundColor: '#ccc',
  },
  forecastSection: {
    marginTop: '25px',
  },
  sectionTitle: {
    fontSize: '16px',
    marginBottom: '15px',
    color: '#333',
  },
  forecastGrid: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  forecastDay: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
  },
  dayText: {
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#444',
  },
  forecastIcon: {
    fontSize: '22px',
  },
  highTemp: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
  lowTemp: {
    fontSize: '12px',
    color: '#888',
  },
  alertCard: {
    marginTop: '30px',
    backgroundColor: '#fff3cd',
    border: '1px solid #ffeeba',
    borderRadius: '12px',
    padding: '15px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
  },
  alertIcon: {
    fontSize: '22px',
  },
  alertTitle: {
    margin: 0,
    fontSize: '15px',
    color: '#856404',
  },
  alertMessage: {
    margin: '4px 0 0 0',
    fontSize: '12px',
    color: '#856404',
  },
};

export default WeatherUpdates;