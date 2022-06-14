import { test, expect } from "@playwright/test";

test.describe.configure({ mode: 'parallel' });

// test("dummy test", async ({ page }) => {
//   await page.goto("localhost/frontend");
//   await expect(page.locator("text=text").first()).toBeVisible();
// });
// test("container exists", async ({ page }) => {
//   await page.goto("localhost/frontend");
//   await page.waitForTimeout(1000);
  
//   await page.screenshot({ path: 'tests/screenshot.png' });
//   await expect(page.locator("#bp-web-widget").first()).toBeEmpty()
// });
// test("widget exists", async ({ page }) => {
//   await page.goto("localhost/frontend");
//   await expect(page.locator("#bp-widget").first()).toBeVisible();
// });
// test("click opens webchat", async ({ page }) => {
//   await page.goto("localhost/frontend");
//   await page.frameLocator('#bp-widget').locator("#app button").first().click();
//   await expect(page.frameLocator('#bp-widget').locator("text=by").first()).toBeVisible();
// });

// test("there is a single welcome message", async ({ page }) => {
//     await page.goto("localhost/frontend");
//     await page.frameLocator('#bp-widget').locator("#app button").first().click();
//     try {
//         const locator = page.frameLocator('#bp-widget').locator("text=Latest versiohello")
//         await page.waitForTimeout(2000); // give it time for another message to appear

//         await expect(locator).toHaveCount(1);     
//     } catch (error) {
//         await page.screenshot({ path: 'tests/screenshot.png' });
//         throw error
//     }
//     await page.screenshot({ path: 'tests/screenshot.png' });
//   });

// for (let i = 0; i < 100; i++) {
    
//     test(i+ "- after replying, there is no response message", async ({ page }) => {
//         await page.goto("localhost/frontend");
//         await page.frameLocator('#bp-widget').locator("#app button").first().click();
//         await page.frameLocator('#bp-widget').locator("#input-message").first().click()
//         await page.keyboard.type('Hello');
//         await page.keyboard.press('Enter');
        
//         await page.waitForTimeout(2000); // give it time for another message to appear
//         const locator = page.frameLocator('#bp-widget').locator("text=Latest versiohello")
//         if (await locator.count() === 2)
//         {
//             await page.screenshot({ path: 'tests/screenshot.png' });
//         }
//         await expect(locator).toHaveCount(1); 
        
//     });
// }