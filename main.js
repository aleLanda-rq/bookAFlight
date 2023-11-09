import { launch } from 'puppeteer';
import { search } from './search';
import { login } from './login';
import { addToCart } from './addToCart';
const config = require('./config').default;

( async () => {
  try {
    const browser = await launch({
      executablePath: '/path/to/chrome-binary',
//   executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      headless: true,
    });

    const page = await browser.newPage();
    await page.goto('https://www.target.com');

    await search(page);
    await login(page);
    await addToCart(page);

    await browser.close();
  } catch (error) {
    console.error("An error occurred in main.js:", error.message);

    // Handle the error here, which may include logging, taking a screenshot, or other actions.


    if (browser) {
      await browser.close();
    }
  }
})();
