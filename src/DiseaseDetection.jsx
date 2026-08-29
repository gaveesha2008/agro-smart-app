import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { useNavigate } from 'react-router-dom';
import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';

// අක්කා දුන් ලින්ක්ස් දෙක මෙන්න
const PLANT_MODEL_URL = "https://teachablemachine.withgoogle.com/models/cM5ax9hOb/";
const DISEASE_MODEL_URL = "https://teachablemachine.withgoogle.com/models/xaD5w7ErM/";

export default function DiseaseDetection() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  const [plantModel, setPlantModel] = useState(null);
  const [diseaseModel, setDiseaseModel] = useState(null);
  const [plantPredictions, setPlantPredictions] = useState([]);
  const [diseasePredictions, setDiseasePredictions] = useState([]);
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(false);

  const content = {
    English: {
      title: "Disease Detection",
      uploadTitle: "Upload Leaf Image",
      uploadSub: "Tap to upload or take a photo",
      takePhoto: "Take Photo",
      tip: "Tip: Make sure that leaf is clear and visible for accurate results.",
      plantResult: "Plant Type Results:",
      diseaseResult: "Disease Detection Results:"
    },
    Sinhala: {
      title: "රෝග හඳුනාගැනීම",
      uploadTitle: "පත්‍රයක පින්තූරයක් උඩුගත කරන්න",
      uploadSub: "උඩුගත කිරීමට හෝ ඡායාරූපයක් ගැනීමට තට්ටු කරන්න",
      takePhoto: "ඡායාරූපයක් ගන්න",
      tip: "ඉඟිය: නිවැරදි ප්‍රතිඵල සඳහා කොළය පැහැදිලිව පෙනෙන බවට වග බලා ගන්න.",
      plantResult: "බෝග වර්ගය හඳුනාගැනීම:",
      diseaseResult: "රෝගය හඳුනාගැනීමේ ප්‍රතිඵල:"
    },
    Tamil: {
      title: "நோய் கண்டறிதல்",
      uploadTitle: "இலை படத்தைப் பதிவேற்றவும்",
      uploadSub: "பதிவேற்ற அல்லது புகைப்படம் எடுக்க தட்டவும்",
      takePhoto: "புகைப்படம் எடு",
      tip: "உதவிக்குறிப்பு: துல்லியமான முடிவுகளுக்கு இலை தெளிவாகத் தெரிவதை உறுதி செய்யவும்.",
      plantResult: "தாவர வகை முடிவுகள்:",
      diseaseResult: "நோய் கண்டறிதல் முடிவுகள்:"
    }
  };

  const t = content[language] || content['English'];

  // මොඩල්ස් දෙකම එකවර ලෝඩ් කරගැනීම
  useEffect(() => {
    const loadModels = async () => {
      try {
        console.log("Loading models...");
        const loadedPlantModel = await tmImage.load(PLANT_MODEL_URL + "model.json", PLANT_MODEL_URL + "metadata.json");
        const loadedDiseaseModel = await tmImage.load(DISEASE_MODEL_URL + "model.json", DISEASE_MODEL_URL + "metadata.json");
        
        setPlantModel(loadedPlantModel);
        setDiseaseModel(loadedDiseaseModel);
        console.log("Both Teachable Machine Models Loaded Successfully!");
      } catch (error) {
        console.error("Error loading models:", error);
      }
    };
    loadModels();
  }, []);

  const handleCaptureClick = () => {
    fileInputRef.current.click();
  };

  // ෆොටෝ එකක් දැමූ විට මොඩල්ස් දෙකෙන්ම පරීක්ෂා කිරීම
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      setLoading(true);

      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      imgElement.onload = async () => {
        try {
          if (plantModel) {
            const pPreds = await plantModel.predict(imgElement);
            setPlantPredictions(pPreds);
          }
          if (diseaseModel) {
            const dPreds = await diseaseModel.predict(imgElement);
            setDiseasePredictions(dPreds);
          }
        } catch (err) {
          console.error("Prediction error:", err);
        }
        setLoading(false);
      };
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', paddingBottom: '80px' }}>
      <input 
        type="file" 
        accept="image/*" 
        capture="environment" 
        ref={fileInputRef} 
        onChange={handleImageChange}
        style={{ display: 'none' }} 
      />

      <div style={{ background: '#2e7d32', color: 'white', padding: '15px', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px' }}>
          &larr; {t.title}
        </button>
      </div>

      <div onClick={handleCaptureClick} style={{ border: '2px dashed #2e7d32', padding: '40px', textAlign: 'center', borderRadius: '10px', marginTop: '20px', cursor: 'pointer', background: '#fafafa' }}>
        {imageSrc ? (
          <img src={imageSrc} alt="Uploaded Leaf" style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px' }} />
        ) : (
          <>
            <div style={{ fontSize: '40px', color: '#2e7d32', marginBottom: '10px' }}>📸</div>
            <h3 style={{ margin: '0' }}>{t.uploadTitle}</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>{t.uploadSub}</p>
          </>
        )}
      </div>

      <button 
        onClick={handleCaptureClick} 
        style={{ width: '100%', background: '#00b074', color: 'white', border: 'none', padding: '15px', marginTop: '20px', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
      >
        📷 {t.takePhoto}
      </button>

      {loading && <p style={{ textAlign: 'center', marginTop: '15px', color: '#2e7d32' }}>Analyzing image...</p>}

      {/* බෝග වර්ගයේ ප්‍රතිඵල */}
      {plantPredictions.length > 0 && (
        <div style={{ marginTop: '20px', padding: '15px', background: '#e8f5e9', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2e7d32' }}>{t.plantResult}</h4>
          {plantPredictions.map((p, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '14px' }}>
              <span><strong>{p.className}</strong></span>
              <span>{(p.probability * 100).toFixed(1)}%</span>
            </div>
          ))}
        </div>
      )}

      {/* රෝගයේ ප්‍රතිඵල */}
      {diseasePredictions.length > 0 && (
        <div style={{ marginTop: '15px', padding: '15px', background: '#e8f5e9', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2e7d32' }}>{t.diseaseResult}</h4>
          {diseasePredictions.map((p, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '14px' }}>
              <span><strong>{p.className}</strong></span>
              <span>{(p.probability * 100).toFixed(1)}%</span>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: '20px', padding: '12px', background: '#e8f5e9', borderRadius: '8px', fontSize: '14px', color: '#333' }}>
        🌿 {t.tip}
      </div>
    </div>
  );
}