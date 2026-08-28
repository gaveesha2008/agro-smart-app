import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

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

async function updateRealMarketPrices() {
  try {
    console.log("එළවළු සහ පලතුරු නිවැරදි මිල ගණන් යාවත්කාලීන කරමින් පවතී...");

    // නිවැරදි එළවළු සහ පලතුරු ලැයිස්තුව (නම, මිල සහ වෙනස්වීම් රුපියල් වලින්)
    const cleanCropsData = [
      { id: 1, name: { English: "Carrot", Sinhala: "කැරට්", Tamil: "கேரட்" }, price: "Rs. 350/kg", change: "+Rs. 15.00", isUp: true, icon: "🥕" },
      { id: 2, name: { English: "Tomatoes", Sinhala: "තක්කාලි", Tamil: "தக்காளி" }, price: "Rs. 295/kg", change: "+Rs. 10.50", isUp: true, icon: "🍅" },
      { id: 3, name: { English: "Green Chilli", Sinhala: "අමු මිරිස්", Tamil: "பச்சை மிளகாய்" }, price: "Rs. 505/kg", change: "+Rs. 25.00", isUp: true, icon: "🌶️" },
      { id: 4, name: { English: "Potato", Sinhala: "අර්තාපල්", Tamil: "உருளைக்கிழங்கு" }, price: "Rs. 200/kg", change: "-Rs. 8.00", isUp: false, icon: "🥔" },
      { id: 5, name: { English: "Beans", Sinhala: "බෝංචි", Tamil: "பீன்ஸ்" }, price: "Rs. 405/kg", change: "-Rs. 12.50", isUp: false, icon: "🫘" },
      { id: 6, name: { English: "Cabbage", Sinhala: "ගෝවා", Tamil: "முட்டைகோஸ்" }, price: "Rs. 210/kg", change: "+Rs. 5.00", isUp: true, icon: "🥬" },
      { id: 7, name: { English: "Red Onion", Sinhala: "රතු ලූණු", Tamil: "வெங்காயம்" }, price: "Rs. 184/kg", change: "+Rs. 4.00", isUp: true, icon: "🧅" },
      { id: 8, name: { English: "Pumpkin", Sinhala: "වට්ටක්කා", Tamil: "பூசணிக்காய்" }, price: "Rs. 160/kg", change: "-Rs. 3.00", isUp: false, icon: "🎃" },
      { id: 9, name: { English: "Brinjal", Sinhala: "වම්බටු", Tamil: "கத்திரிக்காய்" }, price: "Rs. 250/kg", change: "+Rs. 12.00", isUp: true, icon: "🍆" },
      { id: 10, name: { English: "Okra", Sinhala: "බණ්ඩක්කා", Tamil: "வெண்டைக்காய்" }, price: "Rs. 240/kg", change: "+Rs. 6.50", isUp: true, icon: "🥒" },
      { id: 11, name: { English: "Pineapple", Sinhala: "අන්නාසි", Tamil: "அண்ணாசி" }, price: "Rs. 415/kg", change: "+Rs. 20.00", isUp: true, icon: "🍍" },
      { id: 12, name: { English: "Banana (Ambul)", Sinhala: "කෙසෙල් (ඇඹුල්)", Tamil: "வாழைப்பழம்" }, price: "Rs. 160/kg", change: "-Rs. 5.00", isUp: false, icon: "🍌" },
      { id: 13, name: { English: "Papaya", Sinhala: "පැපොල්", Tamil: "பப்பாளி" }, price: "Rs. 155/kg", change: "+Rs. 2.50", isUp: true, icon: "🍈" }
    ];

    await setDoc(doc(db, "marketPrices", "allCrops"), {
      crops: cleanCropsData,
      updatedAt: new Date()
    }, { merge: true });

    console.log("සාර්ථකයි! පිරිසිදු එළවළු සහ පලතුරු මිල ගණන් Firebase වෙත යාවත්කාලීන විය.");

  } catch (error) {
    console.error("දෝෂයක් සිදුවිය:", error);
  }
}

updateRealMarketPrices();