import { launch } from 'puppeteer';
import { search } from './search.js';
import { login } from './login.js';
import { addToCart } from './addToCart.js';
import open from 'open';

const config = ('./config.js').default;

let browser;
( async () => {
  try {
     browser = await launch({
      // executablePath: '/path/to/chrome-binary',
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      headless: true,
    });

    const page = await browser.newPage();
    await page.goto('https://www.target.com');
    await page.screenshot({ path: 'test.png',fullPage: false,
    type: 'png'});
    await open('test.png');

    await search(page);
    await login(page);
    await addToCart(page);

    await browser.close();
  } catch (error) {
    console.error("An error occurred in main.js:", error.message);


    if (browser) {
      await browser.close();
    }
  }
})();
