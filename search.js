
async function search(page) {
   await page.waitForSelector('.styles__LinkText-sc-1e1g60c-3 dZfgoT h-margin-r-x3')
   await page.click('.styles__LinkText-sc-1e1g60c-3 dZfgoT h-margin-r-x3')
   await page.screenshot({ path: 'search.png', fullPage: false,
   type: 'png' });
   await page.waitForNavigation();
  }

  export { search };
