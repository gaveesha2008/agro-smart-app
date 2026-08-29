import puppeteer from 'puppeteer';

async function testScrape() {
  const browser = await puppeteer.launch({ 
    headless: 'new',
    executablePath: 'C:\\Users\\USER\\.cache\\puppeteer\\chrome\\win64-152.0.7977.54\\chrome-win64\\chrome.exe'
  });
  const page = await browser.newPage();
  await page.goto('https://topgoviya.lk/', { waitUntil: 'networkidle2' });
  
  const items = await page.evaluate(() => {
    const results = [];
    document.querySelectorAll('div').forEach(el => {
      const text = el.innerText;
      if (text && (text.includes('Rs') || text.includes('රු')) && text.length < 150) {
        const lines = text.split('\n').map(l => l.trim()).filter(l => l);
        if (lines.length >= 2) {
          results.push({ name: lines[0], price: lines[1] });
        }
      }
    });
    return results;
  });
  
  console.log(items.slice(0, 10));
  await browser.close();
}

testScrape();
