import { request } from "@playwright/test";

async function globalConfig(){
const requestContext=await request.newContext();
await requestContext.post("https://qacart-todo.herokuapp.com/api/v1/users/login",{
    data: {
       email : "mosaab.test@gmail.com",
        password:"mosaab123",
    },
});
await requestContext.storageState({
    path: "storegeState.json",
})

}
export default globalConfig;




/*import { chromium,expect } from "@playwright/test";

async function globalConfig(){
const brawser = await chromium.launch();
const page = await brawser.newPage();
    await page.goto("https://qacart-todo.herokuapp.com/");
    await page.locator('#email').fill("mosaab.test@gmail.com");
    await page.locator('[data-testid="password"]').fill("mosaab123");
    await page.locator('button:has-text("login")').click();
    const welcomeMassege =page.locator('[data-testid="welcome"]');
    await expect( welcomeMassege).toBeVisible();
    await page.context().storageState({
        path: "storegeState.json",
    });

}
export default globalConfig;

*/
