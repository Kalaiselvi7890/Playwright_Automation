import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rubixtek.ezhour.com/account/login');
  await page.getByPlaceholder('User name or email *').click();
  await page.getByPlaceholder('User name or email *').fill('kalaiselvi.k@rubixtek.com');
  await page.getByPlaceholder('Password *').click();
  await page.getByPlaceholder('Password *').fill('Selvi@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByText('Timesheet', { exact: true }).click();
  await page.getByRole('link', { name: 'Timesheet Details' }).click();
  await page.getByText('May 2024 to 01 Jun 2024').click();
  await page.locator('.col > .form-control').first().click();
  await page.locator('div:nth-child(4) > .form-control').click();
  await page.getByRole('combobox').first().selectOption('4');
  await page.getByRole('combobox').nth(1).selectOption('2');
  await page.locator('.ng-dirty > .row > .tabledatas > .tabledesign > .table-row > div:nth-child(4)').click();
  await page.locator('div:nth-child(4) > .form-control').first().fill('8');
  await page.locator('.ng-dirty > .row > .tabledatas > .tabledesign > .table-row > div:nth-child(5)').click();
  await page.locator('div:nth-child(5) > .form-control').first().fill('8');
  await page.locator('.ng-dirty > .row > .tabledatas > .tabledesign > .table-row > div:nth-child(6)').click();
  await page.locator('div:nth-child(6) > .form-control').first().fill('8');
  await page.locator('div:nth-child(7) > .form-control').first().fill('8');
  await page.locator('div:nth-child(7) > .form-control').first().click();
  await page.locator('div:nth-child(8) > .form-control').first().fill('8');
  await page.locator('div:nth-child(8) > .form-control').first().click();
});