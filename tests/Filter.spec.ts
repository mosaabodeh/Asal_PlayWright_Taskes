import {test,expect} from '@playwright/test'
test.describe("verify The First Senareo",async()=>{
    test.beforeEach(async({page}) => {
        await page.goto('https://stacksinfo.web.app/');
        await page.locator('span:has-text("Show Filters")').click();
      })
       test('verify Select Topic DBA', async({page}) => {
       
         await page.locator('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').nth(1).click();
         const element=page.locator('.title-not-fround');
         const verify= await element.innerText();
         expect(verify).toBe('Oops, No Matches Found :(');
    
       });
       test('verify Select Tow Topic  DBA , Backend', async({page}) => {
         await page.locator('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').nth(0).click();
         await page.locator('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').nth(1).click();
         const element=page.locator('.title-not-fround');
         const verify= await element.innerText();
         expect(verify).toBe('Oops, No Matches Found :(');    
       });
    
       test('verify Select multy Topic and deselect one topic ',async({page}) => {
         await page.locator('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').nth(0).click();
         await page.locator('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').nth(1).click();
        await page.locator('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').nth(2).click();
         await page.locator('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').nth(1).click();
         const element=page.locator('.title-not-fround');
         const verify= await element.innerText();
         expect(verify).toBe('Oops, No Matches Found :(');        
       });
      
      test('verify Rest button ', async({page}) => {
         page.locator('.reset-btn').click();
        const element= page.locator('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').nth(1);
        const isChecked=await(element).isChecked();
        expect(isChecked).toBe(false);
       });

   test('verify Hide Button whith topic',  async({page}) => {
    await page.locator('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').nth(1).click();
     await page.locator('span:has-text("Hide Filters")').click();
     const element= page.locator('span:has-text("Show Filters")');
     expect(element).toBeVisible();

  });

   test('verify Hide Button ',async({page}) => {
     await page.locator('span:has-text("Hide Filters")').click();
     const element= page.locator('span:has-text("Show Filters")');
     expect(element).toBeVisible();

   });

  test('verfy Hide Button whith Suptopic', async({page}) => {
    await page.locator('svg[data-testid="KeyboardArrowDownIcon"]').nth(1).click(); 
    await page.locator('#MySQL').click(); 
   await page.locator('span:has-text("Hide Filters")').click();
   const element= page.locator('span:has-text("Show Filters")');
    expect(element).toBeVisible();

  });
   
   test('verfy remove Suptopic via CloseIcon', async({page}) => {
     await page.locator('svg[data-testid="KeyboardArrowDownIcon"]').nth(3).click(); 
     await page.locator('label[for="AWS"]').click(); 
     await page.locator('label[for="Azure"]').click();
     await page.locator('[data-testid="CloseIcon"]').nth(0).click(); 
     const element= page.locator('div.company-name:has-text("Radix Technologies")');
    await expect(element).toBeVisible();  
 });
     test('verify that the user can choose topic and deselect subtopic From the Menu and Checkbox', async({page}) => {
         await page.locator('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').nth(1).click(); 
         await page.locator('svg[data-testid="KeyboardArrowDownIcon"]').nth(1).click(); 
         await page.locator('#MySQL').click(); 
         const element= page.locator('#MySQL');
         const isChecked=await(element).isChecked();
         expect(isChecked).toBe(false);
     });

     test('verify that the user can choose topic and deselect subtopic From the Menu and Checkbox V2', async({page}) => {
         await page.locator('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').nth(1).click(); 
         await page.locator('.clear-all-btn').click();
         const element = page.locator('.company-name').first();
         await expect(element).toBeVisible();
     });
    });