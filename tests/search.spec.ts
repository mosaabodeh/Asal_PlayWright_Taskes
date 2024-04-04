import {test,expect} from '@playwright/test'
test.describe("verify The First Senareo",async()=>{
    test.beforeEach(async({page}) => {
        await page.goto('https://stacksinfo.web.app/');
      })
     test("should be able to visit the website",async({page})=>{
         await page.goto('https://stacksinfo.web.app/');

      })
      test("Verify the Empty Search", async ({ page }) => {
        await page.locator('.search-bar').press('Enter');
        const searchBarValue = await page.locator('.search-bar').inputValue();
        expect(searchBarValue).toBe('');
     });

     
     test('Verify the Search with one Letter', async({page}) => {
       const search=  page.locator('.search-bar');
       await search.fill('a');
       const searchValue = await search.inputValue();
         expect(searchValue).toBe('a');    
       });

       test('Verify the Search with company name',  async({page}) => {
         const search=  page.locator('.search-bar');
         search.fill('ASAL Technologies');
         await page.waitForTimeout(500);
         await page.press('.search-bar', 'Enter');

        const Verify= page.locator('.company-name')
         await expect(Verify).toBeVisible();
        
       })
       test('Verify the Search with invailed company name', async({page}) => {
         page.locator('.search-bar').fill('najah company')
         await page.press('.search-bar', 'Enter');
       const searchValue = page.locator('.title-not-fround');
       await expect (searchValue).toBeVisible();
       })

    
     test('Verify the Search with invailed company name(Spetial chars)',async({page}) => {
         page.locator('.search-bar').fill('asal !@#4 Technologies')
         await page.press('.search-bar', 'Enter');
         const titleNotFoundElement = await page.waitForSelector('p.title-not-fround:has-text("Oops, No Matches Found :(")');
         const textContent = await titleNotFoundElement.innerText();
         await expect(textContent).toEqual('Oops, No Matches Found :(');
        
       })
       test('Verify the Search with invailed company name(Diffrent Languge)',async({page}) => {
         page.locator('.search-bar').fill('عسل')
         await page.press('.search-bar', 'Enter');
         const titleNotFoundElement = await page.waitForSelector('p.title-not-fround:has-text("Oops, No Matches Found :(")');
         const textContent = await titleNotFoundElement.innerText();
          expect(textContent).toEqual('Oops, No Matches Found :(');
        
       })
       test('Verify that the user Can Return to the Last Search)', async({page}) => {
       
         page.locator('.search-bar').fill('ASAL Technologies')
         await page.press('.search-bar', 'Enter');
         page.locator('.search-bar').click();
         const itemTextElement = await page.waitForSelector('div.item-text:has-text("ASAL Technologies")');
         const textContent = await itemTextElement.innerText();
          expect(textContent).toContain('ASAL Technologies');
            
       })
      test('Verify that the user Can Clear Last Search)',async({page}) => {
        page.locator('.search-bar').fill('ASAL Technologies')
        await page.press('.search-bar', 'Enter');
       await  page.locator('.search-bar').fill('');
        page.locator('.search-bar').click();
       await page.locator('.remove-button').nth(1).click();
        const removeButtonsCount = await page.locator('.remove-button').count();
        expect(removeButtonsCount).toBe(0);
        
              })
              test('Verify that the user Can Clear All Search)', async({page}) =>{
                const searchElement = page.locator('.search-bar');
               await searchElement.fill('ASAL Technologies')
                searchElement.press('Enter');
               await  searchElement.fill('');
               await searchElement.click();
               await page.locator('button.remove-button').nth(0).click();
               const removeButtonsCount = await page.locator('.remove-button').count();
        expect(removeButtonsCount).toBe(0);
        

            
              })        


    });