import {test,expect} from '@playwright/test'
test.describe("verify The First Senareo",async()=>{
    test("should be able to visit the website",async({page})=>{
        await page.goto("https://www.1101.com/store/techo/en/2024/pc/detail_toolstoys/tt_liner_shibata/");
       // await page.locator('span:has-text("Accessories")').nth(0).click();
        //await page.locator('span:has-text("Writing Utencils")').nth(0).click();
       // await page.locator('strong:has-text("Preppy Fountain Pen")').nth(0).click();

        await page.locator('#tt_liner_shibata').nth(1).click();
        await page.locator('span:has-text("Add to Cart")').nth(0).click();
        await page.locator('span:has-text("View cart")').nth(0).click();
        await page.locator('button#submit:has-text("Proceed to check-out")').click();
        await page.locator('span:has-text("Continue to Order")').click();
        await page.click('text="Agree and continue"');
        await page.locator('input[name="mail_address"]').fill("mosaab.cb@gmal.com");
        await page.locator('input[name="mail_address_confirm"]').fill("mosaab.cb@gmal.com");
        await page.locator('input[name="password"]').fill("Mosaab_cb0595");
        await page.locator('input[name="password_confirm"]').fill("Mosaab_cb0595");
        await page.locator('input[name="abroad"][type="radio"][value="1"]').click();
        await page.locator('input[type="radio"][name="gender"][value="Mr."]').click();
        await page.locator('input[name="firstname"]').fill('mosaab');
        await page.locator('input[name="firstname"]').fill('odeh');
        await page.locator('select[name="country_id"] > option[value="44"]').click();
        await page.locator('textarea[name="foreign_address"]').fill("Your foreign address here");
        await page.locator('input[name="foreign_city"]').fill("Your foreign city here");
        await page.locator('input[name="tel"]').fill("Your foreign city here");
        await page.locator('input[name="birth_year"]').fill("1990");//input[@name="tel"]
        await page.selectOption('select[name="birth_month"]', { index: 1 });
        await page.selectOption('select[name="birth_day"]', { index: 20 });
        await page.selectOption('select[name="sex"]', { value: '1' });
        await page.locator('a.submit:has-text("Create new account")').click();


        















     })
    
    });