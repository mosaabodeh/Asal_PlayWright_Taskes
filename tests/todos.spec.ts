import {test,expect} from '@playwright/test'

test .describe("log in test cases",()=>{
    test.use({
        storageState: "storegeState.json",
    })
     test.beforeEach("should be able to log in : ",async({page})=>{
        await page.goto("https://qacart-todo.herokuapp.com/");
     });
    test("should be able to do taskes", async({page})=>{
            
         const add= page.locator('[data-testid="add"]');
         await add.click();
         const TextFelid= page.locator('[data-testid="new-todo"]');
         await TextFelid.fill("New Todo num 1");
         const button= page.locator('text=Create Todo');
         await button.click();
         const checkBox = page.locator('[data-testid="complete-task"]').nth(0);
         await checkBox.click();
         
        // const status = await page.locator('[data-indeterminate="false"]').isVisible();
         //expect(status).toBeTruthy();
         
        
         //or we can use this code to ensure that the css is the same : 
           page.pause();
            await page.waitForTimeout(8000);
         const item =  page.locator('[data-testid="todo-item"]').nth(0);
         await expect(item).toHaveCSS("background-color","rgb(33, 76, 97)")
       


    })
   /* test("should be able to do taskes",({page})=>{
        
    })*/
})