import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GetStarted from './GetStarted';
import Login from './Login';
import Home from './Home';
import WeatherUpdates from './WeatherUpdates';
import MyCrops from './MyCrops';
import DiseaseDetection from './DiseaseDetection';
import CropMonitoring from './CropMonitoring';
import FarmingReminder from './FarmingReminder';
import MarketPrices from './MarketPrices';
import Profile from './Profile';
import Language from './Language';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/weather" element={<WeatherUpdates />} />
      <Route path="/my-crops" element={<MyCrops />} />
      <Route path="/disease-detection" element={<DiseaseDetection />} />
      <Route path="/crop-monitoring" element={<CropMonitoring />} />
      <Route path="/farming-reminder" element={<FarmingReminder />} />
      <Route path="/market-prices" element={<MarketPrices />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/language" element={<Language />} />
    </Routes>
  );
}

export default App;