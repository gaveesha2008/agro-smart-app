import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { useNavigate } from 'react-router-dom';

export default function WeatherUpdates() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [cityInput, setCityInput] = useState('Colombo');
  const [city, setCity] = useState('Colombo');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        if (!apiKey) {
          console.warn("Weather API key not found in .env file!");
          setLoading(false);
          return;
        }

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (cityInput.trim() !== '') {
      setCity(cityInput);
    }
  };

  const content = {
    English: {
      title: "AgroSmart Weather",
      searchPlaceholder: "Search city...",
      searchBtn: "Search",
      feelsLike: "FEELS LIKE",
      humidity: "HUMIDITY",
      windSpeed: "WIND SPEED",
      pressure: "PRESSURE",
      minMax: "MIN / MAX TEMP",
      visibility: "VISIBILITY",
      back: "Back to Home"
    },
    Sinhala: {
      title: "AgroSmart කාලගුණය",
      searchPlaceholder: "නගරයක් සොයන්න...",
      searchBtn: "සොයන්න",
      feelsLike: "දැනෙන උෂ්ණත්වය",
      humidity: "ආර්দ্রතාවය",
      windSpeed: "සුළගේ වේගය",
      pressure: "පීඩනය",
      minMax: "අවම / උපරිම උෂ්ණත්වය",
      visibility: "පෙනෙන දුර",
      back: "මුල් පිටුවට යන්න"
    },
    Tamil: {
      title: "AgroSmart வானிலை",
      searchPlaceholder: "நகரத்தைத் தேடவும்...",
      searchBtn: "தேடு",
      feelsLike: "உணரப்படும் வெப்பநிலை",
      humidity: "ஈரப்பதம்",
      windSpeed: "காற்றின் வேகம்",
      pressure: "அழுத்தம்",
      minMax: "குறைந்த / அதிக வெப்பநிலை",
      visibility: "பார்வை தூரம்",
      back: "முகப்புக்குச் செல்லவும்"
    }
  };

  const t = content[language] || content['English'];

  return (
    <div style={{ padding: '20px', maxWidth: '650px', margin: '0 auto', fontFamily: 'sans-serif', background: '#f8f9fa', minHeight: '100vh', paddingBottom: '90px', boxSizing: 'border-box' }}>
      
      {/* Top Header */}
      <div style={{ background: '#1db954', color: 'white', padding: '16px', borderRadius: '14px', textAlign: 'center', marginBottom: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>❄️ {t.title}</h2>
      </div>

      {/* Search Box */}
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text" 
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          placeholder={t.searchPlaceholder}
          style={{ flex: 1, padding: '12px 16px', borderRadius: '12px', border: '1px solid #ced4da', fontSize: '14px', outline: 'none', background: '#fff' }}
        />
        <button 
          type="submit"
          style={{ padding: '12px 20px', background: '#1db954', color: '#fff', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: '600', fontSize: '14px' }}
        >
          {t.searchBtn}
        </button>
      </form>

      {loading ? (
        <p style={{ textAlign: 'center', color: '#555' }}>Loading weather data...</p>
      ) : weather && weather.main ? (
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '15px', marginBottom: '20px' }}>
          
          {/* Left Large Card */}
          <div style={{ background: '#e3f2fd', padding: '24px 16px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', border: '1px solid #bbdefb', boxShadow: '0 2px 5px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '50px', marginBottom: '10px' }}>🌧️</div>
            <div>
              <div style={{ fontSize: '42px', fontWeight: 'bold', color: '#111', margin: '5px 0' }}>
                {Math.round(weather.main.temp)}°C
              </div>
              <div style={{ fontSize: '15px', fontWeight: '600', color: '#333', textTransform: 'capitalize', marginBottom: '12px' }}>
                {weather.weather[0].description}
              </div>
            </div>
            <div style={{ fontSize: '13px', color: '#555', display: 'flex', alignItems: 'center', gap: '4px' }}>
              📍 {weather.name}, {weather.sys?.country}
            </div>
          </div>

          {/* Right Grid for 6 Statistics Boxes */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            
            <div style={{ background: '#fff', padding: '14px', borderRadius: '12px', border: '1px solid #e0e0e0', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '10px', color: '#666', fontWeight: 'bold', marginBottom: '6px' }}>{t.feelsLike}</div>
              <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#222' }}>{Math.round(weather.main.feels_like)}°C</div>
            </div>

            <div style={{ background: '#fff', padding: '14px', borderRadius: '12px', border: '1px solid #e0e0e0', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '10px', color: '#666', fontWeight: 'bold', marginBottom: '6px' }}>{t.humidity}</div>
              <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#222' }}>{weather.main.humidity}%</div>
            </div>

            <div style={{ background: '#fff', padding: '14px', borderRadius: '12px', border: '1px solid #e0e0e0', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '10px', color: '#666', fontWeight: 'bold', marginBottom: '6px' }}>{t.windSpeed}</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#222' }}>{weather.wind.speed} m/s</div>
            </div>

            <div style={{ background: '#fff', padding: '14px', borderRadius: '12px', border: '1px solid #e0e0e0', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '10px', color: '#666', fontWeight: 'bold', marginBottom: '6px' }}>{t.pressure}</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#222' }}>{weather.main.pressure} hPa</div>
            </div>

            <div style={{ background: '#fff', padding: '14px', borderRadius: '12px', border: '1px solid #e0e0e0', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '10px', color: '#666', fontWeight: 'bold', marginBottom: '6px' }}>{t.minMax}</div>
              <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#222' }}>{Math.round(weather.main.temp_min)}° / {Math.round(weather.main.temp_max)}°</div>
            </div>

            <div style={{ background: '#fff', padding: '14px', borderRadius: '12px', border: '1px solid #e0e0e0', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '10px', color: '#666', fontWeight: 'bold', marginBottom: '6px' }}>{t.visibility}</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#222' }}>{weather.visibility ? (weather.visibility / 1000).toFixed(1) : '10'} km</div>
            </div>

          </div>

        </div>
      ) : (
        <p style={{ textAlign: 'center', color: 'red', fontSize: '13px' }}>නගරයේ නම වැරදි වන්නට පුළුවන. නැතහොත් API Key එක පරීක්ෂා කරන්න.</p>
      )}

      {/* Back Button */}
      <button 
        onClick={() => navigate('/home')}
        style={{ width: '100%', padding: '12px', background: '#2c3e50', color: '#fff', border: 'none', borderRadius: '12px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}
      >
        {t.back}
      </button>

    </div>
  );
}