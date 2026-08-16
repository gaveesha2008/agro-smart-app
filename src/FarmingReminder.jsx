import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import tomatoImg from './assets/tomato.jpg';

function FarmingReminder() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  const reminders = [
    { title: "Watering", date: "2026-07-30", status: "Completed" },
    { title: "Fertilizer", date: "2026-08-02", status: "Upcoming" },
    { title: "Pesticide", date: "2026-08-05", status: "Upcoming" },
    { title: "Harvest", date: "2026-10-05", status: "Upcoming" },
  ];

  const filteredReminders = reminders.filter(item => {
    if (activeTab === 'All') return true;
    return item.status === activeTab;
  });

  return (
    <div className="reminder-page">
      <div className="reminder-container">
        
        {/* Top Banner */}
        <div className="reminder-top-banner">
          <button className="reminder-back-btn" onClick={() => navigate(-1)}>←</button>
          <h1>Farming Reminder</h1>
        </div>

        {/* Tomato Info Card */}
        <div className="reminder-crop-card">
          <div className="reminder-crop-info">
            <img src={tomatoImg} alt="Tomato" className="reminder-crop-img" />
            <div>
              <h2>Tomato</h2>
              <p>📅 Planted on: 2026/07/28</p>
              <p>🌾 Field: Field 1</p>
            </div>
          </div>
          <span className="reminder-arrow">›</span>
        </div>

        {/* Tabs (All, Upcoming, Completed) */}
        <div className="reminder-tabs">
          {['All', 'Upcoming', 'Completed'].map(tab => (
            <button
              key={tab}
              className={`reminder-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Reminders List */}
        <div className="reminder-list">
          {filteredReminders.map((item, index) => (
            <div key={index} className="reminder-item-card">
              <div>
                <h3>{item.title}</h3>
                <p>{item.date}</p>
              </div>
              <div className="reminder-right-area">
                <span className={`status-badge ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
                <span className="reminder-dots">⋮</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default FarmingReminder;