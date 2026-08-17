import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';
import './App.css';

function MarketPrices() {
  const navigate = useNavigate();

  // Deterministic daily pricing generator to simulate real daily market feed
  const getDailyPrice = (basePrice, cropName) => {
    const today = new Date();
    const dateStr = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    
    // Hash function to get unique daily seed per crop
    let hash = 0;
    const key = dateStr + cropName;
    for (let i = 0; i < key.length; i++) {
      hash = key.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Generate deterministic fluctuation between -8% and +8%
    const changePercent = ((hash % 160) - 80) / 10; // -8.0% to +7.9%
    const changeVal = parseFloat((basePrice * (changePercent / 100)).toFixed(2));
    const finalPrice = parseFloat((basePrice + changeVal).toFixed(2));
    const type = changePercent >= 0 ? "up" : "down";
    
    return {
      price: `Rs. ${finalPrice.toFixed(2)}/kg`,
      change: `${Math.abs(changeVal).toFixed(2)}`,
      type
    };
  };

  const baseCrops = [
    { crop: "Paddy", basePrice: 120, icon: "🌾" },
    { crop: "Red Onion", basePrice: 250, icon: "🧅" },
    { crop: "Tomato", basePrice: 180, icon: "🍅" },
    { crop: "Carrot", basePrice: 150, icon: "🥕" },
    { crop: "Cabbage", basePrice: 200, icon: "🥬" },
  ];

  const marketData = baseCrops.map(item => {
    const daily = getDailyPrice(item.basePrice, item.crop);
    return {
      ...item,
      price: daily.price,
      change: daily.change,
      type: daily.type
    };
  });

  const currentDate = new Date().toISOString().split('T')[0];

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
          <span className="market-location">📍 Galle Economic Center</span>
          <span className="market-date">{currentDate}</span>
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
                <span 
                  className={`market-crop-change ${item.type}`} 
                  style={{ color: item.type === 'up' ? '#2e7d32' : '#d32f2f', fontWeight: 'bold' }}
                >
                  {item.type === 'up' ? '▲' : '▼'} {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Notice Box */}
        <div className="market-notice-box">
          <p>Prices fluctuate daily. Checked against Galle wholesale database.</p>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}

export default MarketPrices;