import React from 'react';

export default function MobileLayout({ children }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#eef2f3',
      margin: 0,
      padding: '20px 0'
    }}>
      {/* Mobile Screen Container */}
      <div style={{
        width: '100%',
        maxWidth: '430px',
        height: '850px',
        backgroundColor: '#fdfdfb',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        position: 'relative',
        boxSizing: 'border-box'
      }}>
        {/* Page Content */}
        {children}
      </div>
    </div>
  );
}