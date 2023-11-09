// import { launch } from 'puppeteer';
// const config = require('./config').default;

// (async () => {
//     const browser = await launch({
//     //   executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
//       executablePath: '/path/to/chrome-binary',
//       headless: true, // Set to 'false' for non-headless mode if needed
//     });

//   // Launch the browser and open a new blank page
// //   const browser = await launch();
//   const page = await browser.newPage();

//   // Navigate the page to a URL
//   await page.goto('https://www.target.com/');

//   // Set screen size
// //   await page.setViewport({width: 1080, height: 1024});

//   await page.click('.styles__LinkText-sc-1e1g60c-3 dZfgoT h-margin-r-x3')
//   // Type into search box
// //   await page.type('.text-white', 'minions');
//  await page.waitForNavigation();
//  await page.type('#username', config.email)
//  await page.type('#password', config.password)
//  await page.waitForSelector('#login')
//  await page.click('#login')

//  await page.waitForNavigation();


//  await page.type('#search', "Women's 'Easy Beezy' Bee Low Cut Socks - Xhilaration™ Oatmeal Heather 4-10");
//  await page.click('#search + .styles__SearchButton-sc-wnzihy-3 SOItS')
//  await page.waitForNavigation();
//  await page.waitForSelector("#cart-addToCartButtonOrTextIdFor80785861",{visible :true})
//  await page.click("#addToCartButtonOrTextIdFor80785861")



// //  await page.focus("#search");
// //  await page.keyboard.press("a")


// await page.waitForSelector(".product-card")
// let products = []
//   // Wait and click on first result
//   const searchResultSelector = '.styles__LinkText-sc-1e1g60c-3 dZfgoT h-margin-r-x3';
//   await page.waitForSelector(searchResultSelector);
//   await page.click(searchResultSelector);

//   // Locate the full title with a unique string
// //   const textSelector = await page.waitForSelector(
// //     'text/minions'
// //   );
// //   const fullTitle = await textSelector?.evaluate(el => el.textContent);

//  // Wait for the navigation to complete
// //  await page.waitForNavigation();

//  // Get the title of the clicked page
//  const pageTitle = await page.title();

//   // Print the full title
// //   console.log('The title of this blog post is "%s".', fullTitle);

// //Print the title of the page
// console.log('The title of the clicked page is "%s".', pageTitle);

//   await browser.close();
// })();

// ///Applications/Google Chrome.app
