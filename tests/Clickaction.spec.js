const{test, expect}=require('@playwright/test');
test ('clickaction',async({page})=>{
   await page.goto('https://people.zoho.in/rubixtec/zp#selfservice/user/profile');
   await page.click('(//a[@class="zgh-login"])[1]');
   //await page.locator('(//a[@class="zgh-login"])[1]').click();
   await page.close();

})