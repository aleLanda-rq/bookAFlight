
async function addToCart(page) {
    await page.waitForSelector("#cart-addToCartButtonOrTextIdFor80785861",{visible :true})
    await page.click("#addToCartButtonOrTextIdFor80785861")
    await page.screenshot({path:'addtoCart.png', fullPage: false,
    type: 'png'})
    await open('addtoCart.png');
    await page.waitForNavigation();
   }

   export { addToCart };
