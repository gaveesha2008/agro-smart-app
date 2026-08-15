import React from 'react';
import './App.css';

// Assets Folder එකෙන් Images සියල්ල Import කිරීම
import leafLogo from './assets/leaf-logo.png';
import weatherCard from './assets/weather-card.png';
import myCropsCard from './assets/my-crops-card.png';
import diseaseCard from './assets/disease-card.png';
import monitoringCard from './assets/monitoring-card.png';
import reminderCard from './assets/reminder-card.png';
import marketCard from './assets/market-card.png';
import alertCloud from './assets/alert-cloud.png';

function Home() {
  return (
    <div className="dash-page-wrapper">
      <div className="dash-card-container">
        
        {/* Top Green Banner */}
        <div className="dash-top-banner">
          <h1>AgroSmart</h1>
        </div>

        {/* Greeting Section */}
        <div className="dash-greeting-section">
          <div className="dash-greeting-text">
            <h2>Hello, Farmer !</h2>
            <p>Good morning ! Let's make<br />farming smarter today.</p>
          </div>
          <div className="dash-logo-box">
            <img src={leafLogo} alt="Leaf Logo" className="dash-leaf-img" />
          </div>
        </div>

        {/* 2x3 Grid Cards Section */}
        <div className="dash-grid-container">
          
          {/* Weather Updates */}
          <div className="dash-grid-card card-weather">
            <div className="dash-card-icon-area">
              <img src={weatherCard} alt="Weather Updates" className="dash-card-img" />
            </div>
            <span className="dash-card-title">Weather Updates</span>
          </div>

          {/* My Crops */}
          <div className="dash-grid-card card-crops">
            <div className="dash-card-icon-area">
              <img src={myCropsCard} alt="My Crops" className="dash-card-img" />
            </div>
            <span className="dash-card-title">My Crops</span>
          </div>

          {/* Disease Detection */}
          <div className="dash-grid-card card-disease">
            <div className="dash-card-icon-area">
              <img src={diseaseCard} alt="Disease Detection" className="dash-card-img" />
            </div>
            <span className="dash-card-title">Disease Detection</span>
          </div>

          {/* Crop Monitoring Tools */}
          <div className="dash-grid-card card-monitoring">
            <div className="dash-card-icon-area">
              <img src={monitoringCard} alt="Crop Monitoring Tools" className="dash-card-img" />
            </div>
            <span className="dash-card-title">Crop Monitoring<br />Tools</span>
          </div>

          {/* Farming Reminder */}
          <div className="dash-grid-card card-reminder">
            <div className="dash-card-icon-area">
              <img src={reminderCard} alt="Farming Reminder" className="dash-card-img" />
            </div>
            <span className="dash-card-title">Farming Reminder</span>
          </div>

          {/* Market Price */}
          <div className="dash-grid-card card-market">
            <div className="dash-card-icon-area">
              <img src={marketCard} alt="Market Price" className="dash-card-img" />
            </div>
            <span className="dash-card-title">Market Price</span>
          </div>

        </div>

        {/* Bottom Alert Box */}
        <div className="dash-alert-box">
          <img src={alertCloud} alt="Alert Cloud" className="dash-alert-img" />
          <p className="dash-alert-text">
            <strong>Alert:</strong> Heavy rain expected tomorrow.<br />Protect your crops.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;