const config = ('./config').default;

async function login(page) {
    await page.waitForSelector('#username')
    await page.waitForSelector('#password')
    await page.type('#username', config.email)
    await page.type('#password', config.password)
    await page.waitForSelector('#login')
    await page.click('#login')
    await page.screenshot({ path: 'login.png',fullPage: false,
    type: 'png'});
    await open('login.png');
    await page.waitForNavigation();
  }

  export { login };
