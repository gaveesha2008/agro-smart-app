import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from './MobileLayout';

export default function Profile() {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      {/* 
        paddingBottom එක 130px දක්වා වැඩි කර ඇති බැවින්, 
        දැන් පහළම ඇති Logout සහ About Agrosmart කොටස් 
        කිසිදු බාධාවකින් තොරව පහළට ස්ක්‍රෝල් කර සම්පූර්ණයෙන් බලාගත හැක.
      */}
      <div style={{ 
        padding: '24px 20px', 
        flex: 1, 
        boxSizing: 'border-box', 
        width: '100%', 
        maxWidth: '750px', 
        margin: '0 auto', 
        paddingBottom: '130px', 
        backgroundColor: '#fdfdfb' 
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
          Profile
        </h2>

        {/* Profile Card Container */}
        <div style={{ 
          backgroundColor: '#ffffff', 
          borderRadius: '18px', 
          padding: '24px 28px', 
          boxShadow: '0 4px 15px rgba(0,0,0,0.06)', 
          border: '1px solid #eaeaea' 
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
              <div>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#222' }}>Kamal Perera</h3>
                <p style={{ margin: '4px 0', fontSize: '14px', color: '#555' }}>074 123 0247</p>
                <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>Galle</p>
              </div>
            </div>
            <span style={{ fontSize: '20px', color: '#666', fontWeight: 'bold', cursor: 'pointer' }}>&gt;</span>
          </div>

          {/* Menu Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            
            <div 
              onClick={() => navigate('/edit-profile')} 
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '6px 0' }}
            >
              <span style={{ fontSize: '15px', color: '#333', fontWeight: '500' }}>Edit Profile</span>
              <span style={{ fontSize: '18px', color: '#888' }}>&gt;</span>
            </div>

            <div style={{ height: '1px', backgroundColor: '#f0f0f0' }}></div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0' }}>
              <span style={{ fontSize: '15px', color: '#333', fontWeight: '500' }}>Language</span>
              <span style={{ fontSize: '15px', color: '#555', fontWeight: '500' }}>English &gt;</span>
            </div>

            <div style={{ height: '1px', backgroundColor: '#f0f0f0' }}></div>

            <div 
              onClick={() => navigate('/notifications')} 
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '6px 0' }}
            >
              <span style={{ fontSize: '15px', color: '#333', fontWeight: '500' }}>Notification Setting</span>
              <span style={{ fontSize: '18px', color: '#888' }}>&gt;</span>
            </div>

            <div style={{ height: '1px', backgroundColor: '#f0f0f0' }}></div>

            <div 
              onClick={() => navigate('/about')} 
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '6px 0' }}
            >
              <span style={{ fontSize: '15px', color: '#333', fontWeight: '500' }}>About Agrosmart</span>
              <span style={{ fontSize: '18px', color: '#888' }}>&gt;</span>
            </div>

            <div style={{ height: '1px', backgroundColor: '#f0f0f0' }}></div>

            <div 
              onClick={() => navigate('/login')} 
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '6px 0', marginTop: '6px' }}
            >
              <span style={{ fontSize: '15px', color: '#d32f2f', fontWeight: 'bold' }}>Logout</span>
            </div>

          </div>

        </div>

      </div>
    </MobileLayout>
  );
}