import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';
import './App.css';

function MarketPrices() {
  const navigate = useNavigate();

  const marketData = [
    { crop: "Paddy", price: "Rs. 120.00/kg", change: "2.00", type: "down", icon: "🌾" },
    { crop: "Red Onion", price: "Rs. 250.00/kg", change: "3.00", type: "down", icon: "🧅" },
    { crop: "Tomato", price: "Rs. 180.00/kg", change: "5.00", type: "down", icon: "🍅" },
    { crop: "Carrot", price: "Rs. 150.00/kg", change: "3.00", type: "down", icon: "🥕" },
    { crop: "Cabbage", price: "Rs. 200.00/kg", change: "1.00", type: "down", icon: "🥬" },
  ];

  return (
    <div className="market-page">
      <div className="market-container">
        
        {/* Top Banner */}
        <div className="market-top-banner">
          <button className="market-back-btn" onClick={() => navigate(-1)}>←</button>
          <h1>Market Prices</h1>
        </div>

        {/* Location and Date Bar */}
        <div className="market-info-bar">
          <span className="market-location">📍 Galle</span>
          <span className="market-date">2026 - 07 - 28</span>
        </div>

        {/* Prices Table / List */}
        <div className="market-table-card">
          <div className="market-table-header">
            <span>Crop</span>
            <span>Today's Price</span>
            <span>Change</span>
          </div>

          <div className="market-table-body">
            {marketData.map((item, index) => (
              <div key={index} className="market-row">
                <span className="market-crop-name">
                  <span className="market-crop-icon">{item.icon}</span> {item.crop}
                </span>
                <span className="market-crop-price">{item.price}</span>
                <span className={`market-crop-change ${item.type}`}>
                  ▾ {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Notice Box */}
        <div className="market-notice-box">
          <p>Prices may vary. Check local market for exact prices.</p>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}

export default MarketPrices;