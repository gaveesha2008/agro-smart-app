import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import BottomNav from './BottomNav';

// සියලුම පිටු import කිරීම
import GetStarted from './GetStarted';
import Signup from './Signup';
import Home from './Home';
import WeatherUpdates from './WeatherUpdates';
import MyCrops from './MyCrops';
import DiseaseDetection from './DiseaseDetection';
import FarmingReminder from './FarmingReminder';
import MarketPrices from './MarketPrices';
import Profile from './Profile';
import Language from './Language';
import Login from './Login';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';
import About from './About';
import ProtectedRoutes from './ProtectedRoutes';


function AppContent() {
  const location = useLocation();
  
  // GetStarted, Signup, and Login යන පිටු වලදී පමණක් BottomNav එක නොපෙන්වීම සඳහා
  const showBottomNav = !['/', '/signup', '/login', '/terms', '/privacy', '/about'].includes(location.pathname);

  return (
    <div className="app-container" style={{ paddingBottom: showBottomNav ? '60px' : '0' }}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<GetStarted />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<About />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/weather" element={<WeatherUpdates />} />
          <Route path="/my-crops" element={<MyCrops />} />
          <Route path="/disease-detection" element={<DiseaseDetection />} />
          <Route path="/farming-reminder" element={<FarmingReminder />} />
          <Route path="/market-prices" element={<MarketPrices />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/language" element={<Language />} />
        </Route>
      </Routes>
      {showBottomNav && <BottomNav />}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}