const {test,expect}=require('@playwright/test');

test('Homepage',async({page})=>{
await page.goto('https://people.zoho.in/rubixtec/zp#selfservice/user/profile');
let pagetitle=page.title;
console.log("page Title: ", pagetitle);
await expect(page).toHaveTitle('HR Software Solutions | Cloud based HRMS | HR System | Zoho People');
 let pageurl=page.url;
 console.log("paghttps://ms-playwright.gallerycdn.vsassets.io/extensions/ms-playwright/playwright/1.1.2/1715891866562/Microsoft.VisualStudio.Services.Icons.Defaulte url: ", pageurl)
await expect(page).toHaveURL('https://www.zoho.com/people/?zsrc=fromproduct#selfservice/user/profile');
await page.close();
})