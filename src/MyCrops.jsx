import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { useNavigate } from 'react-router-dom';

const defaultCrops = [
  {
    id: 1,
    name: "Tomato",
    status: "Healthy",
    planted: "2026/07/28",
    location: "Galle",
    field: "0.5 Acre",
    plants: "350",
    age: "45 Days",
    stage: "Flowering - 65%",
    irrigation: "Next: Tomorrow",
    nutrition: "Next: In 3 Days",
    health: "No Issues",
    harvest: "In 24 Days"
  }
];

export default function MyCrops() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const [crops, setCrops] = useState(() => {
    const saved = localStorage.getItem('myCrops');
    return saved ? JSON.parse(saved) : defaultCrops;
  });

  const [activeCropIndex, setActiveCropIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Form states
  const [formName, setFormName] = useState('');
  const [formStatus, setFormStatus] = useState('Healthy');
  const [formPlanted, setFormPlanted] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formField, setFormField] = useState('');
  const [formPlants, setFormPlants] = useState('');
  const [formAge, setFormAge] = useState('');
  const [formStage, setFormStage] = useState('');
  const [formIrrigation, setFormIrrigation] = useState('');
  const [formNutrition, setFormNutrition] = useState('');
  const [formHealth, setFormHealth] = useState('');
  const [formHarvest, setFormHarvest] = useState('');

  useEffect(() => {
    localStorage.setItem('myCrops', JSON.stringify(crops));
  }, [crops]);

  const startAdd = () => {
    setFormName('');
    setFormStatus('Healthy');
    setFormPlanted('');
    setFormLocation('');
    setFormField('');
    setFormPlants('');
    setFormAge('');
    setFormStage('');
    setFormIrrigation('');
    setFormNutrition('');
    setFormHealth('');
    setFormHarvest('');
    setIsAdding(true);
  };

  const startEdit = (crop) => {
    setFormName(crop.name);
    setFormStatus(crop.status);
    setFormPlanted(crop.planted);
    setFormLocation(crop.location);
    setFormField(crop.field);
    setFormPlants(crop.plants);
    setFormAge(crop.age);
    setFormStage(crop.stage);
    setFormIrrigation(crop.irrigation);
    setFormNutrition(crop.nutrition);
    setFormHealth(crop.health);
    setFormHarvest(crop.harvest);
    setIsEditing(true);
  };

  const handleSaveAdd = () => {
    if (!formName) return;
    const newCrop = {
      id: Date.now(),
      name: formName,
      status: formStatus,
      planted: formPlanted,
      location: formLocation,
      field: formField,
      plants: formPlants,
      age: formAge,
      stage: formStage,
      irrigation: formIrrigation,
      nutrition: formNutrition,
      health: formHealth,
      harvest: formHarvest
    };
    setCrops([...crops, newCrop]);
    setActiveCropIndex(crops.length);
    setIsAdding(false);
  };

  const handleSaveEdit = () => {
    if (!formName) return;
    const updatedCrops = [...crops];
    updatedCrops[activeCropIndex] = {
      ...updatedCrops[activeCropIndex],
      name: formName,
      status: formStatus,
      planted: formPlanted,
      location: formLocation,
      field: formField,
      plants: formPlants,
      age: formAge,
      stage: formStage,
      irrigation: formIrrigation,
      nutrition: formNutrition,
      health: formHealth,
      harvest: formHarvest
    };
    setCrops(updatedCrops);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (crops.length <= 1) {
      alert("You must keep at least one crop.");
      return;
    }
    const updatedCrops = crops.filter((_, idx) => idx !== activeCropIndex);
    setCrops(updatedCrops);
    setActiveCropIndex(0);
  };

  const content = {
    English: {
      title: "My Crops",
      planted: "Planted: ",
      location: "Location: ",
      field: "Field: ",
      plants: "Plants: ",
      age: "Age: ",
      stageTitle: "Crop Growth Stage",
      currentStage: "Current Stage: ",
      irrigation: "Irrigation",
      nutrition: "Nutrition",
      health: "Health",
      harvest: "Harvest",
      addCrop: "Add New Crop",
      edit: "Edit Details",
      delete: "Delete Crop",
      save: "Save",
      cancel: "Cancel"
    },
    Sinhala: {
      title: "මගේ බෝග",
      planted: "රෝපණය: ",
      location: "ස්ථානය: ",
      field: "වපසරිය: ",
      plants: "පැළ ගණන: ",
      age: "වයස: ",
      stageTitle: "බෝග වර්ධන අවධිය",
      currentStage: "වත්මන් අවධිය: ",
      irrigation: "ජලය සැපයීම",
      nutrition: "පෝෂණය",
      health: "සෞඛ්‍ය තත්ත්වය",
      harvest: "අස්වැන්න",
      addCrop: "අලුත් බෝගයක් එකතු කරන්න",
      edit: "විස්තර වෙනස් කරන්න",
      delete: "බෝගය මකන්න",
      save: "සුරකින්න",
      cancel: "අවලංගු කරන්න"
    },
    Tamil: {
      title: "எனது பயிர்கள்",
      planted: "நடப்பட்ட தேதி: ",
      location: "இடம்: ",
      field: "புலம்: ",
      plants: "பயிர்கள்: ",
      age: "வயது: ",
      stageTitle: "பயிர் வளர்ச்சி நிலை",
      currentStage: "தற்போதைய நிலை: ",
      irrigation: "நீர்ப்பாசனம்",
      nutrition: "ஊட்டச்சத்து",
      health: "ஆரோக்கியம்",
      harvest: "அறுவடை",
      addCrop: "புதிய பயிரைச் சேர்",
      edit: "விவரங்களைத் திருத்து",
      delete: "பயிரை நீக்கு",
      save: "சேமி",
      cancel: "ரத்து செய்"
    }
  };

  const t = content[language] || content['English'];
  const currentCrop = crops[activeCropIndex] || crops[0] || defaultCrops[0];

  return (
    <div style={{ padding: '20px', minHeight: '100vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
      
      {/* Header */}
      <div style={{ background: '#2e7d32', color: 'white', padding: '15px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', color: 'white', fontSize: '18px', cursor: 'pointer' }}>←</button>
        <h2 style={{ margin: 0 }}>{t.title}</h2>
      </div>

      {/* Crop Tabs if multiple crops */}
      {crops.length > 1 && !isAdding && !isEditing && (
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '10px', marginBottom: '10px' }}>
          {crops.map((crop, idx) => (
            <button
              key={crop.id}
              onClick={() => setActiveCropIndex(idx)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: activeCropIndex === idx ? '2px solid #2e7d32' : '1px solid #ccc',
                background: activeCropIndex === idx ? '#e8f5e9' : '#fff',
                color: activeCropIndex === idx ? '#2e7d32' : '#333',
                fontWeight: 'bold',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {crop.name}
            </button>
          ))}
        </div>
      )}

      {/* Add / Edit Form Overlay or View */}
      {(isAdding || isEditing) ? (
        <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px', border: '1px solid #ddd', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h3 style={{ margin: '0 0 10px 0' }}>{isAdding ? t.addCrop : t.edit}</h3>
          
          <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Crop Name</label>
          <input type="text" value={formName} onChange={(e) => setFormName(e.target.value)} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} placeholder="e.g. Tomato" />

          <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Status</label>
          <select value={formStatus} onChange={(e) => setFormStatus(e.target.value)} style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
            <option value="Healthy">Healthy</option>
            <option value="Needs Water">Needs Water</option>
            <option value="Diseased">Diseased</option>
          </select>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Planted Date</label>
              <input type="text" value={formPlanted} onChange={(e) => setFormPlanted(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} placeholder="e.g. 2026/07/28" />
            </div>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Location</label>
              <input type="text" value={formLocation} onChange={(e) => setFormLocation(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} placeholder="e.g. Galle" />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Field Size</label>
              <input type="text" value={formField} onChange={(e) => setFormField(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} placeholder="e.g. 0.5 Acre" />
            </div>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Plants Count</label>
              <input type="text" value={formPlants} onChange={(e) => setFormPlants(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} placeholder="e.g. 350" />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Age</label>
              <input type="text" value={formAge} onChange={(e) => setFormAge(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} placeholder="e.g. 45 Days" />
            </div>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Growth Stage</label>
              <input type="text" value={formStage} onChange={(e) => setFormStage(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} placeholder="e.g. Flowering - 65%" />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Irrigation</label>
              <input type="text" value={formIrrigation} onChange={(e) => setFormIrrigation(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} placeholder="e.g. Next: Tomorrow" />
            </div>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Nutrition</label>
              <input type="text" value={formNutrition} onChange={(e) => setFormNutrition(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} placeholder="e.g. Next: In 3 Days" />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Health</label>
              <input type="text" value={formHealth} onChange={(e) => setFormHealth(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} placeholder="e.g. No Issues" />
            </div>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Harvest</label>
              <input type="text" value={formHarvest} onChange={(e) => setFormHarvest(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} placeholder="e.g. In 24 Days" />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
            <button onClick={isAdding ? handleSaveAdd : handleSaveEdit} style={{ flex: 1, background: '#2e7d32', color: 'white', border: 'none', padding: '12px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>{t.save}</button>
            <button onClick={() => { setIsAdding(false); setIsEditing(false); }} style={{ flex: 1, background: '#fff', color: '#666', border: '1px solid #ccc', padding: '12px', borderRadius: '5px', cursor: 'pointer' }}>{t.cancel}</button>
          </div>
        </div>
      ) : (
        <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px', border: '1px solid #ddd', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '20px', color: '#111' }}>{currentCrop.name}</h3>
              <p style={{ color: currentCrop.status === 'Healthy' ? 'green' : 'orange', fontWeight: 'bold', margin: '4px 0 0 0' }}>{currentCrop.status}</p>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.1fr', gap: '10px', margin: '15px 0', fontSize: '13px' }}>
            <div><p style={{ margin: '2px 0' }}><strong>{t.planted}</strong>{currentCrop.planted}</p><p style={{ margin: '2px 0' }}><strong>{t.location}</strong>{currentCrop.location}</p></div>
            <div><p style={{ margin: '2px 0' }}><strong>{t.plants}</strong>{currentCrop.plants}</p><p style={{ margin: '2px 0' }}><strong>{t.field}</strong>{currentCrop.field}</p></div>
            <div><p style={{ margin: '2px 0' }}><strong>{t.age}</strong>{currentCrop.age}</p></div>
          </div>

          <hr style={{ border: '0.5px solid #eee', margin: '15px 0' }} />

          <h4 style={{ margin: '0 0 5px 0' }}>{t.stageTitle}</h4>
          <p style={{ fontSize: '13px', color: '#555', margin: '0 0 8px 0' }}>{t.currentStage}{currentCrop.stage}</p>
          <div style={{ background: '#ddd', height: '8px', borderRadius: '4px', margin: '10px 0' }}>
            <div style={{ background: '#2e7d32', width: currentCrop.stage?.includes('%') ? currentCrop.stage.match(/\d+/)?.[0] + '%' : '65%', height: '100%', borderRadius: '4px' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px' }}>
            <div style={{ background: '#fff', padding: '10px', borderRadius: '8px', border: '1px solid #eee' }}>
              <strong>💧 {t.irrigation}</strong>
              <p style={{ fontSize: '13px', color: '#666', margin: '4px 0 0 0' }}>{currentCrop.irrigation}</p>
            </div>
            <div style={{ background: '#fff', padding: '10px', borderRadius: '8px', border: '1px solid #eee' }}>
              <strong>🌱 {t.nutrition}</strong>
              <p style={{ fontSize: '13px', color: '#666', margin: '4px 0 0 0' }}>{currentCrop.nutrition}</p>
            </div>
            <div style={{ background: '#fff', padding: '10px', borderRadius: '8px', border: '1px solid #eee' }}>
              <strong>❤️ {t.health}</strong>
              <p style={{ fontSize: '13px', color: '#666', margin: '4px 0 0 0' }}>{currentCrop.health}</p>
            </div>
            <div style={{ background: '#fff', padding: '10px', borderRadius: '8px', border: '1px solid #eee' }}>
              <strong>📦 {t.harvest}</strong>
              <p style={{ fontSize: '13px', color: '#666', margin: '4px 0 0 0' }}>{currentCrop.harvest}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button onClick={startAdd} style={{ flex: 1, background: '#2e7d32', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>{t.addCrop}</button>
            <button onClick={() => startEdit(currentCrop)} style={{ flex: 1, background: '#fff', color: '#2e7d32', border: '1px solid #2e7d32', padding: '10px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>{t.edit}</button>
          </div>
          
          <button onClick={handleDelete} style={{ width: '100%', background: '#fff', color: '#d32f2f', border: '1px solid #d32f2f', padding: '10px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }}>{t.delete}</button>
        </div>
      )}
    </div>
  );
}