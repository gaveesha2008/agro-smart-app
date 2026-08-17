import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { useNavigate } from 'react-router-dom';

const defaultReminders = [
  { id: 1, task: "Watering", date: "2026-07-30", status: "completed" },
  { id: 2, task: "Fertilizer Application", date: "2026-08-02", status: "upcoming" },
  { id: 3, task: "Pesticide Spraying", date: "2026-08-05", status: "upcoming" }
];

export default function FarmingReminder() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const [reminders, setReminders] = useState(() => {
    const saved = localStorage.getItem('farmingReminders');
    return saved ? JSON.parse(saved) : defaultReminders;
  });

  const [activeTab, setActiveTab] = useState('all'); // all, upcoming, completed
  const [isAdding, setIsAdding] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    localStorage.setItem('farmingReminders', JSON.stringify(reminders));
  }, [reminders]);

  const toggleStatus = (id) => {
    const updated = reminders.map(item => {
      if (item.id === id) {
        return { ...item, status: item.status === 'completed' ? 'upcoming' : 'completed' };
      }
      return item;
    });
    setReminders(updated);
  };

  const handleAddReminder = (e) => {
    e.preventDefault();
    if (!taskName || !dueDate) return;
    const newReminder = {
      id: Date.now(),
      task: taskName,
      date: dueDate,
      status: 'upcoming'
    };
    setReminders([...reminders, newReminder]);
    setTaskName('');
    setDueDate('');
    setIsAdding(false);
  };

  const deleteReminder = (id) => {
    setReminders(reminders.filter(item => item.id !== id));
  };

  const content = {
    English: {
      title: "Farming Reminders",
      cropName: "Tomato",
      planted: "Planted: 2026-07-28",
      field: "Field: 0.5 Acre",
      all: "All",
      upcoming: "Upcoming",
      completed: "Completed",
      addBtn: "Add Reminder",
      taskLabel: "Task Name",
      dateLabel: "Due Date",
      save: "Save",
      cancel: "Cancel",
      empty: "No reminders found."
    },
    Sinhala: {
      title: "තක්කාලි මතක් කිරීම්",
      cropName: "තක්කාලි",
      planted: "රෝපණය: 2026-07-28",
      field: "වපසරිය: අක්කර 0.5",
      all: "සියල්ල",
      upcoming: "ඉදිරියට ඇති",
      completed: "නිම කරන ලද",
      addBtn: "මතක් කිරීමක් එක් කරන්න",
      taskLabel: "කාර්යයේ නම",
      dateLabel: "නියමිත දිනය",
      save: "සුරකින්න",
      cancel: "අවලංගු කරන්න",
      empty: "මතක් කිරීම් කිසිවක් නැත."
    },
    Tamil: {
      title: "விவசாய நினைவூட்டல்கள்",
      cropName: "தக்காளி",
      planted: "நடப்பட்டது: 2026-07-28",
      field: "புலம்: 0.5 ஏக்கர்",
      all: "அனைத்தும்",
      upcoming: "வரவிருப்பவை",
      completed: "முடிந்தவை",
      addBtn: "நினைவூட்டலைச் சேර්",
      taskLabel: "பணியின் பெயர்",
      dateLabel: "தேதி",
      save: "சேமி",
      cancel: "ரத்து செய்",
      empty: "நினைவூட்டல்கள் எதுவும் இல்லை."
    }
  };

  const t = content[language] || content['English'];

  const filteredReminders = reminders.filter(item => {
    if (activeTab === 'upcoming') return item.status === 'upcoming';
    if (activeTab === 'completed') return item.status === 'completed';
    return true;
  });

  return (
    <div style={{ padding: '20px', minHeight: '100vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
      
      {/* Header */}
      <div style={{ background: '#2e7d32', color: 'white', padding: '15px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', color: 'white', fontSize: '18px', cursor: 'pointer' }}>←</button>
        <h2 style={{ margin: 0 }}>{t.title}</h2>
      </div>

      {/* Info card */}
      <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '10px', border: '1px solid #ddd', marginBottom: '20px' }}>
        <h3 style={{ margin: 0 }}>{t.cropName}</h3>
        <p style={{ fontSize: '13px', color: '#666', margin: '4px 0 0 0' }}>{t.planted} | {t.field}</p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px', fontWeight: 'bold' }}>
        <span 
          onClick={() => setActiveTab('all')} 
          style={{ color: activeTab === 'all' ? '#2e7d32' : '#666', cursor: 'pointer', borderBottom: activeTab === 'all' ? '2px solid #2e7d32' : 'none', paddingBottom: '8px' }}
        >
          {t.all}
        </span>
        <span 
          onClick={() => setActiveTab('upcoming')} 
          style={{ color: activeTab === 'upcoming' ? '#2e7d32' : '#666', cursor: 'pointer', borderBottom: activeTab === 'upcoming' ? '2px solid #2e7d32' : 'none', paddingBottom: '8px' }}
        >
          {t.upcoming}
        </span>
        <span 
          onClick={() => setActiveTab('completed')} 
          style={{ color: activeTab === 'completed' ? '#2e7d32' : '#666', cursor: 'pointer', borderBottom: activeTab === 'completed' ? '2px solid #2e7d32' : 'none', paddingBottom: '8px' }}
        >
          {t.completed}
        </span>
      </div>

      {/* Add Reminder Form */}
      {isAdding ? (
        <form onSubmit={handleAddReminder} style={{ background: '#f9f9f9', padding: '15px', borderRadius: '10px', border: '1px solid #ddd', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h4 style={{ margin: 0 }}>{t.addBtn}</h4>
          
          <label style={{ fontSize: '12px', fontWeight: 'bold' }}>{t.taskLabel}</label>
          <input 
            type="text" 
            value={taskName} 
            onChange={(e) => setTaskName(e.target.value)} 
            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} 
            placeholder="e.g. Fertilizer" 
            required 
          />

          <label style={{ fontSize: '12px', fontWeight: 'bold' }}>{t.dateLabel}</label>
          <input 
            type="date" 
            value={dueDate} 
            onChange={(e) => setDueDate(e.target.value)} 
            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} 
            required 
          />

          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button type="submit" style={{ flex: 1, background: '#2e7d32', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>{t.save}</button>
            <button type="button" onClick={() => setIsAdding(false)} style={{ flex: 1, background: '#fff', color: '#666', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>{t.cancel}</button>
          </div>
        </form>
      ) : (
        <button 
          onClick={() => setIsAdding(true)} 
          style={{ width: '100%', background: '#2e7d32', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '20px' }}
        >
          ➕ {t.addBtn}
        </button>
      )}

      {/* Reminder List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
        {filteredReminders.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888' }}>{t.empty}</p>
        ) : (
          filteredReminders.map(item => (
            <div 
              key={item.id} 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '12px', 
                background: item.status === 'completed' ? '#e8f5e9' : '#fff3e0', 
                border: item.status === 'completed' ? '1px solid #c8e6c9' : '1px solid #ffe0b2', 
                borderRadius: '8px' 
              }}
            >
              <div onClick={() => toggleStatus(item.id)} style={{ cursor: 'pointer', flex: 1 }}>
                <strong style={{ textDecoration: item.status === 'completed' ? 'line-through' : 'none' }}>
                  {item.status === 'completed' ? '✅' : '⏳'} {item.task}
                </strong>
                <br />
                <small style={{ color: '#555' }}>{item.date}</small>
              </div>
              <button 
                onClick={() => deleteReminder(item.id)} 
                style={{ background: 'none', border: 'none', color: '#d32f2f', cursor: 'pointer', fontSize: '16px', padding: '4px' }}
                title="Delete"
              >
                🗑️
              </button>
            </div>
          ))
        )}
      </div>

    </div>
  );
}