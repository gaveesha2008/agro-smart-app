import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function WeatherUpdates() {
  const navigate = useNavigate();
  const [city, setCity] = useState("Colombo");
  const [searchInput, setSearchInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
      } else {
        setError("City not found. Please try again.");
      }
    } catch (err) {
      setError("Failed to fetch weather data.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      setCity(searchInput);
      fetchWeather(searchInput);
      setSearchInput("");
    }
  };

  return (
    <div className="dash-page-wrapper">
      <div className="dash-card-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Top Banner with Back Button */}
        <div className="dash-top-banner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 25px' }}>
          <h1 style={{ margin: 0, fontSize: '22px' }}>AgroSmart Weather</h1>
          <button 
            onClick={() => navigate('/')} 
            style={{
              background: '#ffffff',
              color: '#2e7d32',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Back to Dashboard
          </button>
        </div>

        {/* Search Bar Section */}
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
          <input 
            type="text" 
            placeholder="Search city (e.g., Colombo, Kandy)..." 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            style={{
              flex: 1,
              padding: '12px 20px',
              borderRadius: '12px',
              border: '1px solid #ccc',
              fontSize: '15px',
              outline: 'none',
              backgroundColor: '#f9f9f9'
            }}
          />
          <button 
            type="submit"
            style={{
              padding: '12px 25px',
              background: '#2e7d32',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Search
          </button>
        </form>

        {error && <p style={{ color: 'red', textAlign: 'center', fontWeight: '500' }}>{error}</p>}

        {loading ? (
          <p style={{ textAlign: 'center', padding: '40px', color: '#555' }}>Loading weather details...</p>
        ) : weatherData && (
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px' }}>
            
            {/* Main Weather Display Card */}
            <div style={{
              background: '#ffffff',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #eaeaea'
            }}>
              <div>
                <h3 style={{ color: '#666', fontSize: '16px', margin: '0 0 10px 0' }}>Current Weather</h3>
                <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#1a1a1a' }}>
                  {Math.round(weatherData.main.temp)}°C
                </div>
                <p style={{ fontSize: '18px', fontWeight: '600', color: '#2e7d32', margin: '5px 0 15px 0' }}>
                  {weatherData.weather[0].main}
                </p>
              </div>
              <div style={{ color: '#555', fontSize: '14px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
                📍 {weatherData.name}, {weatherData.sys.country}
              </div>
            </div>

            {/* Sub Info Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              
              <div style={{ background: '#ffffff', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.03)', border: '1px solid #eaeaea' }}>
                <span style={{ fontSize: '13px', color: '#666' }}>FEELS LIKE</span>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a', marginTop: '8px' }}>
                  {Math.round(weatherData.main.feels_like)}°C
                </div>
              </div>

              <div style={{ background: '#ffffff', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.03)', border: '1px solid #eaeaea' }}>
                <span style={{ fontSize: '13px', color: '#666' }}>HUMIDITY</span>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a', marginTop: '8px' }}>
                  {weatherData.main.humidity}%
                </div>
              </div>

              <div style={{ background: '#ffffff', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.03)', border: '1px solid #eaeaea' }}>
                <span style={{ fontSize: '13px', color: '#666' }}>WIND SPEED</span>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a', marginTop: '8px' }}>
                  {weatherData.wind.speed} m/s
                </div>
              </div>

              <div style={{ background: '#ffffff', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.03)', border: '1px solid #eaeaea' }}>
                <span style={{ fontSize: '13px', color: '#666' }}>PRESSURE</span>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a', marginTop: '8px' }}>
                  {weatherData.main.pressure} hPa
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default WeatherUpdates;