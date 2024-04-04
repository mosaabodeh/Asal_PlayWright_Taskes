import {test,expect} from '@playwright/test'
test.describe("verify The First Senareo",async()=>{
    test("should be able to log in the website",async({page})=>{
        await page.goto("https://www.demoblaze.com/index.html");
        await page.locator("#login2").click();
        await page.waitForTimeout(500);

        await page.locator("#loginusername").fill("mosaab odeh");
        await page.waitForTimeout(500);
        await page.locator("#loginpassword").fill("Mosaab_cb0595");
        await page.waitForTimeout(500);

        await page.locator('button:has-text("Log in")'). click();
        await page.waitForTimeout(500);

        await page.locator('text="Monitors"').click();
        await page.waitForTimeout(500);

        await page.locator('text="Apple monitor 24"').click();
        await page.waitForTimeout(500);

        await page.locator('text="Add to cart"').click();
        await page.waitForTimeout(500);
        
        await page.locator('text="Cart"').click();
        await page.waitForTimeout(500);

        await page.locator('text="Delete"').nth(0).click();
        await page.waitForTimeout(500);

        await page.locator('text="Place Order"').click();
        await page.waitForTimeout(500);

       
       await page.locator("#name").fill("mosaab odeh");
       await page.waitForTimeout(500);

       await page.locator("#country").fill("Palstine");
       await page.waitForTimeout(500);

       await page.locator("#city").fill("Nablus");
       await page.waitForTimeout(500);

       await page.locator("#card").fill("12345");
       await page.waitForTimeout(500);

       await page.locator("#month").fill("5");
       await page.waitForTimeout(500);

       await page.locator("#year").fill("2020");
       await page.waitForTimeout(500);

       await page.locator('button:has-text("Purchase")'). click();

       await page.locator('button:has-text("OK")'). click();
        
       await page.locator('//*[@id="orderModal"]/div/div/div[1]/button/span').nth(0).click();

        await page.locator('#logout2').click();
        await page.waitForTimeout(2000);
      

        


     })
    
    });