import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "parallel" });

const testConfig = {
  botId: "ea-demo-bot-amy",
  testProduction: true,
  pathPrefixToDuplicateScreenshot: "./live-screenshot", // leave out extension because I prepend a number later
};

// test("Single context- LIVE after replying, there is no response message", async ({
//   browser,
// }) => {
//   // Create a new incognito browser context
//   // Create a new page inside context.
//   for (let i = 0; i < 100; i++) {
//       console.log(i)
//       const context = await browser.newContext();
//     const page = await context.newPage();
//     // Dispose context once it's no longer needed.
//     await page.goto("https://chat-widget-dev.mongooseresearch.com/#/");
//     await page.waitForLoadState();

//     // select correct bot ea-demo-bot-amy
//     await page.locator("input[type='text']").first().fill(testConfig.botId);

//     // select production (optional) comment out to try dev.
//     if (testConfig.testProduction) {
//       await page
//         .locator("select")
//         .first()
//         .selectOption("https://mongoose.botpress.cloud");
//     }

//     // click the Initialize Bot button on to inject botpress
//     await page.locator("input[type='submit']").first().click();
//     await page.waitForLoadState();
//     // click the open chat button on the bottom right
//     await expect(page.locator("#bp-widget")).toHaveCount(1); // make sure widget loads

//     await expect(
//       page.locator("button[aria-label='Chat']").first() // wait till button appears
//     ).toBeVisible();
//     await page.waitForLoadState("networkidle");

//     await page.locator("button[aria-label='Chat'] i").first().click(); // click button to open chat container

//     await page.waitForLoadState("networkidle");

//     await expect(
//       page.frameLocator("#bp-widget").locator(".bpw-chat-container")
//     ).toHaveCount(1); // make sure the chat container is open

//     await expect(
//       page.frameLocator("#bp-widget").locator("text=Parent")
//     ).toHaveCount(1);
//     // locate the Parent button

//     await page
//       .frameLocator("#bp-widget")
//       .locator("text=Parent")
//       .first()
//       .click();

//     // look for parents, there should only be one, the one we picked.

//     const expectedResultLocator = await page
//       .frameLocator("#bp-widget")
//       .locator("text=Has your student applied?");

//     try {
//       await expect(expectedResultLocator).toHaveCount(1);
//     } catch (error) {
//       console.log("🚀 ~ file: live.spec.ts ~ line 62 ~ error", error);
//       const buttonLocator = await page
//         .frameLocator("#bp-widget")
//         .locator("text=Parent");
//       if ((await buttonLocator.count()) === 2) {
//         // record duplicates
//         await page.screenshot({
//           path: `${testConfig.pathPrefixToDuplicateScreenshot}-${i}.png`,
//         });
//       }
//     }

//     await page.screenshot({
//       path: `live.png`,
//     });

//     await context.close();
//     }
// });

const flags = {
    "cache":[true,false],
    "delay" : [0,1000],
    "localStorage" :[true,false],
    "sessionStorage": [true,false]
}


const runTests = async (browser, browserIteration,pageIteration,cache,delay,localStorage,sessionStorage) => {
       // Create a new incognito browser context
       const context = await browser.newContext();
       await context.addInitScript({
         path: "removeLocal.js",
       });
       await context.addInitScript({
         path: "removeSession.js",
       });
       // Create a new page inside context.
       // Dispose context once it's no longer needed.
       const page = await context.newPage();
       await page.goto("https://chat-widget-dev.mongooseresearch.com/#/");
       for (let j = 0; j < 3; j++) {
         
         await context.clearCookies();
         await page.reload()
         await page.waitForLoadState();
         await page.waitForTimeout(1000);
 
         // select correct bot ea-demo-bot-amy
         await page.locator("input[type='text']").first().fill(testConfig.botId);
 
         // select production (optional) comment out to try dev.
         if (testConfig.testProduction) {
           await page
             .locator("select")
             .first()
             .selectOption("https://mongoose.botpress.cloud");
         }
 
         // click the Initialize Bot button on to inject botpress
         await page.locator("input[type='submit']").first().click();
         await page.waitForLoadState();
         // click the open chat button on the bottom right
         await expect(page.locator("#bp-widget")).toHaveCount(1); // make sure widget loads
 
         await expect(
           page.locator("button[aria-label='Chat']").first() // wait till button appears
         ).toBeVisible();
         await page.waitForLoadState("networkidle");
 
         await page.locator("button[aria-label='Chat'] i").first().click(); // click button to open chat container
 
         await page.waitForLoadState("networkidle");
 
         await expect(
           page.frameLocator("#bp-widget").locator(".bpw-chat-container")
         ).toHaveCount(1); // make sure the chat container is open
 
         await expect(
           page.frameLocator("#bp-widget").locator("text=Parent")
         ).toHaveCount(1);
         // locate the Parent button
 
 
         await page
           .frameLocator("#bp-widget")
           .locator("text=Parent")
           .first()
           .click();
 
         // look for parents, there should only be one, the one we picked.
 
         const expectedResultLocator = await page
           .frameLocator("#bp-widget")
           .locator("text=Has your student applied?");
 
         try {
           await expect(expectedResultLocator).toHaveCount(1);
         } catch (error) {
          
           if ((await page
             .frameLocator("#bp-widget")
             .locator("text=Parent").count()) === 2) {
             // record duplicates
             await page.screenshot({
               path: `${testConfig.pathPrefixToDuplicateScreenshot}-${i}.png`,
             });
           }
         }
 
         await page.screenshot({
           path: `live.png`,
         });
       }
 
       await context.close();
}



for (let i = 0; i < 1; i++) {
  test(
    i + "- LIVE after replying, there is no response message",
    async ({ browser }) => {
        await runTests(browser)
    }
  );
}
