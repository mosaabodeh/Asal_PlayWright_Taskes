import {test,expect} from '@playwright/test'
test .describe("log in test cases",()=>{
test("should have the correct title", async({page})=>{
await page.goto("https://qacart-todo.herokuapp.com/");
//const title = await page.title();
//console.log(title);
await expect(page).toHaveTitle("QAcart Todo App - Login page");
})
test("should have a uRl", async ({page}) => {
    await page.goto("https://qacart-todo.herokuapp.com/");
    const url=await page.url();
    console.log(url);
    await expect(page).toHaveURL("https://qacart-todo.herokuapp.com/");
})
test("header should be vesabble", async ({page}) => {
    await page.goto("https://qacart-todo.herokuapp.com/");
    //with text abearance we can use this code to access the element :

    //const header= page.locator('text=Login to Application');

   // with class name selector we can use any word in theclass name : 
    const header1= page.locator('.fIHHXA ');

    //console.log(header);
    //await expect(header).toBeVisible();

    await expect(header1).toHaveText('Login to Application');
})
test ("fill the email in text field", async({page}) => {
    await page.goto("https://qacart-todo.herokuapp.com/");
     //to acses the element by id we can use this code : 
     const email= page.locator('#email');
    await email.fill("mosaab.cp@gmail.com");
    await expect(email).toHaveValue("mosaab.cp@gmail.com");
    //if we have value we can assert that it will be our value like the above code :
})
test ("fill the password in text field", async({page}) => {
    await page.goto("https://qacart-todo.herokuapp.com/");
     //to acses the element by attrebute or data test id we can use this code :
     const password= page.locator('[data-testid="password"]');
    await password.fill("123456");
   await page.pause();
    await expect(password).toHaveValue("123456");
    //if we have value we can assert that it will be our value like the above code :
})
//XPATH: 
// //tagename[@attribute="value"] ex : //input[@data-testid="password"]

//we can also combine the tage name with text by using the follwing code : 
//page.locator(button:has-text("login"))
    test ("should be able to do the login senareo", async({page}) => {
    await page.goto("https://qacart-todo.herokuapp.com/");
   await page.locator('#email').fill("mosaab.test@gmail.com");
   await page.locator('[data-testid="password"]').fill("mosaab123");
    const button =page.locator('button:has-text("login")');
    //in this code we will make the brawser wait 3 seconds
    await page.waitForTimeout(3000);
    //condetional wait :for the element : 
    await button.waitFor({
        state:  "visible",
        timeout:3000
    })
    //wait for the page : ex : 
    await page.waitForURL("http://")

   await button.click();
   const welcom =page.locator('text =Good afternoon moasaab');
   //wait on expect condition :   
   await expect(welcom).toBeVisible({timeout : 5000});
})


})