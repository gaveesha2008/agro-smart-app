import time
import requests
from bs4 import BeautifulSoup
import firebase_admin
from firebase_admin import credentials, firestore

# Firebase සම්බන්ධ කරගැනීම
if not firebase_admin._apps:
    cred = credentials.Certificate("agrosmart-c4a2d-firebase-adminsdk-fbsvc-ac6e781c15.json") 
    firebase_admin.initialize_app(cred)

db = firestore.client()

def scrape_topgoviya():
    url = "https://topgoviya.lk/"
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=10)
        
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            crops_list = []
            
            # වෙබ් අඩවියේ මිල ගණන් පෙන්වන සැබෑ කොටස් (rows / divs) නිවැරදිව සෙවීම
            # මෙහිදී ටේබල් පේළි හෝ ලැයිස්තු අයිතම පරීක්ෂා කරමු
            for item in soup.find_all(['tr', 'li', 'div']):
                text = item.get_text(separator="|", strip=True)
                
                # මිලක් සහ බෝග නමක් අඩංගු වන අවස්ථා පමණක් ফিল්ටර් කිරීම
                if "Rs" in text or "රු" in text:
                    parts = [p.strip() for p in text.split("|") if p.strip()]
                    
                    if len(parts) >= 2:
                        crop_name = parts[0]
                        price_val = parts[1] if ("Rs" in parts[1] or "රු" in parts[1]) else (parts[2] if len(parts) > 2 and ("Rs" in parts[2] or "රු" in parts[2]) else "")
                        
                        # අනවශ්‍ය මෙනු සහ සයිට් එකේ විස්තර වචන සම්පූර්ණයෙන්ම ඉවත් කිරීම
                        unwanted = ['price', 'monitor', 'about', 'increased', 'decreased', 'retail', 'wholesale', 'harti', 'cbsl', 'home', 'market', 'search']
                        
                        if price_val and not any(w in crop_name.lower() for w in unwanted) and len(crop_name) < 30:
                            # ඩුප්ලිකේට් වැළැක්වීම
                            if not any(c['name']['English'] == crop_name for c in crops_list):
                                crops_list.append({
                                    "id": crop_name[:10].replace(" ", "_").lower(),
                                    "name": {
                                        "English": crop_name,
                                        "Sinhala": crop_name,
                                        "Tamil": crop_name
                                    },
                                    "price": price_val,
                                    "change": "Live",
                                    "isUp": True,
                                    "icon": "🌿"
                                })

            # සැබෑ දත්ත සාර්ථකව ලැබුණහොත් පමණක් ෆයර්බේස් අප්ඩේට් කිරීම
            if crops_list:
                db.collection('marketPrices').document('allCrops').set({
                    'crops': crops_list
                })
                print(f"[{time.strftime('%Y-%m-%d %H:%M:%S')}] Success! Real original prices updated: {len(crops_list)} items.")
            else:
                print("No matching original crop prices found in this cycle.")
                
        else:
            print("Failed to connect. Status code:", response.status_code)
            
    except Exception as e:
        print("An error occurred:", e)

if __name__ == "__main__":
    print("Live Original Price Scraper started...")
    while True:
        scrape_topgoviya()
        # හැම පැයකට වතාවක් ස්වයංක්‍රීයව ලයිව් අප්ඩේට් වේ
        time.sleep(3600)