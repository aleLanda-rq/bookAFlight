const config = require('./config').default;

async function login(page) {
    await page.waitForSelector('#username')
    await page.waitForSelector('#password')
    await page.type('#username', config.email)
    await page.type('#password', config.password)
    await page.waitForSelector('#login')
    await page.click('#login')
    await page.screenshot({ path: 'login.png',fullPage: true,
    type: 'png'});
    await page.waitForNavigation();
  }

  export { login };
