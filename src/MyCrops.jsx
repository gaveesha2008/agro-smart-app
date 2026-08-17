import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);

export default function MyCrops() {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCrop, setSelectedCrop] = useState(null);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "cropGuides"));
        const cropsList = [];
        querySnapshot.forEach((doc) => {
          cropsList.push({ id: doc.id, ...doc.data() });
        });
        setCrops(cropsList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching crops: ", error);
        setLoading(false);
      }
    };

    fetchCrops();
  }, []);

  // තක්කාලි පිළිබඳ සම්පූර්ණ විස්තර සහිතව ඩේටාබේස් එකට දාන ෆන්ක්ෂන් එක
  const addTomatoGuideData = async () => {
    try {
      await addDoc(collection(db, "cropGuides"), {
        cropName: "Tomato",
        category: "Vegetable / Fruit (Berry)",
        imageUrl: "https://www.harighotra.co.uk/images/Shutterstock/tomaotoes1_560x560.jpg",
        origin: "Native to western South America (Andes region)",
        growthStages: "The Seed -> Germination & Seedlings (5-10 days) -> Flowering -> Fruiting -> Ripening",
        soilAndClimate: "Rich, well-draining soil. Thrives in warm climates.",
        culinaryUses: "Can be eaten raw in salads, cooked in curries/soups, or processed as ketchup and paste.",
        nutrition: "Rich in Lycopene (Antioxidant), Vitamin C, Vitamin K, Vitamin A, and Potassium."
      });
      alert("Tomato guide data added successfully! Please refresh the page.");
    } catch (error) {
      console.error("Error adding data: ", error);
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', fontSize: '1.2rem', color: '#555' }}>
        Loading data...
      </div>
    );
  }

  // View Details ක්ලික් කළ විට විස්තර පෙන්වන Screen එක
  if (selectedCrop) {
    return (
      <div style={{ padding: "20px", fontFamily: 'Arial, sans-serif', maxWidth: '700px', margin: '0 auto', backgroundColor: '#fcfdf6', minHeight: '100vh' }}>
        <button 
          onClick={() => setSelectedCrop(null)}
          style={{ marginBottom: '20px', padding: '8px 15px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          &larr; Back to My Crops
        </button>

        <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            <img 
              src={selectedCrop.imageUrl} 
              alt={selectedCrop.cropName} 
              style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #4CAF50' }}
            />
            <div>
              <h2 style={{ margin: '0 0 5px 0', color: '#333' }}>🍅 {selectedCrop.cropName}</h2>
              <p style={{ margin: 0, color: '#666', fontSize: '0.95rem' }}>Category: {selectedCrop.category}</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
            <div>
              <h4 style={{ margin: '0 0 5px 0', color: '#2e7d32' }}>🌍 Origin & History</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#444' }}>{selectedCrop.origin}</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 5px 0', color: '#2e7d32' }}>🌱 Growth & Cultivation</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#444' }}>{selectedCrop.growthStages}</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 5px 0', color: '#2e7d32' }}>🍲 Culinary Uses</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#444' }}>{selectedCrop.culinaryUses}</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 5px 0', color: '#2e7d32' }}>💡 Nutritional Value & Benefits</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#444' }}>{selectedCrop.nutrition}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ප්‍රධාන ලැයිස්තු දර්ශනය (Main List View)
  return (
    <div style={{ padding: "20px", fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#2e7d32', color: 'white', padding: '15px 20px', borderRadius: '10px', textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={{ margin: 0 }}>My Crops</h2>
      </div>

      {crops.length === 0 && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <p style={{ color: '#666' }}>No crop data found in database.</p>
            <button 
                onClick={addTomatoGuideData}
                style={{ padding: "10px 20px", cursor: "pointer", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", fontWeight: 'bold' }}
            >
                Add Tomato Guide Data
            </button>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {crops.map((crop) => (
          <div key={crop.id} style={{
            border: '1px solid #e0e0e0',
            borderRadius: '12px',
            backgroundColor: 'white',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <img 
              src={crop.imageUrl} 
              alt={crop.cropName}
              style={{ 
                width: '90px', 
                height: '90px', 
                objectFit: 'cover', 
                borderRadius: '50%',
                marginBottom: '15px',
                border: '3px solid #4CAF50'
              }}
            />
            
            <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>{crop.cropName}</h3>
            <p style={{ margin: '0 0 20px 0', fontSize: '0.9rem', color: '#666' }}>({crop.category})</p>

            <button 
              onClick={() => setSelectedCrop(crop)}
              style={{
                backgroundColor: '#2e7d32',
                color: 'white',
                border: 'none',
                padding: '10px 0',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: 'bold',
                width: '100%',
                maxWidth: '300px'
              }}
            >
              View details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}