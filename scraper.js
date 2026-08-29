import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import axios from 'axios';

const firebaseConfig = {
  apiKey: "AIzaSyBydZ6cHURGsMZ1IYUHgHMz66X9pL4sJiw",
  authDomain: "agrosmart-c4a2d.firebaseapp.com",
  databaseURL: "https://agrosmart-c4a2d-default-rtdb.firebaseio.com",
  projectId: "agrosmart-c4a2d",
  storageBucket: "agrosmart-c4a2d.firebasestorage.app",
  messagingSenderId: "1071735729842",
  appId: "1:1071735729842:web:07449f44051deedb5c23ab"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const CROP_MAPPINGS = {
  "Carrot": { id: 1, name: { English: "Carrot", Sinhala: "කැරට්", Tamil: "கேரட்" }, icon: "🥕" },
  "Tomato": { id: 2, name: { English: "Tomatoes", Sinhala: "තක්කාලි", Tamil: "தக்காளி" }, icon: "🍅" },
  "Green Chilli": { id: 3, name: { English: "Green Chilli", Sinhala: "අමු මිරිස්", Tamil: "பச்சை மிளகாய்" }, icon: "🌶️" },
  "Potato (Local)": { id: 4, name: { English: "Potato", Sinhala: "අර්තාපල්", Tamil: "உருளைக்கிழங்கு" }, icon: "🥔" },
  "Beans": { id: 5, name: { English: "Beans", Sinhala: "බෝංචි", Tamil: "பீன்ஸ்" }, icon: "🫘" },
  "Cabbage": { id: 6, name: { English: "Cabbage", Sinhala: "ගෝවා", Tamil: "முட்டைகோஸ்" }, icon: "🥬" },
  "Red Onion (Local)": { id: 7, name: { English: "Red Onion", Sinhala: "රතු ලූණු", Tamil: "வெங்காயம்" }, icon: "🧅" },
  "Pumpkin": { id: 8, name: { English: "Pumpkin", Sinhala: "වට්ටක්කා", Tamil: "பூசணிக்காய்" }, icon: "🎃" },
  "Brinjal": { id: 9, name: { English: "Brinjal", Sinhala: "වම්බටු", Tamil: "கத்திரிக்காய்" }, icon: "🍆" },
  "Snake gourd": { id: 10, name: { English: "Snake gourd", Sinhala: "පතෝල", Tamil: "புடலங்காய்" }, icon: "🥒" }, 
  "Pineapple": { id: 11, name: { English: "Pineapple", Sinhala: "අන්නාසි", Tamil: "அண்ணாசி" }, icon: "🍍" },
  "Banana (Sour)": { id: 12, name: { English: "Banana (Ambul)", Sinhala: "කෙසෙල් (ඇඹුල්)", Tamil: "வாழைப்பழம்" }, icon: "🍌" },
  "Papaw": { id: 13, name: { English: "Papaya", Sinhala: "පැපොල්", Tamil: "பப்பாளி" }, icon: "🍈" }
};

async function fetchLiveMarketPrices() {
  const { data } = await axios.get('https://topgoviya.lk/data.json');
  const commodities = data.commodities;

  const liveCropsData = [];

  for (const item of commodities) {
    if (CROP_MAPPINGS[item.name]) {
      const mapping = CROP_MAPPINGS[item.name];
      
      const latestPrice = item.series[item.series.length - 1] || 0;
      const previousPrice = item.series[item.series.length - 2] || latestPrice;
      
      const diff = latestPrice - previousPrice;
      const isUp = diff >= 0;
      const changeStr = (isUp ? "+" : "") + "Rs. " + Math.abs(diff).toFixed(2);

      liveCropsData.push({
        id: mapping.id,
        name: mapping.name,
        price: `Rs. ${latestPrice}/kg`,
        change: changeStr,
        isUp: isUp,
        icon: mapping.icon
      });
    }
  }
  
  // Sort by id to maintain order
  liveCropsData.sort((a, b) => a.id - b.id);
  
  return liveCropsData;
}

async function updateRealMarketPrices() {
  try {
    console.log("එළවළු සහ පලතුරු නිවැරදි මිල ගණන් යාවත්කාලීන කරමින් පවතී...");
    
    const liveCropsData = await fetchLiveMarketPrices();
    
    if (liveCropsData.length > 0) {
      await setDoc(doc(db, "marketPrices", "allCrops"), {
        crops: liveCropsData,
        updatedAt: new Date()
      }, { merge: true });

      console.log("සාර්ථකයි! සජීවී එළවළු සහ පලතුරු මිල ගණන් Firebase වෙත යාවත්කාලීන විය.");
    } else {
      console.log("කිසිදු දත්තයක් සොයා ගැනීමට නොහැකි විය.");
    }
  } catch (error) {
    console.error("දෝෂයක් සිදුවිය:", error);
  }
}

updateRealMarketPrices();