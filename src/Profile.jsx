import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { auth } from './firebase'; // 1. firebase.js එකෙන් auth ඉම්පෝර්ට් කරන්න
import { signOut } from 'firebase/auth'; // 2. firebase/auth එකෙන් signOut ඉම්පෝර්ට් කරන්න

// භාෂාවන්ට අදාළ වචන ලැයිස්තුව (Dictionary)
const t = {
  English: {
    profile: "Profile",
    editProfile: "Edit Profile",
    language: "Language",
    notifications: "Notification Setting",
    about: "About Agrosmart",
    logout: "Logout",
    save: "Save"
  },
  Sinhala: {
    profile: "පැතිකඩ",
    editProfile: "පැතිකඩ සංස්කරණය කරන්න",
    language: "භාෂාව",
    notifications: "දැනුම්දීම් සැකසීම්",
    about: "Agrosmart පිළිබඳව",
    logout: "පිටවීම",
    save: "සුරකින්න"
  },
  Tamil: {
    profile: "சுயவிவரம்",
    editProfile: "சுயவிவரத்தைத் திருத்து",
    language: "மொழி",
    notifications: "அறிவிப்பு அமைப்புகள்",
    about: "Agrosmart பற்றி",
    logout: "வெளியேறு",
    save: "சேமி"
  }
};

export default function Profile() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  // දැනට තෝරාගත් භාෂාවට අදාළ වචන ලබා ගැනීම
  const currentText = t[language] || t.English;

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(localStorage.getItem('userName') || 'gaveesha');
  const [phone, setPhone] = useState(localStorage.getItem('userPhone') || '074 123 0247');
  const [location, setLocation] = useState(localStorage.getItem('userLocation') || 'Galle');
  const [email, setEmail] = useState(localStorage.getItem('userEmail') || 'guest@agrosmart.com');

  const handleSave = () => {
    localStorage.setItem('userName', name);
    localStorage.setItem('userPhone', phone);
    localStorage.setItem('userLocation', location);
    localStorage.setItem('userEmail', email);
    setIsEditing(false);
  };

  // 3. Firebase හරහා Logout කිරීම සඳහා අලුතින් එකතු කළ කොටස
  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase එකෙන් යූසර්ව අයින් කරයි
      navigate('/login');  // ඊටපස්සේ කෙළින්ම Login පේජ් එකට යවයි
    } catch (error) {
      console.error('Logout failed: ', error);
    }
  };

  return (
    <div style={{
      padding: '24px 20px',
      flex: 1,
      boxSizing: 'border-box',
      width: '100%',
      backgroundColor: '#fdfdfd',
      minHeight: '100vh'
    }}>
      {/* Profile Title */}
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        fontWeight: 'bold',
        color: '#111',
        marginBottom: '24px',
        marginTop: '10px',
        letterSpacing: '0.5px'
      }}>
        {currentText.profile}
      </h2>

      {/* Profile Card Container */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '18px',
        padding: '24px 28px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
        border: '1px solid #eaeaea',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        
        {/* User Info Section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '20px',
          borderBottom: '1px solid #eaeaea',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div style={{
              width: '65px',
              height: '65px',
              borderRadius: '50%',
              backgroundColor: '#e8f5e9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2e7d32',
              fontSize: '32px',
              border: '2px solid #2e7d32',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}>
              👤
            </div>

            {isEditing ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: '6px', borderRadius: '6px', border: '1px solid #ccc' }} />
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ padding: '6px', borderRadius: '6px', border: '1px solid #ccc' }} />
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} style={{ padding: '6px', borderRadius: '6px', border: '1px solid #ccc' }} />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '6px', borderRadius: '6px', border: '1px solid #ccc' }} />
                <button onClick={handleSave} style={{ backgroundColor: '#2e7d32', color: 'white', border: 'none', padding: '8px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>{currentText.save}</button>
              </div>
            ) : (
              <div>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#222' }}>{name}</h3>
                <p style={{ margin: '4px 0 2px 0', fontSize: '14px', color: '#555' }}>{phone}</p>
                <p style={{ margin: '0 0 2px 0', fontSize: '13px', color: '#777' }}>{email}</p>
                <p style={{ margin: 0, fontSize: '14px', color: '#2e7d32', fontWeight: 'bold' }}>📍 {location}</p>
              </div>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          {/* Edit Profile */}
          <div 
            onClick={() => setIsEditing(true)}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
          >
            <span style={{ fontSize: '15px', color: '#333', fontWeight: '500' }}>{currentText.editProfile}</span>
            <span style={{ fontSize: '18px', color: '#888' }}>&gt;</span>
          </div>

          <div style={{ height: '1px', backgroundColor: '#f0f0f0' }}></div>

          {/* Language Selection Route */}
          <div 
            onClick={() => navigate('/language')}
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              cursor: 'pointer',
              padding: '5px 0'
            }}
          >
            <span style={{ fontSize: '15px', color: '#333', fontWeight: '500' }}>{currentText.language}</span>
            <span style={{ fontSize: '15px', color: '#888', fontWeight: '500' }}>{language} &gt;</span>
          </div>

          <div style={{ height: '1px', backgroundColor: '#f0f0f0' }}></div>

          {/* About */}
          <div 
            onClick={() => navigate('/about')}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
          >
            <span style={{ fontSize: '15px', color: '#333', fontWeight: '500' }}>{currentText.about}</span>
            <span style={{ fontSize: '18px', color: '#888' }}>&gt;</span>
          </div>

          <div style={{ height: '1px', backgroundColor: '#f0f0f0' }}></div>

          {/* Logout - මෙතන handleLogout එක සම්බන්ධ කරන ලදී */}
          <div 
            onClick={handleLogout}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
          >
            <span style={{ fontSize: '15px', color: '#d32f2f', fontWeight: 'bold' }}>{currentText.logout}</span>
          </div>

        </div>

      </div>
    </div>
  );
}