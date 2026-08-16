import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';
import './App.css';

import leafLogo from './assets/leaf-logo.png';
import weatherCard from './assets/weather-card.png';
import myCropsCard from './assets/my-crops-card.png';
import diseaseCard from './assets/disease-card.png';
import monitoringCard from './assets/monitoring-card.png';
import reminderCard from './assets/reminder-card.png';
import marketCard from './assets/market-card.png';
import alertCloud from './assets/alert-cloud.png';

function Home() {
  const navigate = useNavigate();
  const [weather, setWeather] = useState({ temp: null, desc: 'Loading...' });

  useEffect(() => {
    const fetchWeather = async () => {
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
      const CITY = "Colombo";
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

      try {
        const response = await fetch(URL);
        const data = await response.json();
        if (response.ok) {
          setWeather({
            temp: Math.round(data.main.temp),
            desc: data.weather[0].main
          });
        } else {
          setWeather({ temp: '-', desc: 'Error' });
        }
      } catch (error) {
        setWeather({ temp: '-', desc: 'Failed' });
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="dash-page-wrapper">
      <div className="dash-card-container">
        
        <div className="dash-top-banner">
          <h1>AgroSmart</h1>
        </div>

        <div className="dash-greeting-section">
          <div className="dash-greeting-text">
            <h2>Hello, Farmer !</h2>
            <p>Good morning ! Let's make<br />farming smarter today.</p>
          </div>
          <div className="dash-logo-box">
            <img src={leafLogo} alt="Leaf Logo" className="dash-leaf-img" />
          </div>
        </div>

        <div className="dash-grid-container">
          
          {/* Weather Updates Card */}
          <div 
            className="dash-grid-card card-weather" 
            onClick={() => navigate('/weather')}
          >
            <div className="dash-card-icon-area">
              <img src={weatherCard} alt="Weather" className="dash-card-img" />
            </div>
            <span className="dash-card-title">Weather Updates</span>
          </div>

          {/* My Crops Card */}
          <div 
            className="dash-grid-card card-crops"
            onClick={() => navigate('/my-crops')}
          >
            <div className="dash-card-icon-area">
              <img src={myCropsCard} alt="Crops" className="dash-card-img" />
            </div>
            <span className="dash-card-title">My Crops</span>
          </div>

          {/* Disease Detection Card */}
          <div 
            className="dash-grid-card card-disease"
            onClick={() => navigate('/disease-detection')}
          >
            <div className="dash-card-icon-area">
              <img src={diseaseCard} alt="Disease" className="dash-card-img" />
            </div>
            <span className="dash-card-title">Disease Detection</span>
          </div>

          {/* Crop Monitoring Card */}
          <div 
            className="dash-grid-card card-monitoring"
            onClick={() => navigate('/crop-monitoring')}
          >
            <div className="dash-card-icon-area">
              <img src={monitoringCard} alt="Monitoring" className="dash-card-img" />
            </div>
            <span className="dash-card-title">Crop Monitoring</span>
          </div>

          {/* Farming Reminder Card */}
          <div 
            className="dash-grid-card card-reminder"
            onClick={() => navigate('/farming-reminder')}
          >
            <div className="dash-card-icon-area">
              <img src={reminderCard} alt="Reminder" className="dash-card-img" />
            </div>
            <span className="dash-card-title">Farming Reminder</span>
          </div>

          {/* Market Price Card */}
          <div 
            className="dash-grid-card card-market"
            onClick={() => navigate('/market-prices')}
          >
            <div className="dash-card-icon-area">
              <img src={marketCard} alt="Market" className="dash-card-img" />
            </div>
            <span className="dash-card-title">Market Price</span>
          </div>

        </div>

        <div className="dash-alert-box">
          <img src={alertCloud} alt="Alert" className="dash-alert-img" />
          <p className="dash-alert-text">
            <strong>Alert:</strong> Heavy rain expected tomorrow.<br />Protect your crops.
          </p>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}

export default Home;