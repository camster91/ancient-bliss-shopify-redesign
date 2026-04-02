const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  console.log("Navigating...");
  await page.goto('http://127.0.0.1:9292/products/berberine', { waitUntil: 'load', timeout: 15000 }).catch(e => console.log(e));
  
  // Also try clicking the cart to open it
  try {
    await page.click('.js-toggle-cart'); // from block-cart.liquid
    await page.waitForTimeout(2000);
  } catch(e) {}

  await page.screenshot({ path: '/home/camst/business-hub/ancient-bliss/pdp-screenshot.png', fullPage: false });
  console.log("Screenshot saved.");
  await browser.close();
})();
