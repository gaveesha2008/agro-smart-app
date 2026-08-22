import axios from 'axios';
import * as cheerio from 'cheerio';
import { db } from './src/firebase.js'; // ඔබගේ ප්‍රොජෙක්ට් එකේ firebase.js ෆයිල් එකට ඇති නිවැරදි path එක
import { doc, setDoc } from 'firebase/firestore';

async function scrapeTopGoviyaPrices() {
    try {
        const url = 'https://topgoviya.lk/'; 
        console.log("TopGoviya වෙබ් අඩවියෙන් දත්ත ලබාගනිමින් පවතී...");
        
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        let pricesData = {};

        // TopGoviya වෙබ් අඩවියේ මිල සහ බෝග නම අඩංගු කොටස් ලබා ගැනීම
        $('.price-card, div').each((index, element) => {
            let cropName = $(element).find('.crop-name, span').first().text().trim();
            let cropPrice = $(element).find('.price, h3').first().text().trim();
            
            if (cropName && cropPrice && !isNaN(cropPrice)) {
                pricesData[cropName] = cropPrice;
            }
        });

        // Firebase Firestore හි 'marketPrices' කලෙක්ෂන් එක යටතේ 'dailyMarketPrices' ඩොකියුමන්ට් එකට ඩේටා යැවීම
        if (Object.keys(pricesData).length > 0) {
            await setDoc(doc(db, "marketPrices", "dailyMarketPrices"), {
                crops: pricesData,
                updatedAt: new Date()
            }, { merge: true });

            console.log("අලුත් මිල ගණන් සාර්ථකව 'dailyMarketPrices' ඩොකියුමන්ට් එකට අප්ඩේට් විය!");
        } else {
            console.log("ස්ක්‍රැප් කරගැනීමට අවශ්‍ය ඩේටා හමු නොවීය.");
        }

    } catch (error) {
        console.error("දෝෂයක් සිදු විය:", error);
    }
}

scrapeTopGoviyaPrices();