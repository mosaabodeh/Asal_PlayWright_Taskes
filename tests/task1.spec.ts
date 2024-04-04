import {test,expect} from '@playwright/test'
test.describe("verify The First Senareo",async()=>{
    test("should be able to log in the website",async({page})=>{
        await page.goto("https://www.saucedemo.com/");  
        await page.locator("#user-name").fill("problem_user");
        await page.waitForTimeout(500);
        await page.locator("#password").fill("secret_sauce");
        await page.waitForTimeout(500);

        await page.locator("#login-button").click();
        await page.waitForTimeout(500);

        await page.locator('text =Sauce Labs Backpack').click();
        await page.waitForTimeout(500);

        await page.locator("#add-to-cart-sauce-labs-fleece-jacket").click();
        await page.waitForTimeout(500);

        await page.locator("#back-to-products").click();
        await page.waitForTimeout(500);

        await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click();
        await page.waitForTimeout(500);

        await page.locator("#react-burger-menu-btn").click();
        await page.waitForTimeout(500);

        await page.locator("#logout_sidebar_link").click();
        await page.waitForTimeout(2000);

    
    })

})