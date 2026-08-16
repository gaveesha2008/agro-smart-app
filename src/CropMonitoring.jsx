import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function CropMonitoring() {
  const navigate = useNavigate();

  const tools = [
    { title: "Leaf Scanner", desc: "Scan leaves to detect diseases and get recommendations.", icon: "🍃" },
    { title: "Irrigation Monitor", desc: "Track soil moisture and get smart watering suggestions.", icon: "💧" },
    { title: "Fertilizer Adviser", desc: "Get fertilizer recommendations based on crop needs.", icon: "🧴" },
    { title: "Pest Detector", desc: "Identify pests and get effective control solutions.", icon: "🐞" },
    { title: "Growth Tracker", desc: "Track crop growth stages and overall progress.", icon: "📈" },
    { title: "Task Manager", desc: "Manage farming tasks and get timely reminders.", icon: "📋" },
    { title: "Field Photo Log", desc: "Capture field photos and keep records of your observations.", icon: "📷" },
    { title: "Notes & Observations", desc: "Write notes and observations about your crops and fields.", icon: "📝" },
  ];

  return (
    <div className="crop-monitoring-page">
      <div className="crop-monitoring-container">
        {/* Top Banner */}
        <div className="monitoring-top-banner">
          <button className="monitoring-back-btn" onClick={() => navigate(-1)}>←</button>
          <h1>Crop Monitoring Tools</h1>
        </div>

        {/* Hero Card */}
        <div className="monitoring-hero-card">
          <div className="hero-text">
            <h2>Crop Monitoring Tools</h2>
            <p>Use smart tools to monitor your crops, track health, and take the right actions at the right time.</p>
          </div>
          <div className="hero-icon">🌱</div>
        </div>

        {/* Tools Grid */}
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <div className="tool-icon">{tool.icon}</div>
              <h3>{tool.title}</h3>
              <p>{tool.desc}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="monitoring-footer">
          <p><strong>Better crops, better future</strong><br/>Monitor, protect, and grow – healthy crops, sustainable future.</p>
        </div>
      </div>
    </div>
  );
}

export default CropMonitoring;