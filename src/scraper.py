import time
import firebase_admin
from firebase_admin import credentials, firestore
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

# Firebase සම්බන්ධ කරගැනීම
if not firebase_admin._apps:
    cred = credentials.Certificate("agrosmart-c4a2d-firebase-adminsdk-fbsvc-ac6e781c15.json") 
    firebase_admin.initialize_app(cred)

db = firestore.client()

def scrape_topgoviya():
    url = "https://topgoviya.lk/"
    
    options = Options()
    options.add_argument("--headless")
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    
    driver = webdriver.Chrome(options=options)
    
    try:
        print("Opening website with Selenium...")
        driver.get(url)
        time.sleep(6) # ඩේටා සම්පූර්ණයෙන් ලෝඩ් වීමට තත්පර 6ක් ඉඳීම
        
        crops_list = []
        
        # වෙබ් අඩවියේ ඇති සියලුම div අයිතම පරීක්ෂා කිරීම
        elements = driver.find_elements(By.TAG_NAME, 'div')
        
        for ele in elements:
            text = ele.text.strip()
            # "Rs" හෝ "රු" අඩංගු සහ මිලක් පෙන්වන කොටස් සෙවීම
            if ("Rs" in text or "රු" in text) and len(text) < 150:
                lines = [line.strip() for line in text.split('\n') if line.strip()]
                if len(lines) >= 2:
                    crop_name = lines[0]
                    price_val = lines[1] if ("Rs" in lines[1] or "රු" in lines[1]) else (lines[0] if "Rs" in lines[0] else "")
                    
                    # වෙනත් නුසුදුසු වචන සහ වැරදි පේළි ෆිල්ටර් කිරීම
                    unwanted = ['home', 'market', 'price', 'search', 'about', 'menu', 'login']
                    
                    # නම සහ මිල හරියටම තිබී, මිලෙහි "Rs" හෝ "රු" අඩංගු විය යුතුය
                    if crop_name and price_val and ("Rs" in price_val or "රු" in price_val) and not any(w in crop_name.lower() for w in unwanted) and len(crop_name) < 30:
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

        # පිරිසිදු කළ සැබෑ ඩේටා පමණක් ෆයර්බේස් යැවීම
        if crops_list:
            db.collection('marketPrices').document('allCrops').set({
                'crops': crops_list
            })
            print(f"[{time.strftime('%Y-%m-%d %H:%M:%S')}] Success! Clean real prices updated: {len(crops_list)} items.")
        else:
            print("No matching crop prices found.")
            
    except Exception as e:
        print("An error occurred:", e)
    finally:
        driver.quit()

if __name__ == "__main__":
    print("Live Selenium Price Scraper started...")
    scrape_topgoviya()